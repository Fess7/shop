import Product from './product.jsx';
import {useCallback, useEffect, useState} from 'react';
import {useTelegram} from '../hooks/useTelegram.jsx';

const ProductList = ({products}) => {
    const [addedProducts, setAddedProducts] = useState([]);
    const {tg, queryId} = useTelegram();

    const getTotalPrice = (items = []) => {
        return items.reduce((acc, item) => {
            return acc += item.price;
        }, 0);
    };

    const onSendData = useCallback(() => {
        const data = {
            products: addedProducts,
            totalPrice: getTotalPrice(addedProducts),
            queryId,
        };
        fetch('http://85.119.146.179', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
    }, [addedProducts, queryId]);

    useEffect(() => {
        tg.onEvent('mainButtonClicked', onSendData);

        return () => {
            tg.offEvent('mainButtonClicked', onSendData);
        };
    }, [onSendData]);

    const onAdd = (product) => () => {
        const alreadyAdded = addedProducts.find(item => item.id === product.id);
        let newProductItems = [];

        if (alreadyAdded) {
            newProductItems = addedProducts.filter(item => item.id !== product.id);
        } else {
            newProductItems = [...addedProducts, product];
        }

        setAddedProducts(newProductItems);

        if (newProductItems.length === 0) {
            tg.MainButton.hide();
            return;
        }

        tg.MainButton.show();
        tg.MainButton.setParams({text: `Купить ${getTotalPrice(newProductItems)}`});
    };

    const items = products.map((product) => <Product key={product.id} product={product} onAdd={onAdd}/>);

    return (
        <div className="product-list">
            {items}
        </div>
    );
};

export default ProductList;
