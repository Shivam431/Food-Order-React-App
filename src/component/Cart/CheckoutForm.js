import { useRef, useState } from "react";
import classes from "./Checkout.module.css";

const CheckoutForm = (props) => {
  const name = useRef();
  const address = useRef();
  const postal = useRef();
  const city = useRef();

  const [isFormValid, setFormValid] = useState({
    name: true,
    address: true,
    postal: true,
    city: true,
  });

  const isEmpty = (value) => value.trim() === '';
const isFiveChars = (value) => value.trim().length === 5;
  const confirmHandler = (event) => {
    event.preventDefault();
    const inputName = name.current.value;
    const inputAddress = address.current.value;
    const inputPostal = postal.current.value;
    const inputCity = city.current.value;

    const validName = !isEmpty(inputName);
    const validAddress = !isEmpty(inputAddress);
    const validCity = !isEmpty(inputCity);

    const validPostal = !isFiveChars(inputPostal);

    setFormValid({
      name: validName,
      address: validAddress,
      postal: validPostal,
      city: validCity,
    });

    const formValid = validName && validPostal && validAddress && validCity;
    if (!formValid) {
      return;
    }

    props.onConfirm({
      name: inputName,
      address: inputAddress,
      postal: inputPostal,
      city: inputCity,
    });
  };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={classes.control}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={name} />
        {!isFormValid.name && <p>please enter name</p>}
      </div>
      <div className={classes.control}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={address} />
        {!isFormValid.name && <p>please enter address</p>}
      </div>
      <div className={classes.control}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postal} />
        {!isFormValid.name && <p>please enter postal</p>}
      </div>
      <div className={classes.control}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={city} />
        {!isFormValid.name && <p>please enter city</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default CheckoutForm;
