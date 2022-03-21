import { useMutation } from '@apollo/client';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { LOGIN } from '../../../lib/mutation/LoginMutation';
import { toast ,Slide} from 'react-toastify';
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
  const notifyError = () => toast.error('Incorrect email or password', {
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
        },
      })


    }
    catch (error) {
      notifyError()

    }
  }

  return [{ values, handleChange, handleClickShowPassword, email, setEmail, loginHandler, loading }]
}