import React, { useEffect, useState } from 'react'
import { Card } from '../components/Card'
import { CartShopping } from '../components/CartShopping'

export const Shop = () => {

    const [products, setProducts] = useState([]);

     const getData = () =>{
      fetch('database/Products.json',
          {
              headers:{
                  'Content-Type': 'application/json',
                  'Accept': 'application/json'
              }
          }
          )
          .then(function(response){
              console.log('informacion de response: ', response);
              return response.json();
          })
          .then(function(json) {
              console.log('informacion de json: ', json);
              setProducts(json.data);
          })
  }

    useEffect(() =>{
      getData()
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
                   { products.map( product => <Card img={product.image} title={product.name} description={product.description}></Card>)} 
                </div>
            </div>
        </section>
    </main>
  )
}


