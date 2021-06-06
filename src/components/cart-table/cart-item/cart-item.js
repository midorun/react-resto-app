import React from 'react'

import './cart-item.scss'
const CartItem = ({
  cartItem: {
    id, title, price, url, quantity
  },
  onCartDeleteItem
}) => {
  return (
    <div className="cart__item">
      <img src={url} className="cart__item-img" alt={title}></img>
      <div className="cart__item-title">{title}</div>
      <div className="cart__item-price">{price}$</div>
      <div className="cart__item-quantity">{quantity}</div>
      <div className="cart__item-close" onClick={() => onCartDeleteItem(id)}>&times;</div>
    </div>
  )
}

export default CartItem
