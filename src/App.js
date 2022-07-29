import './App.css';
import React, { useContext, useState } from 'react'
import { BrowserRouter as Router, } from 'react-router-dom';
import ScrollToTop from './navigation/ScrollToTop';
import Navigation from './navigation/Navigation';
import SplashScreen from './commonComponents/splash/SplashScreen'
import { ToastContainer } from 'react-toastify';
import { useMutation } from '@apollo/client';
import { ACTIVE_USER } from './lib/mutation/AllMutations';
import { AppContext } from './State';
import { ToastInfo, ToastSuccess } from './commonComponents/commonFunction/CommonFunction'
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import { createBrowserHistory } from "history";
function App() {
  const history = createBrowserHistory({ window });
  const [loading, setLoading] = useState(true)
  setTimeout(function () {
    setLoading(false);
  }, 5000);

  const { state, dispatch } = useContext(AppContext)
  let [
    GetActiveUser,
    { loading: USER_Loading }
  ] = useMutation(ACTIVE_USER)
  const tokenId = sessionStorage.getItem('token')
  const user = async () => {

    try {
      await GetActiveUser({
        variables: {
          token: tokenId
        },
        onCompleted(login) {
          dispatch({
            type: "setAuthState",
            payload: {
              user: login.getActiveUser,
              authState: true
            },
          });
          const str = login.getActiveUser?.name
          const str2 = str.charAt(0).toUpperCase() + str.slice(1)
          ToastSuccess(`Welcome ${str2}`)
          console.log("redirect", login);
          login.getActiveUser?.userGroup.map((item) => {
            // if (item.userGroupRole === "ORGANIZATIONKEY"){
            dispatch({
              type: "tabsPermission",
              payload: item.tabsPermission?.navigationResults
            })
            // }

          })
        }
      })
    } catch (error) {
      console.log(error.message);
      sessionStorage.clear()
      dispatch({
        type: "setAuthState",
        payload: {
          user: null,
          authState: false
        }
      })
      ToastInfo('Session Expired')
    }
  }
  React.useEffect(() => {
    const token = async () => {
      if (tokenId) {
        user()
      }

    }
    token()
  }, [])
  return (
    <div className='App'>
      {
        loading || USER_Loading ?
          <SplashScreen />
          :
          <HistoryRouter history={history}>
            {/* <Router> */}
            <ScrollToTop />
            <Navigation />
            {/* </Router> */}
          </HistoryRouter>
      }

      {/* <SampleDataFetch /> */}
      <ToastContainer />
    </div>
  );
}

export default App;
