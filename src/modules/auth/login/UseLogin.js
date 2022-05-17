import { useMutation, useQuery } from '@apollo/client';
import React, { useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { LOGIN } from '../../../lib/mutation/LoginMutation';
import { toast, Slide } from 'react-toastify';
import { AppContext } from "../../../State";

export default function UseLogin() {
  const { state, dispatch } = useContext(AppContext);

  const [email, setEmail] = useState('');
  const [values, setValues] = useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };



  let [Login, { loading }] = useMutation(LOGIN)
  const notifyError = (error) => toast.error(error, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    transition: Slide,
  });
  const loginHandler = async () => {
    try {
      await Login({
        variables: {
          password: values.password,
          email: email
        },
        onCompleted({ login }) {
          dispatch({
            type: "setAuthState",
            payload: {
              user: login,
              authState: true
            },
          });
        },
        onError(error) {
          notifyError(error.message)

        }
      })
    }
    catch (error) {
      console.log("errorerror", error);
      notifyError(error)

    }
  }


  return [{ values, handleChange, handleClickShowPassword, email, setEmail, loginHandler, loading }]
}