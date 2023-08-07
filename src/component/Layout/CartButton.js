import { Fragment } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./CartButton.module.css"
export default function CartButton () {
return (
    <Fragment>
        <button className={classes.button}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>
                Cart
            </span>
            <span className={classes.badge}>
                3
            </span>
        </button>
    </Fragment>
)
}