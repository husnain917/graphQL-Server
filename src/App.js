import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './navigation/ScrollToTop';
import Navigation from './navigation/Navigation';
import SampleDataFetch from './lib/queries/SampleDataFetch';

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
