import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Card } from '../components/Card'
import { CartShopping } from '../components/CartShopping'


export const Shop = () => {

    const [products, setProducts] = useState([]);

    useEffect(() =>{
        axios.get('./database/Products.json').then((response) =>{
            console.log('Response: ', response);
            setProducts(response.data);
        });
    }, []);
    
  return (
    <main className="main">
        <section className="shop__wrapper">
            <div className="shop__cart-wrapper">
            <CartShopping></CartShopping>
            <h3>Carrito de compras</h3>
            </div>
            <div className="cards">
                <div className="cards__grid">
                   { products.map( product => <Card key={product.id} id={product.id} img={product.image} title={product.name} description={product.description}></Card>)} 
                </div>
            </div>
        </section>
    </main>
  )
}


