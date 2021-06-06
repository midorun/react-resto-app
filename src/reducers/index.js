const initialState = {
  menuItems: [],
  cartItems: [
  ],
  loading: true,
  failed: false,
  cartItemsTotalPrice: 0
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'MENU_LOADED':
      const { newMenuItems, loading, failed } = action.payload
      return {
        ...state,
        menuItems: newMenuItems,
        loading: loading,
        failed: failed
      }

    case 'MENU_REQUESTED':
      return {
        ...state,
        loading: action.payload.loading
      }

    case 'MENU_FAILED':
      return {
        ...state,
        failed: action.payload.failed
      }
    case 'CART_ADD_ITEM':
      const addedItemId = action.payload.itemId

      let addedItem = state.cartItems.find(item => item.id === addedItemId)
      if (addedItem) {
        addedItem.quantity++
      } else {
        addedItem = state.menuItems.find(item => item.id === addedItemId)
        addedItem.quantity = 1
        state.cartItems.push(addedItem)
      }

      return {
        ...state,
        cartItems: [
          ...state.cartItems
        ],
        cartItemsTotalPrice: state.cartItems.reduce((total, current) => total + current.price * current.quantity, 0)
      }

    case 'CART_DELETE_ITEM':
      const newCartItems = state.cartItems.filter(item => item.id !== action.payload.itemId)
      return {
        ...state,
        cartItems: [
          ...newCartItems
        ],
        cartItemsTotalPrice: newCartItems.reduce((total, current) => total + current.price * current.quantity, 0)
      }
    case 'CART_CREATE_ORDER':
      return state
    default:
      return state
  }
}

export default reducer;
