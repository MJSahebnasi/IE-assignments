import React from 'react';
import { validate } from './validators';
import { useState } from 'react';

const INPUT_STATES = {
  UNTOUCHED: 'UNTOUCHED',
  VALID: 'VALID',
  INVALID: 'INVALID'
};

const Input = props => {
  let inputValidators = props.validators;
  const [errorMessage, setErrorMessage] = useState("");
  // const [n, setN] = useState(0);

  // examination:
  // console.log(typeof inputValidators);
  // console.log(Object.keys(inputValidators));
  // console.log(Object.values(inputValidators));

  const handleChange = (e) => {
    const {name, value} = e.target;
    let valid = validate(value, inputValidators);

    console.log(valid);
    if (valid){
      setErrorMessage("");
    }

    if (!valid){
      console.log("not valid");
      console.log(props.errorText);
      setErrorMessage(props.errorText);
      // errorMessage = props.errorText;
    }
  };

  return (
    <div className='form-input' data-testid="form-input">
      <label>{props.label}</label>
      <input onChange={handleChange}/>
      <p>{errorMessage}</p>
    </div>
  )
};

export default Input;
