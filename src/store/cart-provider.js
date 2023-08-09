import { useReducer } from "react";

import CartContext from "./Cart-item";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    const sameItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const sameItem = state.items[sameItemIndex];

    let updatedItems;

    if (sameItem) {
      const updatedItem = {
        ...sameItem,
        amount: sameItem.amount + action.item.amount,
      };

      updatedItems = [...state.items];
      updatedItems[sameItemIndex]= updatedItem;
    }
    else{
      updatedItems = state.items.concat(action.item)
    }
   

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    // dispatchCartAction({type: 'REMOVE', id: id});
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
