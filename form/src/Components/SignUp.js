import React from 'react'
import {Formik, Form} from 'formik';
import TextField from "./Components/Textfield";


const SignUp = () => {
    return (
      <Formik
      initialValues= {{
          firstName: '',
          LastName: '',
          email: '',
          password: '',
          confirmPass: ''
      }}
      validationSchema = {validate}
      onSubmit = {values => {
          console.log(values)
      }}
      >
          
        {(formik) => (
          <div>
            <h1 className="my-4 font-weight-bold .display-4">Sign Up</h1>
            <Form>
              <TextField label="First Name" name="firstName" type="text" />
              <TextField label="last Name" name="lastName" type="text" />
              <TextField label="Email" name="email" type="email" />
              <TextField label="password" name="password" type="password" />
              <TextField
                label="Confirm Password"
                name="confirmPassword"
                type="password"
              />
              <button className="btn btn-dark mt-3" type="submit">
                Register
              </button>
              <button className="btn btn-danger mt-3 ml-3" type="reset">
                Reset
              </button>
            </Form>
          </div>
        )}
      </Formik>
    );
}

export default SignUp
