import ItemForm from "./ItemForm";
import classes from "./ListItem.module.css";
export default function ListItem(props) {
  const price = `$${props.price}`;
  return (
    <li className={classes.meal}>
      <div>
        <h3 className={classes.h3}>{props.title}</h3>
        <div className={classes.description}>{props.desc}</div>
        <div className={classes.price}>{price}</div>
      </div>

      <div>
        <ItemForm />
      </div>
    </li>
  );
}
