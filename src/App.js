import './App.css';
import React, { useContext, useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './navigation/ScrollToTop';
import Navigation from './navigation/Navigation';
import SplashScreen from './commonComponents/splash/SplashScreen'
import { ToastContainer } from 'react-toastify';
import { useMutation } from '@apollo/client';
import { ACTIVE_USER } from './lib/mutation/AllMutations';
import { AppContext } from './State';
import { ToastInfo, ToastSuccess } from './commonComponents/commonFunction/CommonFunction'
function App() {
  const [loading, setLoading] = useState(true)
  setTimeout(function () {
    setLoading(false);
  }, 0);

  const { state, dispatch } = useContext(AppContext)
  let [GetActiveUser, { loading: USER_Loading }] = useMutation(ACTIVE_USER)
  const user = async () => {
    const tokenId = await localStorage.getItem('token')
    console.log(tokenId);
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

          login.getActiveUser?.userGroup.map((item) => {
            if (item.userGroupRole === "ORGANIZATIONKEY")
              dispatch({
                type: "tabsPermission",
                payload: item.tabsPermission?.navigationResults
              })

          })
          var nameStr = login.getActiveUser?.name
          var activeUser=nameStr.charAt(0).toUpperCase() + nameStr.slice(1)
          ToastSuccess(`Welcome ${activeUser}`)
          console.log("redirect", login);
        }

      })

    } catch (error) {
      console.log(error.message);
      localStorage.clear()
      ToastInfo('Session Expired')
    }
  }
  React.useEffect(() => {
    const token = async () => {
      const tokenId1 = await localStorage.getItem('token');
      if (tokenId1) {
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
          <Router>
            <ScrollToTop />
            <Navigation />
          </Router>
      }

      {/* <SampleDataFetch /> */}
      <ToastContainer />
    </div>
  );
}

export default App;
