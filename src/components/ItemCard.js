import React from 'react'
import { storeImages } from '../helpers/storeImages'

const ItemCard = (item) => {
    return (
        <div className="item-card">
            <img className="item-card__img" src={storeImages(`./${'product-1'}.jpg`)} alt="Descripcion de item" />
            <div className="item-card__info">
                <div className="item-card__row">
                    <h4 className="item-card__title">Titulo de carrito</h4>
                    <span className="item-card__close">x</span>
                </div>
                <div className="item-card__row">
                    <p className="item-card__description">La descripcion del producto</p>
                </div>
                <div className="item-card__row">
                    <div className="item-qty">
                        <span className="item-qty__name">
                            Cant
                        </span>
                        <select className="item-qty__combo">
                            <option className="item-qty__option">1</option>
                            <option className="item-qty__option">2</option>
                            <option className="item-qty__option">3</option>
                        </select>
                    </div>
                    <span className="item-card__total">s/.100.00</span>
                </div>
            </div>
        </div>
    )
}

export default ItemCard
