import CartIcon from '../Cart/CartIcon';
import classes from './CartButton.module.css';
import CartContext from '../../store/Cart-item';
import { useContext } from 'react';

const CartButton = (props) => {
  const cartctcx=useContext(CartContext)


  const CartItem= cartctcx.items.reduce((current,item)=>{
    return current+item.amount
  },0)
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{CartItem}</span>
    </button>
  );
};

export default CartButton;