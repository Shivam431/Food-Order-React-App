import { Fragment } from "react";
import Summary from "./Summary";
import FoodAvailability from "./FoodAvailability";

export default function Meal () {
    return (
        <Fragment>
            <Summary />
            <FoodAvailability />
        </Fragment>
    )
}