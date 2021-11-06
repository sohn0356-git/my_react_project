export default validation = (value, rules, password) => {
  let valid = true;
  for(let rule in rules){
    switch(rule){
      case "isRequired":
        valid = valid && validateRequired(value);
        break;
      case "minLength":
        valid = valid && validateMinLength(value, rules.minLength);
        break;
      case "isEmail":
        valid = valid && validateEmail(value);
        break;
      case "confirmPassword":
        valid = valid && validateConfirmPassword(value, password);
      default:
        break;
    }
  }
  return valid;
}

const validateRequired = (value) => {
  if(value !== ""){
    return true;
  }
  return false;
}

const validateEmail = (value) => {
  const expression =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return expression.test(String(value).toLocaleLowerCase());
}

const validateMinLength = (value, ruleValue) => {
  return value.length >= ruleValue;
}

const validateConfirmPassword = (value, password) => {
  return value === password;
}