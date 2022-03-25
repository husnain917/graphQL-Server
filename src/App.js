import './App.css';
import { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './navigation/ScrollToTop';
import Navigation from './navigation/Navigation';
import SplashScreen from './commonComponents/splash/SplashScreen'
import { ToastContainer } from 'react-toastify';

function App() {
  const [loading, setLoading] = useState(true)
  setTimeout(function () {
    setLoading(false);
  }, 5000);

  return (
    <div className='App'>
      {
        loading ?
          <SplashScreen/>
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
