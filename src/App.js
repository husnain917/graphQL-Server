import logo from './logo.svg';
import './App.css';
// import Sidebar from './components/sidebar/Sidebar';
// import MiniDrawer from './components/dummyDrawer/Drawer';
import Login from './modules/auth/login/Login';
function App() {
  return (
    <div className="App">
      {/* <Sidebar /> */}
      {/* <MiniDrawer /> */}
      {/* <h1>Hello</h1> */}
      <Login />
    </div>
  );
}

export default App;
