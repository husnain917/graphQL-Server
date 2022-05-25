import { useMutation } from '@apollo/client';
import { useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { LOGIN } from '../../../lib/mutation/LoginMutation';
import { AppContext } from "../../../State";
import { ToastError } from '../../../commonComponents/commonFunction/CommonFunction';
export default function UseLogin() {
  const navigate = useNavigate()
  // const cc = localStorage.getItem('auth')
  // if (cc === true) {
  //   navigate('/dashboard')
  // }


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

  const loginHandler = async () => {
    console.log(email);
    console.log(values.password);

    try {
      await Login({
        variables: {

          email: email,
          password: values.password,
        },
        onCompleted({ login }) {
          navigate("/dashboard")
          dispatch({
            type: "setAuthState",
            payload: {
              user: login,
              authState: true
            },
          });

        },
      })

    }
    catch (error) {
      ToastError(error.message)


    }
  }


  return [{ values, handleChange, handleClickShowPassword, email, setEmail, loginHandler, loading }]
}