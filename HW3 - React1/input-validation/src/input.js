import React from 'react';
import { validate } from './validators';
import { useState } from 'react';

const INPUT_STATES = {
  UNTOUCHED: 'UNTOUCHED',
  VALID: 'VALID',
  INVALID: 'INVALID'
};

const Input = props => {
  const [errorMessage, setErrorMessage] = useState("");
  // const [n, setN] = useState(0);

  // examination:
  // console.log(typeof inputValidators);
  // console.log(Object.keys(inputValidators));
  // console.log(Object.values(inputValidators));

  const handleChange = (e) => {
    const {name, value} = e.target;
    let valid = validate(value, props.validators);

    console.log(valid);
    if (valid){
      setErrorMessage("");
      const element = document.getElementById(props.id);
      element.classList.remove("form-input--invalid");
    }

    if (!valid){
      setErrorMessage(props.errorText);
      
      // const myForm = document.getElementById(props.id).getElementsByClassName('form-input');
      const element = document.getElementById(props.id);
      // console.log(element);
      element.classList.add("form-input--invalid");
    }
  };

  return (
    <div id={props.id} className='form-input' data-testid="form-input">
      <label>{props.label}</label>
      <input onChange={handleChange}/>
      <p>{errorMessage}</p>
    </div>
  )
};

export default Input;
