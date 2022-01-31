import './App.css';
import { BrowserRouter as Router} from "react-router-dom";
import ScrollToTop from './navigation/ScrollToTop';
import Navigation from './navigation/Navigation';

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Navigation />
      </Router>
    </div>
  );
}

export default App;
