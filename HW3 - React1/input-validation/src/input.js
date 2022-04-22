import React from 'react';
import { validate } from './validators';

var inputValue;
var inputValidators;

const INPUT_STATES = {
  UNTOUCHED: 'UNTOUCHED',
  VALID: 'VALID',
  INVALID: 'INVALID'
};

const handleChange = (e) => {
  const {name, value} = e.target;
  // var res = validate(value, v);
  // var res = Object.values(inputValidators).forEach(v => {
  //   validate(value, v)
  // });
  // console.log(res)
}

const Input = props => {
  inputValidators = props.validators;
  // examination:
  // console.log(typeof validators);
  // console.log(Object.keys(validators));
  // console.log(Object.values(validators));

  return (
    <div className='form-input' data-testid="form-input">
      <label>{props.label}</label>
      <input value={inputValue} onChange={handleChange}/>
      <p></p>
    </div>
  )
};

export default Input;
