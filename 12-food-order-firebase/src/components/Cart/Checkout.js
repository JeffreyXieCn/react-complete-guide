import classes from "./Checkout.module.css";
import { useRef, useState } from "react";

const isEmpty = (value) => value.trim() === "";
const isFiveChars = (value) => value.trim().length === 5;

const Checkout = (props) => {
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    street: true,
    city: true,
    postCode: true,
  });

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalCodeInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostcode = postalCodeInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredCityIsValid = !isEmpty(enteredCity);
    const enteredPostcodeIsValid = isFiveChars(enteredPostcode);

    setFormInputsValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      city: enteredCityIsValid,
      postCode: enteredPostcodeIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredPostcodeIsValid &&
      enteredCityIsValid &&
      enteredStreetIsValid;

    if (!formIsValid) {
      return;
    }

    //Submit cart data
    props.onConfirm({
      name: enteredName,
      street: enteredStreet,
      city: enteredCity,
      postCode: enteredPostcode,
    });
  };

  const getInputClasses = (valid) => {
    return `${classes.control} ${valid ? "" : classes.invalid}`;
  };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={getInputClasses(formInputsValidity.name)}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formInputsValidity.name && <p>Please enter a valid name!</p>}
      </div>

      <div className={getInputClasses(formInputsValidity.street)}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
        {!formInputsValidity.street && <p>Please enter a valid street!</p>}
      </div>

      <div className={getInputClasses(formInputsValidity.postCode)}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalCodeInputRef} />
        {!formInputsValidity.postCode && (
          <p>Please enter a valid postal code (5 characters long)!</p>
        )}
      </div>

      <div className={getInputClasses(formInputsValidity.city)}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!formInputsValidity.city && <p>Please enter a valid city!</p>}
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

export default Checkout;
