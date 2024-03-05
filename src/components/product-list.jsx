import Product from './product.jsx';

const ProductList = ({products, addedProducts, setAddedProducts}) => {
    const onAdd = (product) => () => {
        const alreadyAdded = addedProducts.find(item => item.id === product.id);
        let newProductItems = [];

        if (alreadyAdded) {
            newProductItems = addedProducts.filter(item => item.id !== product.id);
        } else {
            newProductItems = [...addedProducts, product];
        }

        setAddedProducts(newProductItems);
    };

    const items = products.map((product) => <Product key={product.id} product={product} onAdd={onAdd}/>);

    return (
        <div className="product-list">
            {items}
        </div>
    );
};

export default ProductList;
