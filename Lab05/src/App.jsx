import Field from "./components/Field";
import Button from "./components/Button";

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

function App() {
  return (
    <div className="App">
      <h1>React Lab 5</h1>
      <h1>Login</h1>
      <div className="Container">
        <Field label="Email" value="" />
        <Field label="Password" value="" />

        <div className="Buttons">
          <Button label="Clear" />
          <div className="Spacer" />
          <Button label="Login" />
        </div>
      </div>
    </div>
  );
}

export default App;