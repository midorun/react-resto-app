import React from 'react';
import { connect } from 'react-redux'
import cartIcon from './shopping-cart-solid.svg';
import './app-header.scss';
import { Link } from 'react-router-dom';

const AppHeader = ({ cartItemsTotalPrice }) => {



  return (
    <header className="header">

      <Link className="header__link" to="/">Menu</Link>
      <Link className="header__link" to="/cart">
        <img className="header__cart" src={cartIcon} alt="cart"></img>
        Total: {cartItemsTotalPrice} $
      </Link>
    </header>
  )
};

const mapStateToProps = ({ cartItemsTotalPrice }) => {
  return {
    cartItemsTotalPrice
  }
}

export default connect(mapStateToProps)(AppHeader);