import Field from "./components/Field";
import Button from "./components/Button";


import React, { useState, useReducer } from "react";
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

/* const ACTIONS = {
  CLEAR: "clear",
  VALIDATE: "validate",
  SET_EMAIL: "setEmail",
  SET_PASSWORD: "setPassword",
} */

/* function reducer(state, action) {
  switch (action.type) {
    case "clear":
      return { ...state, email: "", password: "" };
    case "validate":
      return { ...state, email: action.payload };
    default:
      return state;
  }
} */

function App() {

/*   const [state, dispatch] = useReducer(reducer, { email: "", password: "" }); */
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  function validateEmail() {
    var startWithLetter = /^[a-zA-Z]/;
    var hasAt = /@/;
    var hasLettersBetweenAtAndDot = /^[a-zA-Z]+@+[a-zA-Z]/;
    var endsWithCom = /^[a-zA-Z]+@[a-zA-Z]+.com$/;
    if (!startWithLetter.test(email)) {
      return "Email must start with a letter";
    } else if (!hasAt.test(email)) {
      return "Email must have an @";
    } else if (!hasLettersBetweenAtAndDot.test(email)) {
      return "Email must have letters between @ and .";
    } else if (!endsWithCom.test(email)) {
      return "Email must end with .com";
    }else{
      return null;
    }
  }

  function validatePassword() {
    var hasLower = /[a-z]/.test(password);
    var hasUpper = /[A-Z]/.test(password);
    var hasNumber = /\d/.test(password);
    var hasSpecialCharacter = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);
    var isLongEnough = /^.{8,}$/.test(password);
  
   if (!hasLower) {
      return "Password must have at least one lowercase letter";
   } else if (!hasUpper) {
      return "Password must have at least one uppercase letter";
   } else if (!hasNumber) {
      return  "Password must have at least one number";
   } else if (!hasSpecialCharacter) {
      return "Password must have at least one special character";
   } else if (!isLongEnough) {
      return "Password must be at least 8 characters long";
   } else{
      return null;
   }
  }

  function validateCredentials() {
    setEmailError(validateEmail);
    setPasswordError(validatePassword);
    if (validateEmail() == null && validatePassword() == null) {
      setLoggedIn(true);
      console.log("Logged in!");
    }
  }

  const clearForm = () => {
    console.log("Clearing form");
    console.log(email + ",  " + password);

    setEmail(""),
    setPassword("")
    /* dispatch({ type: ACTIONS.CLEAR }); */
    console.log("2: " + email + ",  " + password);

  }
  

  return (
    <div className="App">
      <h1>React Lab 5</h1>
      <h1>Login</h1>
      <div className="Container">
        <Field 
          label="Email"  
          onChange={(e)=> setEmail(e.target.value)} 
          value={email} 
          errorMessage={emailError}/>
        <Field 
          label="Password"  
          onChange={(e)=> setPassword(e.target.value)} 
          value={password} 
          errorMessage={passwordError}/> 

        <div className="Buttons">
          <button onClick={ clearForm } className="Button">
            <div className="Button__Label">Clear</div>
          </button>

          <div className="Spacer" />

          <button onClick={ validateCredentials } className="Button">
            <div className="Button__Label">Login</div>
          </button>

          {/* <Button label="Clear" onClick={clearForm}/> 
          <div className="Spacer" />
          <Button label="Login" onClick={ ()=> this.validateCredentials() } /> */}
        </div>
      </div>
    </div>
  );
}

export default App;