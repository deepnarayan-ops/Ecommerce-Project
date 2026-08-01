import axios from 'axios';
import { useEffect,useState } from 'react';
import { Header } from '../../components/Header';
import { ProductsGrid } from './ProductsGrid';
//import { products } from '../../starting-code/data/products';
import './HomePage.css';

// frontend to backend = Request
// backend to frontend = Response

export function HomePage({ cart,loadCart }) {
    /*fetch('http://localhost:3000/api/products').then((response) => {
        return(response.json());
        }).then((data) => {
            console.log(data);
    }); */

    const [products, setProducts] = useState([]);
    
    
    // due to strictmode in main.jsx useEffect is run 2 to catch bugs only done during development
    // we cant directly use async await inside a useEffect
    useEffect(() => {
        const getHomeData = async () => {
            const response = await axios.get('/api/products')
            setProducts(response.data);
        }

        getHomeData();
    }, []);
    

    return (
        <>
            <title>Ecommerce Project</title>
            <link rel="icon" type="image/svg+xml" href="home-favicon.png" />

            <Header cart={cart} />

            <div className="home-page">
                <ProductsGrid products={products} loadCart={loadCart} />
            </div>
        </>
    );
}