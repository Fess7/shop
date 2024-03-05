import ProductList from './components/product-list.jsx';
import {useEffect, useState} from 'react';
import {useTelegram} from './hooks/useTelegram.jsx';
import Cart from './components/cart.jsx';

function App() {
    const [addedProducts, setAddedProducts] = useState([]);
    const {tg} = useTelegram();

    useEffect(() => {
        tg.ready();
    }, []);

    const products = [
        {
            id: 1,
            src: 'https://images.unsplash.com/photo-1608667508764-33cf0726b13a',
            title: 'Jhang Air Max sneakers',
            desc: 'Это карточка товара. Тут её описание.',
            in_stock: 'В наличии',
            price: '6452',
            old_price: '8054',
            up: true,
        },
        {
            id: 2,
            src: 'https://images.unsplash.com/photo-1608666634759-4376010f863d',
            title: 'Кроссовки Shang Air Max',
            desc: 'Это карточка товара. Тут её описание.',
            in_stock: 'В наличии',
            price: '2452',
            old_price: '3065',
            up: true,
        },
        {
            id: 3,
            src: 'https://images.unsplash.com/photo-1608667508764-33cf0726b13a',
            title: 'Valenki from Matveyevna',
            desc: 'Matveyevna makes felt boots very well and even supplies them to 112 countries in South Africa.',
            in_stock: 'В наличии',
            price: '11680',
            old_price: '15068',
            up: true,
        },
        {
            id: 4,
            src: 'https://images.unsplash.com/photo-1608667508764-33cf0726b13a',
            title: 'Jhang Air Max sneakers',
            desc: 'Это карточка товара. Тут её описание.',
            in_stock: 'В наличии',
            price: '8452',
            old_price: '10565',
        },
        {
            id: 5,
            src: 'https://images.unsplash.com/photo-1608666634759-4376010f863d',
            title: 'Кроссовки Shang Air Max',
            desc: 'Это карточка товара. Тут её описание.',
            in_stock: 'В наличии',
            price: '6452',
            old_price: '8054',
        },
        {
            id: 6,
            src: 'https://images.unsplash.com/photo-1608667508764-33cf0726b13a',
            title: 'Valenki from Matveyevna',
            desc: 'Matveyevna makes felt boots very well and even supplies them to 112 countries in South Africa.',
            in_stock: 'В наличии',
            price: '11680',
            old_price: '15068',
        },
        {
            id: 7,
            src: 'https://images.unsplash.com/photo-1608667508764-33cf0726b13a',
            title: 'Jhang Air Max sneakers',
            desc: 'Это карточка товара. Тут её описание.',
            in_stock: 'В наличии',
            price: '6452',
            old_price: '8054',
        },
        {
            id: 8,
            src: 'https://images.unsplash.com/photo-1608666634759-4376010f863d',
            title: 'Кроссовки Shang Air Max',
            desc: 'Это карточка товара. Тут её описание.',
            in_stock: 'В наличии',
            price: '6452',
            old_price: '8054',
        },
        {
            id: 9,
            src: 'https://images.unsplash.com/photo-1608667508764-33cf0726b13a',
            title: 'Valenki from Matveyevna',
            desc: 'Matveyevna makes felt boots very well and even supplies them to 112 countries in South Africa.',
            in_stock: 'В наличии',
            price: '11680',
            old_price: '15068',
            up: true,
        },
    ];

    return (
        <>
            <ProductList products={products}
                         addedProducts={addedProducts}
                         setAddedProducts={setAddedProducts}/>
            <Cart products={addedProducts} setAddedProducts={setAddedProducts}/>
        </>
    );
}

export default App;
