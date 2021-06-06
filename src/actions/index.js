const menuLoaded = (newMenuItems) => {
  return {
    type: 'MENU_LOADED',
    payload: {
      newMenuItems,
      loading: false,
      failed: false
    }
  }
}

const menuRequsted = () => {
  return {
    type: 'MENU_REQUESTED',
    payload: {
      loading: true
    }
  }
}

const menuFailed = () => {
  return {
    type: 'MENU_FAILED',
    payload: {
      failed: true
    }
  }
}

const cartAddedItem = (i) => {
  return {
    type: 'CART_ADD_ITEM',
    payload: {
      itemId: i
    }
  }
}

const cartDeletedItem = (i) => {
  return {
    type: 'CART_DELETE_ITEM',
    payload: {
      itemId: i
    }
  }
}

const cartCreateOrder = () => {
  return {
    type: 'CART_CREATE_ORDER',
  }
}



export {
  menuLoaded,
  menuRequsted,
  menuFailed,
  cartAddedItem,
  cartDeletedItem,
  cartCreateOrder
}