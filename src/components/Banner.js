import React from 'react'

export const Banner = ({ img }) => {
  return (
    <div className="banner"  style={{ 
      backgroundImage: "url(" + img + ")",
      }} >
      <div className="banner__wrapper">
          <h1 className="banner__title">
            Chris's Shop
          </h1>
          <a className="btn" href="#">Tienda</a>
      </div>
    </div> 
  )
}


