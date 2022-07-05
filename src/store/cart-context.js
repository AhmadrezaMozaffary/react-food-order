import React from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItam: (item) => {},
  removeItam: (id) => {},
  clearCart: () => {},
});

export default CartContext;
