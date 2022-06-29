import React from "react";

import CartContext from "./cart-context";

const CartProvider = (props) => {
  const addItamToCartHandler = (item) => {};

  const removeItamFromCartHandler = (id) => {};

  const cartCtx = {
    items: [],
    totalAmount: 0,
    addItam: addItamToCartHandler,
    removeItam: removeItamFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartCtx}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
