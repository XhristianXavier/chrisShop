import React from 'react'
import { storeImages } from '../helpers/storeImages'

export const CartShopping = () => {
  return (
    <a href="#" className="cart-shopping">
        <img className="cart-shopping__image" src={storeImages('./cart-shopping-icon.png')} alt="icono de carrito de compras" />
        <span className="cart-shopping__count">
            ( 0 ) 
        </span>
    </a>
  )
}

