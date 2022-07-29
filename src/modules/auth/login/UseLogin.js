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
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const emailTyping = () => {
    setValues({ ...values, emailTyping: true });
  };
  const emaiTypingRemove = () => {
    setValues({ ...values, emailTyping: false });

  }
  const passwordTyping = () => {
    setValues({ ...values, passwordTyping: true });
  }
  const passwordTypingRemove = () => {
    setValues({ ...values, passwordTyping: false });
  };

  const handleClickShowPassword = () => {
    // setValues({
    //   ...values,
    //   showPassword: true,
    // });
    setShowPassword(!showPassword)
    console.log('Value of ShowPAssword', showPassword);
  };



  let [Login, { loading }] = useMutation(LOGIN)
  const loginHandler = async () => {
    console.log(email);
    console.log(values.password,);
    try {
      await Login({
        variables: {
          password: values.password,
          email: email,
        },
        onCompleted({ login }) {
          localStorage.setItem("token", login.token)
          var userNameStr= login.name
          var activeUserName=userNameStr.charAt(0).toUpperCase() + userNameStr.slice(1)
          dispatch({
            type: "setAuthState",
            payload: {
              user: login,
              authState: true
            },
          });
          ToastSuccess(`Welcome ${activeUserName}`)
          if (login.userGroup?.userGroupRole === "STUDENT") {
            dispatch({
              type: "tabsPermission",
              payload: login.userGroup?.tabsPermission?.navigationResults
            })
          }
          else if (login.userGroup?.userGroupRole === "ADMIN") {
            dispatch({
              type: "tabsPermission",
              payload: login.userGroup?.tabsPermission?.navigationResults
            })
          }
          else if (login.userGroup?.userGroupRole === "TEACHER") {
            dispatch({
              type: "tabsPermission",
              payload: login.userGroup?.tabsPermission?.navigationResults
            })
          }
        },
      })
    }
    catch (error) {
      ToastError(error.message)
    }
  }

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
          var orgNameStr= login.organizationLogin.name
          var activeOrgUser=orgNameStr.charAt(0).toUpperCase() + orgNameStr.slice(1)
          dispatch({
            type: "setAuthState",
            payload: {
              user: login,
              authState: true
            },
          });
          ToastSuccess(`Welcome ${activeOrgUser}`)
          login.organizationLogin?.userGroup.map((item) => {
            if (item.userGroupRole === "ORGANIZATIONKEY")
              dispatch({
                type: "tabsPermission",
                payload: item.tabsPermission?.navigationResults
              })

          })


        },
      })
    } catch (error) {
      ToastError("Not Valid Member")
    }
  }
  const [orgLogin, setOrgLogin] = useState(true)

  const ctaOrgHandler = (e) => {
    setOrgLogin(!orgLogin)
    dispatch({
      type: "ORGlogin",
      payload: orgLogin
    })
  }

  return [{ values, handleChange, handleClickShowPassword, organizationLoginHandler, state, email, orgLogin, setEmail, loginHandler, loading, ORG_LOADING, ctaOrgHandler, emailTyping, emaiTypingRemove, passwordTyping, passwordTypingRemove, showPassword }]
}