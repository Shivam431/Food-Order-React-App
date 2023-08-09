import { useRef, useState } from "react";
import Input from "../../UI/Input";
import classes from "./ItemForm.module.css";

const ItemForm = (props) => {
  const amountInputRef = useRef();
  const [valid, isVlid] = useState(true);

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const enteredAmount = +amountInputRef.current.value;

    if (
      enteredAmount < 1 ||
      enteredAmount > 5
    ) {
      isVlid(false);
      return;
    }

    props.onAddToCart(enteredAmount);
  };
  return (
    <form className={classes.form} onSubmit={ onSubmitHandler }>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!valid && <p>please entered the valid amount (1-5)</p>}
    </form>
  );
};

export default ItemForm;
