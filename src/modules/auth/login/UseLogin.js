import { useMutation } from '@apollo/client';
import { useState, useContext, useEffect } from 'react';
import { LOGIN, ORG_LOGIN } from '../../../lib/mutation/LoginMutation';
import { AppContext } from "../../../State";
import { ToastError, ToastSuccess } from '../../../commonComponents/commonFunction/CommonFunction';
export default function UseLogin() {

  const { state, dispatch } = useContext(AppContext);

  const [email, setEmail] = useState('');
  const [values, setValues] = useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    emailTyping: false,
    passwordTyping: false,
  });
  const [showPassword , setShowPassword] = useState(false);

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const emailTyping = () => {
    setValues({ ...values, emailTyping: true  });
  };
  const emaiTypingRemove = () => {
    setValues({ ...values, emailTyping: false  });

  }
  const passwordTyping = ()=> {
    setValues({ ...values, passwordTyping: true  });
  }
  const passwordTypingRemove = ()=> {
    setValues({ ...values, passwordTyping: false  });
  };

  const handleClickShowPassword = () => {
    // setValues({
    //   ...values,
    //   showPassword: true,
    // });
    setShowPassword(!showPassword)
    console.log('Value of ShowPAssword' , showPassword);
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
          localStorage.setItem("token", login.token)
          dispatch({
            type: "setAuthState",
            payload: {
              user: login,
              authState: true
            },
          });
          ToastSuccess(`Welcome ${login.name}`)

        },
      })
    }
    catch (error) {
      ToastError(error.message)
    }
  }
  const [orgLogin, setOrgLogin] = useState(false)

  let [OrganizationLogin, { loading: ORG_LOADING }] = useMutation(ORG_LOGIN)
  const organizationLoginHandler = async () => {
    try {
      await OrganizationLogin({
        variables: {
          password: values.password,
          email: email

        },
        onCompleted(login) {
          localStorage.setItem("token", login.organizationLogin.token)
          dispatch({
            type: "setAuthState",
            payload: {
              user: login.organizationLogin,
              authState: true
            },
          });

          ToastSuccess(`Welcome ${login.organizationLogin.name}`)


        },
      })
    } catch (error) {
      ToastError("Not Valid Member")
    }
  }
  const ctaOrgHandler = (e) => {

    setOrgLogin(!orgLogin)
  }

  return [{ values, handleChange, handleClickShowPassword, organizationLoginHandler, state, email, orgLogin, setEmail, loginHandler, loading, ORG_LOADING, ctaOrgHandler , emailTyping , emaiTypingRemove , passwordTyping , passwordTypingRemove , showPassword}]
}