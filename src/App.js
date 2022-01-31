import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import AllAdmins from './modules/adminPortal/allAdmins/AllAdmins';
import AllStudents from './modules/adminPortal/allStudents/AllStudents';
import AllTeachers from './modules/adminPortal/allTeachers/AllTeachers';

function App() {
  return (
    <div>
      <Sidebar >
        {/* <AllStudents /> */}
        {/* <AllTeachers /> */}
        <AllAdmins />
      </Sidebar>
    </div>
  );
}

export default App;
