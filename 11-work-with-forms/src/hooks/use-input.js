import {useState} from "react";

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [enteredValueTouched, setEnteredValueTouched] = useState(false);

  const enteredValueIsValid = validateValue(enteredValue);
  const hasError = !enteredValueIsValid && enteredValueTouched;

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const inputBlurHandler = (event) => {
    setEnteredValueTouched(true);
  };

  const reset = () => {
    setEnteredValue("");
    setEnteredValueTouched(false);
  };

  return {
    value: enteredValue,
    isValid: enteredValueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset
  }
};

export default useInput;