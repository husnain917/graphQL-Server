import { useMutation } from '@apollo/client';
import { useState, useContext, useEffect } from 'react';
import { LOGIN } from '../../../lib/mutation/LoginMutation';
import { AppContext } from "../../../State";
import { ToastError } from '../../../commonComponents/commonFunction/CommonFunction';
import { ACTIVE_USER } from '../../../lib/mutation/AllMutations';
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



  let [Mutation, { loading }] = useMutation(LOGIN)
  const loginHandler = async () => {
    try {
      await Mutation({
        variables: {
          password: values.password,
          email: email,
        },
        onCompleted({ login }) {
          dispatch({
            type: "setAuthState",
            payload: {
              user: login,
              authState: true
            },
          });
          localStorage.setItem("token", login.token)
          
        },
      })
    }
    catch (error) {
      ToastError(error.message)


    }
  }



  return [{ values, handleChange, handleClickShowPassword, email, setEmail, loginHandler, loading }]
}