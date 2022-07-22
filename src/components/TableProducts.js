import React from 'react'
import ComboBox from './ComboBox'

const TableProducts = () => {
  return (
    <table className="table-products">
        <thead className="table-products__header">
            <tr className="table-products__row">
                <th className="table-products__cell table-products__cell--header">
                    Producto
                </th>
                <th className="table-products__cell table-products__cell--header">
                    Cantidad
                </th>
                <th className="table-products__cell table-products__cell--header">
                    SubTotal
                </th>
                <th>
                    
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="table-products__row">
                <td className="table-products__cell">
                    Item 1
                </td>
                <td className="table-products__cell">
                    <ComboBox></ComboBox>
                </td>  
                <td className="table-products__cell">
                    132.00
                </td>
                <td className="table-products__cell">
                    Rem..
                </td>          
            </tr>
            <tr className="table-products__row">
                <td className="table-products__cell">
                    Item 1
                </td>
                <td className="table-products__cell">
                    <ComboBox></ComboBox>
                </td>  
                <td className="table-products__cell">
                    132.00
                </td>
                <td className="table-products__cell">
                    Rem..
                </td>          
            </tr>
            <tr className="table-products__row">
                <td className="table-products__cell">
                    Item 1
                </td>
                <td className="table-products__cell">
                    <ComboBox></ComboBox>
                </td>  
                <td className="table-products__cell">
                    132.00
                </td>
                <td className="table-products__cell">
                    Rem..
                </td>          
            </tr>
        </tbody>
    </table>
  )
}

export default TableProducts
