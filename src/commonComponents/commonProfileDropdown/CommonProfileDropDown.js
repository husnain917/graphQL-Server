import * as React from 'react';
import { CPD } from './CommonProfileDropDownStyle'
import img from '../../assets/profile.jpg'
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../State';
import student from '../../assets/profile/student.png'
import teacher from '../../assets/profile/teacher.png'
import admin from '../../assets/profile/admin.png'
import owner from '../../assets/profile/owner.png'
import { UseDrawer } from '../sidebar/UseSidebar';

export default function CommonProfileDropDown() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate()
  const { state, dispatch } = React.useContext(AppContext);
const [{ctaLogoutHandler}] = UseDrawer()
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);

  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const ctaHandler = () => {
    dispatch({
      type: "setAuthState",
      payload: {
        user: null,
        authState: false
      }
    })
    localStorage.removeItem('token')
    navigate('/login')
    window.reload()
  }


  return (
    <div>
      <CPD.IconButton
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        {
          state.user?.role === "OWNER" ?
            <CPD.ProfileLinkImage src={owner} alt='img' />
            :
            state.user?.role === "ADMIN" ?
              <CPD.ProfileLinkImage src={admin} alt='img' />
              :
              state.user?.role === "TEACHER" ?
                <CPD.ProfileLinkImage src={teacher} alt='img' />
                :
                state.user?.role === "STUDENT" ?
                  <CPD.ProfileLinkImage src={student} alt='img' />
                  :
                  ''
        }
      </CPD.IconButton>

      <CPD.Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <CPD.DropDown >
          <CPD.ProfileLink to={`/profile/id`} onClick={handleClose}>Profile</CPD.ProfileLink >
        </CPD.DropDown>
        {/* <CPD.DropDown >
          <CPD.ProfileLink to='/profile/ChangePassword' onClick={handleClose}>Change Password</CPD.ProfileLink >
        </CPD.DropDown> */}
        <CPD.DropDown >
          <CPD.ProfileLink to='/login' onClick={ctaLogoutHandler}>Logout</CPD.ProfileLink >
        </CPD.DropDown>
      </CPD.Menu>
    </div>
  );
}
