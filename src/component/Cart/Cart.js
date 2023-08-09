import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import { useContext } from "react";
import CartContext from "../../store/Cart-item";
import CartItem from "./CartItem";

export default function Cart(props) {
  const cartctx = useContext(CartContext);
  const totAmount = `$${cartctx.totalAmount.toFixed(2)}`;
  const hasItem = cartctx.items.length > 0;
  console.log(cartctx.items);
  const cartItemRemoveHandler = (id) => {};

  const cartItemAddHandler = () => {};
  const CartItems = (
    <ul className={classes["cart-items"]}>
      {cartctx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onAdd={cartItemAddHandler.bind(null, item)}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onCloseCart}>
      {CartItems}
      <div className={classes.total}>
        <span>total amount</span>
        <span>{totAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onCloseCart}>
          close
        </button>
        {hasItem && (
          <button
            className={classes.button}
            onClick={() => {
              console.log("orderring!!!!");
              props.onCloseCart();
            }}
          >
            order
          </button>
        )}
      </div>
    </Modal>
  );
}
