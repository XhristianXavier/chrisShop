import axios from 'axios';
import React, { useEffect, useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router';
import { CartShopping } from '../components/CartShopping';
import { storeImages } from '../helpers/storeImages';
import { NavLink } from 'react-router-dom';
import { RadioButton } from '../components/RadioButton';

export const Product = () => {

  const { productId } = useParams();
  const navigate = useNavigate();

  //const product = useMemo( () => getProductId(productId), [productId])


  const [product, setProduct] = useState({});
  const [productSizes, setProductSizes] = useState([]);
  const [cantidadProducto, setCantidadProducto] = useState(0);

  useEffect(() => {
    axios.get('../database/Products.json').then((response) => {
      const products = response.data;
      const productFindById = products.filter((product) => product.id === Number(productId))[0];
      setProduct(productFindById);
      setProductSizes(productFindById.sizes);
    });
  }, []);

  return (
    <main className="main">
      <div className="product">
        <div className="product__cart-wrapper">
          <CartShopping></CartShopping>
          <h3>Carrito de compras</h3>
        </div>
        <div className="product__wrapper">
          <img className="product__image" src={storeImages(`./product-2.jpg`)} alt={product.name} />
          <div className="product-features">
            <div className="product-features__wrapper">
              <h2 className="product-features__title">{product.name}</h2>
              <span className="product-features__price">S/. {product.price}</span>
              <div className="product-sizes">
                <div className="product-sizes__title">Talla:</div>
                {
                  productSizes.map((size) =>
                    <RadioButton key={size.id} value={`${size.value} (${size.range})`}></RadioButton>
                  )
                }
              </div>
              <div className="product-cant">
                <div className="product-cant__cart-shop">En stock: 4 productos disponibles</div>
                <span className="product-cant__text-cant">Cantidad:</span>
                <input className="product-cant__input" type="text" value={cantidadProducto} />
                <NavLink className="product-cant__addcart" to="#">Agregar al carrito</NavLink>
                {/* <NavLink className="product-cant__checkout" to="#">Ir a la caja</NavLink> */}
              </div>
              <div className="product-offers">
                <span className="product-offers__title">Compra más, ahorra más</span>
                <table className="product-table">
                  <thead className="product-table__head">
                    <tr className="product-table__row">
                      <th className="product-table__cell product-table__cell--head">
                        Cantidad
                      </th>
                      <th className="product-table__cell product-table__cell--head">
                        Precio por item
                      </th>
                      <th className="product-table__cell product-table__cell--head">
                        Descuento
                      </th>
                    </tr>
                  </thead>
                  <tbody className="product-table-body">
                    <tr className="product-table__row">
                      <td className="product-table__cell">
                        3 items
                      </td>
                      <td className="product-table__cell">
                        120
                      </td>
                      <td className="product-table__cell">
                        4%
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="product-detail">
            <div className="product-detail__wrapper">
              <h3 className="product-detail__title">
                Detalles del producto:
              </h3>
              <p className="product-detail">
                {product.detail}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

