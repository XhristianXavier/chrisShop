import React from 'react'
import { Banner } from '../components/Banner'
import { CartShopping } from '../components/CartShopping';
import { storeImages } from '../helpers/storeImages'


export const Home = () => {
    const img =  storeImages('./banner-img.jpg');
    return (
    <>
        <Banner img = {img}></Banner>
        <main className="main">
            <section className="section-peruvian">
                <div className="section-peruvian__wrapper">
                    <h2 className="section-peruvian__title">Hecho por peruanos</h2>
                    <img className="section-peruvian__image" src={storeImages('./section-peruvians.jpg')} alt="Imagen de tienda nacional" />
                    <p className="section-peruvian__description">Productos de importación y exportación</p>
                </div>
            </section>
            <section className="section-handmade">
                <div className="section-handmade__wrapper">
                    <div className="handmade-text">
                        <h2 className="handmade-text__title">Zapatillas artesanales</h2>
                        <p className="handmade-text__description">Contamos con zapatillas artesanales hecho en Perú, fabricado a partir de insumos 100% peruanos.</p>
                    </div>
                    <img className="section-handmade__image" src={storeImages('./section-handmade.jpg')} alt="Imagen de zapatillas artesanales" />
                    <div className="btn-handmade">
                        <a href="#" className="btn">Sobre nosotros</a>
                    </div>
                </div>
            </section>
            <section className="section-quality"> 
                <div className="section-quality__wrapper">
                    <div className="quality-text">
                        <h2 className="quality-text__title">Calidad, por supuesto</h2>
                        <p className="quality-text__description">No hace falta decir que estamos orgullosos de la durabilidad y estabilidad de Chris's shop.</p>
                    </div>
                    <img className="section-quality__image" src={storeImages('./section-quality.jpg')} alt="Imagen de zapatillas de calidad" />
                </div>
            </section>
            <section className="section-cheap">
                    <div className="section-cheap__wrapper">
                        <div className="cheap-text">
                            <h2 className="cheap-text__title">Precios económicos</h2>
                            <p className="cheap-text__description">Ve inmediatamente a nuestras tiendas o compra online, contamos con zapatillas de toda clase de precios.</p>
                        </div>
                        <img className="section-cheap__image" src={storeImages('./section-cheap.jpg')} alt="Imagen de zapatillas económicas"/>
                    </div>
            </section>
            <section className="section-luxury">
                    <div className="section-luxury__wrapper">
                        <div className="luxury-text">
                            <h2 className="luxury-text__title">Productos de lujo</h2>
                            <p className="luxury-text__description"> Te ofrecemos zapatillas de fabricación internacional de lujo.</p>
                        </div>
                        <img className="section-luxury__image" src={storeImages('./section-luxury.jpg')} alt="Imagen de zapatillas económicas"/>
                    </div>
            </section>
            <div className="cart-shopping-wrapper">
                <CartShopping></CartShopping>
                <h3 className="cart-shopping-wrapper__title">Tu carrito de compras</h3>
            </div>
        </main>
    </>
    )
}

