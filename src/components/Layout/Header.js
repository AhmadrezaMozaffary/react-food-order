import React from "react";

import classes from "./Header.module.css";
import mealsImg from "../../assets/meals.jpeg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>Food Order</h1>
        <HeaderCartButton onClick={props.onShowCart}>
          Your Cart
        </HeaderCartButton>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImg} alt="Delicious foods" />
      </div>
    </>
  );
};

export default Header;
