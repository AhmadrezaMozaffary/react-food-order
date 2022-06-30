import React, { useRef, useState } from "react";

import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const inputConfig = {
    id: "amount",
    type: "number",
    min: "1",
    max: "5",
    step: "1",
    defaultValue: "1",
  };

  const [amountIsValid, setAmountIsValid] = useState();

  const amountInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredAmountNum = +amountInputRef.current.value;

    if (!enteredAmountNum || enteredAmountNum < 1 || enteredAmountNum > 5) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNum);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input lable="Amount" input={inputConfig} ref={amountInputRef} />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1 to 5)</p>}
    </form>
  );
};

export default MealItemForm;
