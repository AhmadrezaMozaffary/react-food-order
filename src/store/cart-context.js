import React from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItam: (item) => {},
  removeItam: (id) => {},
});

export default CartContext;
