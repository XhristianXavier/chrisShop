import React from 'react'
import { storeImages } from '../helpers/storeImages'

export const Card = ({img, title, description}) => {
    const imgWithPath = storeImages(`./${img}`);

  return (
    <a className="card" href="#">
        <img className="card__img" src={imgWithPath} alt={title} />
        <div className="card__info">
            <div className="card__title">{title}</div>
            <p className="card__description">{description}</p>
        </div>
    </a>
  )
}

