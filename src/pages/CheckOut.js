import React from 'react'
import { NavLink } from 'react-router-dom'
import TableProducts from '../components/TableProducts'


const CheckOut = () => {
    return (
        <main className="main">
            <section className="checkout">
                <div className="checkout__wrapper">
                    <div className="shopping-cart">
                        <h2 className="shopping-cart__title"> Carrito de compras</h2>
                        <div className="shopping-cart__links">
                            <NavLink className="shopping-cart__link" to="#">Tienda</NavLink> / 
                            <NavLink className="shopping-cart__link" to="#">Carrito de compras</NavLink>
                        </div>
                        <TableProducts></TableProducts>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default CheckOut
