import { Fragment } from "react";
import classes from "./FoodAvailability.module.css";
import Card from "../UI/Card";
import ListItem from "./ListMeal/ListItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

export default function FoodAvailability() {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <ListItem
      id={meal.id} // this is new!
      key={meal.id}
      title={meal.name}
      desc={meal.description}
      price={meal.price}
    />
  ));
  return (
    <Fragment>
      <section className={classes.meals}>
        <Card>
          <ul>{mealsList}</ul>
        </Card>
      </section>
    </Fragment>
  );
}
