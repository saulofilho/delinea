import React from 'react';
import { Link } from "react-router-dom";
import { ErrorMessage, Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import { history } from '../../history';
import '../login/Login.css';

const Register = () => {
  const handleSubmit = values => {
    axios.post('http://localhost:8080/v1/api/user', values)
      .then(resp => {
        const { data } = resp
        if (data) {
          history.push('/')
        }
      })
  }

  const validations = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(8).required()
  })
  return (
    <div id="sign-up" className="small-container">
      <h3>Registre-se</h3>
      <div className="box-group">
        <Formik
          initialValues={{}}
          onSubmit={handleSubmit}
          validationSchema={validations}
        >
          <Form className="Login">
            <div className="Login-Group">
              <Field
                name="firstName"
                className="Login-Field"
                placeholder="Nome"
              />
              <ErrorMessage
                component="span"
                name="firstName"
                className="Login-Error"
              />
            </div>
            <div className="Login-Group">
              <Field
                name="email"
                className="Login-Field"
                placeholder="Email"
              />
              <ErrorMessage
                component="span"
                name="email"
                className="Login-Error"
              />
            </div>
            <div className="Login-Group">
              <Field
                name="password"
                className="Login-Field"
                placeholder="Senha"
              />
              <ErrorMessage
                component="span"
                name="password"
                className="Login-Error"
              />
            </div>
            <button className="Login-Btn" type="submit">Register</button>
          </Form>
        </Formik>
        <div id="btn-login">
          <Link to="/">Login</Link>
        </div>
      </div>
    </div>
  )
};

export default Register;