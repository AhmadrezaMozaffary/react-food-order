import React from "react";

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

  return (
    <form className={classes.form}>
      <Input lable="Amount" input={inputConfig} />
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;
