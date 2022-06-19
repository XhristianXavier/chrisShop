import React, { useEffect, useState } from 'react'
import classNames from 'classnames';
import '../styles/styles.scss';
import { CartShopping } from './CartShopping';
import { NavLink } from 'react-router-dom';

export const Header = () => {

  const [menuBurguerActive, setMenuBurguerActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = classNames({active: menuBurguerActive})

  useEffect(() => {
    window.onscroll = function() {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
  }, []);
  return (
    <header className={scrolled ? ("header header-shadow " + active) : ("header " + active) }>
      <div className="header__wrapper">
        <button className="menu-burguer" onClick={() =>{
           setMenuBurguerActive((menuBurguerActive) => !menuBurguerActive)}}>
          <div className="menu-burguer__bar-one"></div>
          <div className="menu-burguer__bar-two"></div>
          <div className="menu-burguer__bar-three"></div>
        </button>
        <a href="#" className="header-logo">
         <span className="header-logo__name">Chris's shop</span>
        </a>
        <nav className="header-nav">
          <ul className="header-nav__menu">
            <li className="header-nav__item">
              <NavLink className="header-nav__link" to="/">
                Home
              </NavLink>
            </li>
            <li className="header-nav__item">
              <a className="header-nav__link" href="#">
                Galeria
              </a>
            </li>
            <li className="header-nav__item">
              <NavLink className="header-nav__link" to="/shop">
                Tienda
              </NavLink>
            </li>
            <li className="header-nav__item">
              <NavLink className="header-nav__link" to="/contacts">
                Contactanos
              </NavLink>
            </li>
            <li className="header-nav__item">
              <a className="header-nav__link" href="#">
                Acerca de nosotros
              </a>
            </li>
          </ul>
          <CartShopping></CartShopping>
        </nav>
      </div>
    </header>
  )
}
