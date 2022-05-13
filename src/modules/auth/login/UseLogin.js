import { useMutation, useQuery } from '@apollo/client';
import React, { useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { LOGIN } from '../../../lib/mutation/LoginMutation';
import { toast, Slide } from 'react-toastify';
import { AppContext } from "../../../State";

import { GET_STUDENT, GET_SUCCESS_STORIES, GET_STAFF, GET_COURSES, GET_EVENTS } from '../../../lib/queries/AllQueries';
export default function UseLogin() {
  let navigate = useNavigate();
  const { state, dispatch } = useContext(AppContext);

  React.useEffect(() => {
    if (JSON.parse(sessionStorage.getItem('localAuthState')) === 'true') {
      navigate('/dashboard')
      console.log('after');
    }
  }, [])
  const { data: data1 } = useQuery(GET_STUDENT)
  const { data: data2 } = useQuery(GET_SUCCESS_STORIES)
  const { data: data3 } = useQuery(GET_STAFF)
  const { data: data4 } = useQuery(GET_COURSES)
  const { data: data5 } = useQuery(GET_EVENTS)
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