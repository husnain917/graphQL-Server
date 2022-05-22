import * as React from 'react';
import { CPD } from './CommonProfileDropDownStyle'
import img from '../../assets/profile.jpg'
import { useNavigate } from 'react-router-dom';
export default function CommonProfileDropDown() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate()
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const ctaLogoutHandler = () => {
    window.location.reload()
    navigate('/login')

  }


  return (
    <div>
      <CPD.IconButton
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      ><CPD.ProfileLinkImage src={img} alt='img' /></CPD.IconButton>

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
