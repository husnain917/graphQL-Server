import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './navigation/ScrollToTop';
import Navigation from './navigation/Navigation';
import { useQuery } from '@apollo/client';
import { GET_DATA } from './queries/SampleQuery';
import SampleDataFetch from './queries/SampleDataFetch';

function App() {
  return (
    <div className='App'>
      <Router>
        <ScrollToTop />
        <Navigation />
      </Router>

      <SampleDataFetch />
    </div>
  );
}

export default App;
