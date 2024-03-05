import {useCallback, useState} from 'react';
import {useTelegram} from '../hooks/useTelegram.jsx';

const Cart = ({products, setAddedProducts}) => {
    const [open, toggle] = useState(false);
    const [info, setInfo] = useState({});
    const {queryId} = useTelegram();

    const getTotalPrice = (items = []) => {
        return items.reduce((acc, item) => {
            return acc += Number(item.price);
        }, 0);
    };

    const totalPrice = getTotalPrice(products);
    const amount = products.length;

    const onSendData = useCallback(() => {
        const data = {
            info,
            products,
            totalPrice,
            queryId,
        };
        console.log('queryId', queryId, products, getTotalPrice(products));
        fetch('http://localhost/orders.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }).then(() => {
            setAddedProducts([]);
            setInfo({});
            toggle(false);
        });
    }, [products, info, queryId]);

    // useEffect(() => {
    //     tg.onEvent('mainButtonClicked', onSendData);
    //
    //     return () => {
    //         tg.offEvent('mainButtonClicked', onSendData);
    //     };
    // }, [onSendData]);

    // useEffect(() => {
    //     if (products.length === 0 || data.name == null || data.address == null) {
    //         tg.MainButton.hide();
    //         return;
    //     }
    //
    //     tg.MainButton.show();
    //     tg.MainButton.setParams({text: 'Оформить заказ'});
    // }, [products]);

    const isValidated = () => {
        if (info.name == null || info.address == null || info.name === '' || info.address === '') {
            return true;
        }

        return false;
    };

    const isValidatedProducts = () => {
        if (products.length === 0) {
            return true;
        }

        return false;
    };

    const hide = () => toggle(false);
    const show = () => toggle(true);

    return (
        <>
            <button className="cart" onClick={show}>{amount > 0 ? amount : 0}</button>
            <div className={`form ${open ? 'form--open' : ''}`}>
                <button className="form__close" onClick={hide}>x</button>
                <h3>Корзина</h3>
                <div className="form__input-block">
                    <input type="text" name="name" placeholder="Введите имя"
                           value={info.name || ''}
                           onChange={(e) => setInfo({...info, ['name']: e.target.value})}/>
                </div>
                <div className="form__input-block">
                    <input type="text" name="address" placeholder="Введите адрес доставки"
                           value={info.address || ''}
                           onChange={(e) => setInfo({...info, ['address']: e.target.value})}/>
                </div>

                {amount > 0 && (
                    <div className="cart-list">
                        Список заказанного:
                        <ol>
                            {products.map((product, index) => <li key={index}>{product.title}</li>)}
                        </ol>
                    </div>
                )}

                {isValidated() && <span style={{display: 'block', paddingBottom: '20px', color: '#e86b6b'}}>Заполните все данные</span>}
                {isValidatedProducts() &&
                    <span style={{display: 'block', paddingBottom: '20px', color: '#e86b6b'}}>Выберите товары</span>}

                <div className="form__buttons">
                    <button onClick={onSendData} disabled={isValidated() || isValidatedProducts()}>
                        Оформить заказ
                    </button>
                </div>
            </div>
        </>
    );
};

export default Cart;
