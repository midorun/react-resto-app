import React from 'react';
import { connect } from 'react-redux';
import { cartDeletedItem, cartCreateOrder } from '../../actions'
import CartItem from './cart-item/cart-item';
import WithRestoService from '../hoc/with-resto-service'
// import moduleName from '../../services/resto-service';
import './cart-table.scss';

const CartTable = ({ cartItems, cartDeletedItem, cartCreateOrder, RestoService }) => {

  const handleOrderButton = (cartItems) => {
    cartCreateOrder()
    RestoService.addOrderToDB(cartItems).then(res => console.log(res))
  }

  return (
    <>
      <div className="cart__title">Ваш заказ:</div>
      <div className="cart__list">
        {
          cartItems.map(cartItem => <CartItem key={cartItem.id} cartItem={cartItem} onCartDeleteItem={cartDeletedItem} />)
        }
      </div>

      {
        cartItems.length ?
          <button className="cart__submit" onClick={() => handleOrderButton(cartItems)}>Заказать</button> :
          null
      }

    </>
  );
};

const mapStateToProps = ({ cartItems }) => {
  return {
    cartItems
  }
}

const mapDispatchToProps = {
  cartDeletedItem,
  cartCreateOrder
}

export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(CartTable));