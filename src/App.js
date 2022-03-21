import './App.css';
import { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './navigation/ScrollToTop';
import Navigation from './navigation/Navigation';
import SampleDataFetch from './lib/queries/SampleDataFetch';
import SplashScreen from './commonComponents/splash/SplashScreen'
import { toast, ToastContainer } from 'react-toastify';

function App() {
  const [loading, setLoading] = useState(true)
  setTimeout(function () {
    setLoading(false);
  }, 0);

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
