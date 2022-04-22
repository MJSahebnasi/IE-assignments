export const VALIDATOR_TYPE_REQUIRE = 'REQUIRE';
export const VALIDATOR_TYPE_MINLENGTH = 'MINLENGTH';
export const VALIDATOR_TYPE_MAXLENGTH = 'MAXLENGTH';
export const VALIDATOR_TYPE_MIN = 'MIN';
export const VALIDATOR_TYPE_MAX = 'MAX';
export const VALIDATOR_TYPE_EMAIL = 'EMAIL';

export const VALIDATOR_REQUIRE = () => ({type: VALIDATOR_TYPE_REQUIRE});
export const VALIDATOR_MINLENGTH = val => ({
  type: VALIDATOR_TYPE_MINLENGTH,
  val: val
});
export const VALIDATOR_MAXLENGTH = val => ({
  type: VALIDATOR_TYPE_MAXLENGTH,
  val: val
});
export const VALIDATOR_MIN = val => ({type: VALIDATOR_TYPE_MIN, val: val});
export const VALIDATOR_MAX = val => ({type: VALIDATOR_TYPE_MAX, val: val});
export const VALIDATOR_EMAIL = () => ({type: VALIDATOR_TYPE_EMAIL});

export const validate = (value, validators) => {
  // console.log(value);
  // console.log(validators);

  let isValid = true;
  for (const validator of validators) {

    // console.log(validator.type);
    // console.log(validator.value);
    // let v = VALIDATOR_REQUIRE();
    // console.log(typeof v);

    if (validator.type === VALIDATOR_TYPE_REQUIRE) {
      isValid = isValid && value.trim().length > 0;
      console.log("name shit")
    }
    if (validator.type === VALIDATOR_TYPE_MINLENGTH) {
      isValid = isValid && value.trim().length >= validator.val;
    }
    if (validator.type === VALIDATOR_TYPE_MAXLENGTH) {
      isValid = isValid && value.trim().length <= validator.val;
    }
    if (validator.type === VALIDATOR_TYPE_MIN) {
      isValid = isValid && +value >= validator.val;
    }
    if (validator.type === VALIDATOR_TYPE_MAX) {
      isValid = isValid && +value <= validator.val;
    }
    if (validator.type === VALIDATOR_TYPE_EMAIL) {
      isValid = isValid && /^\S+@\S+\.\S+$/.test(value);
    }
  }

  // console.log(isValid);

  return isValid;
};
