import CartIcon from '../Cart/CartIcon';
import classes from './CartButton.module.css';
import CartContext from '../../store/Cart-item';
import { useContext, useState,useEffect } from 'react';

const CartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartctcx=useContext(CartContext)


  const CartItem= cartctcx.items.reduce((current,item)=>{
    return current+item.amount
  },0)

  const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;

  useEffect(() => {
    if (CartItem.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [CartItem]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{CartItem}</span>
    </button>
  );
};

export default CartButton;