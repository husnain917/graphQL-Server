import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import { unstable_HistoryRouter, useNavigate } from "react-router-dom";
import { LOGIN } from '../../../lib/mutation/AllMutation';
// import { unstable_HistoryRouter } from "react-router-dom";
export default function UseLogin() {
  let navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [values, setValues] = useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });
  // let history = unstable_HistoryRouter();
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };
  let [Login, { loading, error }] = useMutation(LOGIN)
  const loginHandler = async (setAuthState) => {


    try {
      await Login({
        variables: {
          password: values.password,
          email: email
        },
        onCompleted() {
          setAuthState(true);
          navigate('/dashboard')
          // history.push("/dashboard");

        },

      })


    }
    catch (error) {
      console.log(error.message);
    }
  }

  return [{ values, handleChange, handleClickShowPassword, email, setEmail, loginHandler, loading }]
}