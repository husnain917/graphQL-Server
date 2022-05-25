import { useMutation } from '@apollo/client';
import { useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { LOGIN } from '../../../lib/mutation/LoginMutation';
import { AppContext } from "../../../State";
import { ToastError } from '../../../commonComponents/commonFunction/CommonFunction';
export default function UseLogin() {
  const { state, dispatch } = useContext(AppContext);
  const navigate = useNavigate()
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
          password: values.password,
          email: email
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

        onError(error) {
          ToastError(error)

        }
      })
    }
    catch (error) {
      ToastError(error)


    }
  }


  return [{ values, handleChange, handleClickShowPassword, email, setEmail, loginHandler, loading }]
}