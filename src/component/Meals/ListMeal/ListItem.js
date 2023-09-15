import { useContext } from "react";
import ItemForm from "./ItemForm";
import classes from "./ListItem.module.css";
import CardContext from "../../../store/Cart-item";
export default function ListItem(props) {
  const cartctx = useContext(CardContext);
  const price = `$${props.price}`;

  const addToCartHandler = (enteredAmount) => {
    cartctx.addItem({
      id: props.id,
      name: props.title,
      amount: enteredAmount,
      price: props.price,
    });
  };
  return (
    <li className={classes.meal}>
      <div>
        <h3 className={classes.h3}>{props.title}</h3>
        <div className={classes.description}>{props.desc}</div>
        <div className={classes.price}>{price}</div>
      </div>

      <div>
        <ItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
}
