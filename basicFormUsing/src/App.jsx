import { useState } from "react";
import "./index.css";

function App() {

  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  })


  const [submitted, setSubmitted] = useState(false);

  const [valid, setValid] = useState(false)

  const handleFirstNameInputChange = (event) => {
    setValues({ ...values, firstName: event.target.value })
  };

  const handleLastNameInputChange = (event) => {
    setValues({ ...values, lastName: event.target.value })
  };

  const handleEmailInputChange = (event) => {
    setValues({ ...values, email: event.target.value })
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if(values.firstName && values.lastName && values.email){
      setValid(true)
    }
    setSubmitted(true)
  }

  return (
    <div className='formContainer'>
      <form className='registerForm' onSubmit={handleSubmit}>
        {submitted && valid ?<div className="successMessage">success! thank you for register</div> : null}

        <input
          onChange={handleFirstNameInputChange}
          value={values.firstName}
          id='first-name'
          className='formField'
          type="text"
          placeholder='enter your name'
          name='firstName' />
        {submitted && !values.firstName ? <span id="email-error">Please enter a first name</span> : null}

        <input
          onChange={handleLastNameInputChange}
          value={values.lastName}
          id='last-name'
          className='formField'
          type="text"
          placeholder='enter your last name'
          name='lastName' />
        {submitted && !values.lastName ? <span id="email-error">Please enter a last name</span> : null}

        <input
          onChange={handleEmailInputChange}
          value={values.email}
          id='email'
          className='formField'
          type="text"
          placeholder='enter your email'
          name='email' />
        {submitted && !values.email ?<span id="email-error">Please enter an email address</span> : null}

        <button className="formField" type="submit">register</button>

      </form>
    </div>
  )
}

export default App
