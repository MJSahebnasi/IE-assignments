import React from 'react';
import { validate } from './validators';
import { useState } from 'react';

const INPUT_STATES = {
  UNTOUCHED: 'UNTOUCHED',
  TOUCHED: 'TOUCHED',
  NORMAL: 'NORMAL'
};

const Input = props => {
  const [errorMessage, setErrorMessage] = useState("");
  let [state, setState] = useState(INPUT_STATES.UNTOUCHED);
  // let [valid, setValid] = useState(null);

  // examination:
  // console.log(typeof inputValidators);
  // console.log(Object.keys(inputValidators));
  // console.log(Object.values(inputValidators));

  const handleFocus = () => {
    // console.log('in hndFcs');

    // if (state === INPUT_STATES.UNTOUCHED){
    //   setState(INPUT_STATES.TOUCHED);
    //   console.log('unt -> touched');
    // }
  }
  const handleBlur = () => {
    // console.log('in hndBlr');

    // if (state === INPUT_STATES.TOUCHED){
    //   setState(INPUT_STATES.NORMAL);
    //   console.log('touched -> normal');

    //   if (valid){
    //     setErrorMessage("");
    //     const element = document.getElementById(props.id);
    //     element.classList.remove("form-input--invalid");
    //   }
    //   if (!valid){
    //     setErrorMessage(props.errorText);
    //     const element = document.getElementById(props.id);
    //     element.classList.add("form-input--invalid");
    //   }
    // }
  }
  const handleChange = (e) => {
    const {name, value} = e.target;
    let validationRes = validate(value, props.validators);
    // setValid(validationRes);

    // if (valid && state === INPUT_STATES.NORMAL){
    if (validationRes){
      setErrorMessage("");
      const element = document.getElementById(props.id);
      element.classList.remove("form-input--invalid");
    }

    // if (!valid && state === INPUT_STATES.NORMAL){
    if (!validationRes){
      setErrorMessage(props.errorText);
      
      const element = document.getElementById(props.id);
      element.classList.add("form-input--invalid");
    }
  };

  return (
    <div id={props.id} className='form-input' data-testid="form-input">
      <label>{props.label}</label>
      <input onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur}/>
      <p>{errorMessage}</p>
      <p>{state}</p>
    </div>
  )
};

export default Input;
