import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
export default function UseLogin() {
  let navigate = useNavigate();
  const[loading,setLoading]=useState(false);
  const [email, setEmail] = React.useState('');
  const [values, setValues] = React.useState({
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
  
  const loginHandler = (setAuthState) =>{
      navigate('/dashboard')
      setAuthState(true);
  }

  return [{values, handleChange, handleClickShowPassword,email,setEmail,loginHandler,loading}]
}