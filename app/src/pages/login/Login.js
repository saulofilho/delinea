import React from 'react';
import { Link } from "react-router-dom";
import { ErrorMessage, Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import { history } from '../../history';

import './Login.css'

const Login = () => {
    const handleSubmit = values => {
        axios.post('http://localhost:8080/v1/api/auth', values)
            .then(resp => {
                const { data } = resp
                if (data) {
                    localStorage.setItem('app-token', data)
                    history.push('/app')
                }
            })
        // console.log(values)
    };

    const validations = yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().min(8).required()
    })
    return (
        <div id="sign-up" className="small-container">
            <h3>Login</h3>
            <div className="box-group">
                <Formik
                    initialValues={{}}
                    onSubmit={handleSubmit}
                    validationSchema={validations}
                >
                    <Form className="Login">
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
                        <button className="Login-Btn" type="submit">Login</button>
                    </Form>
                </Formik>
                <div id="btn-login">
                    <Link to="/register">Criar conta</Link>
                </div>
            </div>
        </div>
    )
};

export default Login;