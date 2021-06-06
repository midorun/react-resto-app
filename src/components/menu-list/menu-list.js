import React, { useEffect } from 'react';
import MenuListItem from '../menu-list-item';
import WithRestoService from '../hoc/with-resto-service'
import Spinner from '../spinner'
import Error from '../error'
import './menu-list.scss';
import { connect } from 'react-redux';
import { menuFailed, menuLoaded, menuRequsted, cartAddedItem } from '../../actions';

const MenuList = ({
  RestoService,
  menuLoaded,
  menuRequsted,
  menuFailed,
  cartAddedItem,
  menuItems,
  loading,
  failed }) => {

  useEffect(() => {
    menuRequsted()

    RestoService.getMenuItems()
      .then(menuItems => menuLoaded(menuItems))
      .catch(error => menuFailed(error))
  }, [RestoService, menuFailed, menuLoaded, menuRequsted])

  if (failed) {
    return <Error />
  }

  if (loading) {
    return <Spinner />
  }

  return (
    <ul className="menu__list">
      {
        menuItems.map(menuItem => <MenuListItem key={menuItem.id} menuItem={menuItem} onAddToCart={cartAddedItem} />)
      }
    </ul>
  )
};

const mapStateToProps = (state) => {
  const { menuItems, loading, failed } = state
  return {
    menuItems: menuItems,
    loading: loading,
    failed: failed
  }
}

const mapDispatchToProps = {
  menuLoaded,
  menuRequsted,
  menuFailed,
  cartAddedItem
}


export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)((MenuList)));