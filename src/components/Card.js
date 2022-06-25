import React from 'react'
import { Link } from 'react-router-dom';
import { storeImages } from '../helpers/storeImages'

export const Card = ({id,img, title, description}) => {
  return (
    <Link className="card" to={`/product/${id}`}>
        <img className="card__img" src={storeImages(`./${img}.jpg`)} alt={title} />
        <div className="card__info">
            <div className="card__title">{title}</div>
            <p className="card__description">{description}</p>
        </div>
    </Link>
  )
}

