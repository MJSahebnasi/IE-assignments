import React from 'react';
import { validate } from './validators';

// const inputValue = {name: null, username: null, email:null, age:null};
// const inputValidators = {name: null, username: null, email:null, age:null};
var inputValue;
var inputValidators;

const INPUT_STATES = {
  UNTOUCHED: 'UNTOUCHED',
  VALID: 'VALID',
  INVALID: 'INVALID'
};

const handleChange = (e) => {
  const {name, value} = e.target;
  // console.log(e.target);
  console.log(value);
  console.log(inputValidators);

  // var res = validate(value, Object.values(inputValidators));
  var res = validate(value, inputValidators);
  // var res = Object.values(inputValidators).forEach(v => {
  //   validate(value, v)
  // });
  // console.log(res);
}

const Input = props => {
  inputValidators = props.validators;
  // console.log(props);
  // examination:
  // console.log(typeof validators);
  // console.log(Object.keys(validators));
  // console.log(Object.values(validators));

  return (
    <div className='form-input' data-testid="form-input">
      <label>{props.label}</label>
      <input onChange={handleChange}/>
      <p></p>
    </div>
  )
};

export default Input;
