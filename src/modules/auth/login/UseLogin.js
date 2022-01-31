import React, { useState } from 'react';
export default function UseLogin() {
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
  
  const loginHandler = () =>{
      alert('Login Function Called')
  }

  return [{values, handleChange, handleClickShowPassword,email,setEmail,loginHandler,loading}]
}