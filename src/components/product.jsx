const Product = ({product, onAdd}) => {
    return (
        <div className="product-card">
            <div className="product-card__image">
                <img
                    src="https://images.unsplash.com/photo-1608667508764-33cf0726b13a?crop=edges&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;w=600&amp;h=450&amp;q=80"
                    alt={product.title}/>
            </div>
            <div className="product-card__body"><span className="product-card__title">{product.title}</span>
                <div className="product-card__id">Артикул: {product.id}</div>
                <div className="product-card__desc">{product.desc}</div>
                <div className="product-card__stock">{product.in_stock}</div>
                <div className="product-card__price price">
                    <span className="price__current">
                        {new Intl.NumberFormat('ru-RU', {style: 'currency', currency: 'RUB'}).format(product.price)}
                    </span>
                    <span className="price__old">
                        {new Intl.NumberFormat('ru-RU', {style: 'currency', currency: 'RUB'}).format(product.old_price)}
                   </span>
                </div>
                <div className="product-card__labels">
                    {product.up ? <span className="label label_hit">Хит</span> : null}
                    <span className="label label_sale">Скидка -25%</span>
                </div>
            </div>
            <div className="product-card__btn">
                <button className="btn btn_product" type="button" onClick={onAdd(product)}>Добавить в корзину</button>
            </div>
        </div>
    );
};

export default Product;
