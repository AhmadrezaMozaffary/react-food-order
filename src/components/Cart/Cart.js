import React, { useContext, useState } from "react";

import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";

import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

const Cart = (props) => {
  const [isCheckout, setIsCheckOut] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmitted, setDidSubmited] = useState(false);

  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItam(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItam({ ...item, amount: 1 });
  };

  const orderHandler = (e) => {
    e.preventDefault();
    setIsCheckOut(true);
  };

  const submitOrderHandler = (userData) => {
    setIsSubmitting(true);

    fetch("https://react-http-42477-default-rtdb.firebaseio.com/orders.json", {
      method: "POST",
      body: JSON.stringify({
        user: userData,
        orderedItems: cartCtx.items,
      }),
    }).finally(() => {
      setIsSubmitting(false);
      setDidSubmited(true);
      cartCtx.clearCart();
    });
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const modalActions = (
    <div className={classes.actions}>
      <button className={classes["button--alt"]} onClick={props.onClose}>
        Close
      </button>
      {hasItems && (
        <button className={classes["button"]} onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  );

  const cartModalContent = (
    <>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && (
        <Checkout
          onConfirm={submitOrderHandler}
          onCancel={props.onClose}
          submition={{ isSubmitting, didSubmitted }}
        />
      )}
      {!isCheckout && modalActions}
    </>
  );

  const isSubmittingContent = <p>Sending order ...</p>;

  const didSubmittedContent = (
    <>
      <p>Submitted ✅</p>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
      </div>
    </>
  );

  return (
    <Modal onClose={props.onClose}>
      {!isSubmitting && !didSubmitted && cartModalContent}
      {isSubmitting && isSubmittingContent}
      {!isSubmitting && didSubmitted && didSubmittedContent}
    </Modal>
  );
};

export default Cart;
