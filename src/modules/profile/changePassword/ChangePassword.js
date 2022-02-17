import { IconButton, Stack } from '@mui/material'
import React, { useState } from 'react'
import CommonField from '../../../commonComponents/commonField/CommonField'
import PButton from '../../../commonComponents/Pbutton/Pbutton'
import { CP } from './ChangePasswordStyle'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export default function ChangePassword() {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {

      setPasswordShown(!passwordShown);
  };
  return (
    <>
      <Stack spacing={2}>
        <CommonField  Label='Current Password' Password='12345' passwordShown={passwordShown} />
        <CommonField Label='New Password' Password='12345' passwordShown={passwordShown} />
        <CommonField Label='Confirm Password' Password='12345' passwordShown={passwordShown} />
      </Stack>
      <CP.ChangePasswordButton >
       <Stack direction='row' spacing={2}>
       <PButton title='Save Changes' />
        <IconButton onClick={togglePassword}>{passwordShown?<VisibilityOff /> : <Visibility />}</IconButton>
       </Stack>
      </CP.ChangePasswordButton>
    </>
  )
}
