import { Fragment } from "react";
import classes from './Header.module.css'
import image from "../../assests/meals.jpg"
import CartButton from "./CartButton";

export default function Header (props) {
return (
    <Fragment>
        <header className={classes.header}>
          <h1>Fresh Meals</h1>
          <CartButton />
        </header>
        <div className={classes['main-image']}>
        <img src={image} alt="Meal pic" />
        </div>
        
       
    </Fragment>
)
}