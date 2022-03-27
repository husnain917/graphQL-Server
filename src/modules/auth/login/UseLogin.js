import { useMutation, useQuery } from '@apollo/client';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { LOGIN } from '../../../lib/mutation/LoginMutation';
import { toast, Slide } from 'react-toastify';
import { GET_STUDENT, GET_SUCCESS_STORIES, GET_STAFF, GET_COURSES, GET_EVENTS } from '../../../lib/queries/AllQueries';
export default function UseLogin() {
  let navigate = useNavigate();

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
        onCompleted({ login }) {


          if (login) {
            localStorage.setItem('user', JSON.stringify(login));
            localStorage.setItem('localAuth', JSON.stringify(true));
            setAuthState(true); // highlight-line
            navigate('/dashboard')
            localStorage.setItem('studentCount', data1 ? data1?.findManyStudents.length : 0);
            localStorage.setItem('successCount', data2 ? data2.findManySuccessStories.length : 0);
            localStorage.setItem('staffCount', data3 ? data3.findManyStaff.length : 0);
            localStorage.setItem('courseCount', data4 ? data4.findManyCourses.length : 0);
            localStorage.setItem('eventCount', data5 ? data5.findManyEvents.length : 0);
            localStorage.setItem('adminCount', login.role === 'admin' ? 1 : 0);

           
          }
        },
      })



    }
    catch (error) {
      notifyError()

    }
  }


  return [{ values, handleChange, handleClickShowPassword, email, setEmail, loginHandler, loading }]
}