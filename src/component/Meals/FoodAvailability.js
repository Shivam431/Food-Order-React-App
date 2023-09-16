import { Fragment, useEffect, useState } from "react";
import classes from "./FoodAvailability.module.css";
import Card from "../UI/Card";
import ListItem from "./ListMeal/ListItem";

export default function FoodAvailability() {
  const [meals, setMeals] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [rqstError, setRqstError] = useState();
  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://react-http-710b4-default-rtdb.firebaseio.com/meals.json"
      );
      if (!response.ok) {
        throw new Error("something went wrong!!");
      }
      const data = await response.json();

      const loadedMeals = [];

      for (const key in data) {
        loadedMeals.push({
          id: key,
          key: key,
          title: data[key].title,
          desc: data[key].description,
          price: data[key].price,
        });
      }
      setMeals(loadedMeals);
      setLoading(false);
    };

    fetchMeals().catch((error) => {
      setLoading(false);
      setRqstError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section className={classes.mealsLoading}>
        <p>loading</p>
      </section>
    );
  }

  if (rqstError) {
    return (
      <Card>
        <section className={classes.mealsError}>
          <p>{rqstError}</p>
        </section>
      </Card>
    );
  }

  const mealsList = meals.map((meal) => (
    <ListItem
      id={meal.id}
      key={meal.id}
      title={meal.title}
      desc={meal.desc}
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
