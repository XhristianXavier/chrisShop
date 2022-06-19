import React from 'react'
import { storeImages } from '../helpers/storeImages'

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
            <ul className="footer-contacts">
                <li className="footer-contacts__title">
                    Contacto
                </li>
                <li className="footer-contacts__phone">
                    +51 999 999 999
                </li>
                <li className="footer-contacts__email">
                    hello@hotmail.com
                </li>
            </ul>
            <div className="footer-social-media">
                <a className="footer-social-media__facebook" href="#">
                    <img className="footer-social-media__img" src={storeImages('./facebook.png')} alt="Imagen de red social Facebook" />
                </a>
                <a className="footer-social-media__instagram" href="#">
                    <img className="footer-social-media__img" src={storeImages('./instagram.png')} alt="Imagen de red social Instagram" />
                </a>
            </div>
            <div className="footer-logo-company">
                Chris's shop
            </div>
      </div>
    </footer>
  )
}

