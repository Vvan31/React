import Field from "./components/Field";
import Button from "./components/Button";


import React, { useReducer } from "react";
/**
 *
 *
 * Create a form with common features like validation and hint messages.
 *
 * - Add validation for email and password (https://www.w3schools.com/howto/howto_js_password_validation.asp)
 * - Show a hint message for validation errors
 * - Show a confirmation alert/modal/dialog when the Clear button is pressed
 * - Clear the form when the dialog is confirmed
 * - When validation checks are good, show a confirmation alert/modal/dialog
 * - Manage the state of the form using React Hooks (useState, useEffect, useReducer)
 *
 */

ACTIONS:{
  CLEAR: "clear"
  VALIDATE: "validate"
}

function reducer(state, action) {
  switch (action.type) {
    case "clear":
      return { email: "", password: "" };
    case "validate":
      return { ...state, email: action.payload };
    default:
      return state;
  }
}

function App() {

  const [state, dispatch] = useReducer(reducer, { email: "", password: "" });

  function validateEmail(email) {
    var re = /[a-zA-Z]\S+@\S+\[a-zA-Z]\S+\.com\S+/;
/*     var startWithLetter = /^[a-zA-Z]/;
    var hasAt = /@/;
    var hasLettersBetweenAtAndDot = /[a-zA-Z]/;
    var hasDot = /\./;
    var endsWithCom = /.com$/; */
    return re.test(email);
  }

  function validatePassword(password) {
    var hasLower = /[a-z]/.test(password);
    var hasUpper = /[A-Z]/.test(password);
    var hasNumber = /\d/.test(password);
    var hasSpecialCharacter = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);
  
   if (!hasLower) {
      console.log("Password must have at least one lowercase letter");
      return false;
   } else if (!hasUpper) {
      console.log("Password must have at least one uppercase letter");
      return false;
   } else if (!hasNumber) {
      console.log("Password must have at least one number");
      return false;
   } else if (!hasSpecialCharacter) {
      console.log("Password must have at least one special character");
      return false;
   } else{
      console.log("Valid password");
      return true;
   }
  }

  function validateCredentials(email, password) {
    console.log("Validating credentials");
    dispatch({ type: ACTIONS.VALIDATE, payload: { email, password }});
  }


  function clearForm() {
    console.log("Clearing form");
    dispatch({ type: ACTIONS.CLEAR });
  }

  return (
    <div className="App">
      <h1>React Lab 5</h1>
      <h1>Login</h1>
      <div className="Container">
        <Field label="Email" value="" />
        <Field label="Password" value="" />

        <div className="Buttons">
          <Button label="Clear" onClick={() => clearForm()}/>
          <div className="Spacer" />
          <Button label="Login" onClick={ validateCredentials } />
        </div>
      </div>
    </div>
  );
}

export default App;