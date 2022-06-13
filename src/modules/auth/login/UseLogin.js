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

  console.log(orgLogin);


  return [{ values, handleChange, handleClickShowPassword, organizationLoginHandler, state, email, orgLogin, setEmail, loginHandler, loading, ORG_LOADING, ctaOrgHandler }]
}