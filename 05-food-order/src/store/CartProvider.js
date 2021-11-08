import CartContext from "./cart-context";
import { useReducer } from "react";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    let updatedItems;
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    if (existingItemIndex !== -1) {
      // this item already exists in the cart, just update its amount
      updatedItems = state.items.slice();
      updatedItems[existingItemIndex].amount += action.item.amount;
    } else {
      // a new item
      updatedItems = state.items.concat(action.item);
    }

    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  } else if (action.type === "REMOVE") {
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    if (existingItemIndex !== -1) {
      let updatedItems = state.items.slice();
      updatedItems[existingItemIndex].amount -= 1;
      const updatedTotalAmount =
        state.totalAmount - updatedItems[existingItemIndex].price * 1;
      if (updatedItems[existingItemIndex].amount === 0) {
        updatedItems.splice(existingItemIndex, 1);
      }

      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    } else {
      return state;
    }
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
    dispatchCartAction({ type: "REMOVE", id: id });
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
