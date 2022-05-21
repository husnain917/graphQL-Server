import { Grid } from '@mui/material'
import React from 'react'
import CommonField from '../../../commonComponents/commonField/CommonField'
export default function ProfileData() {
  const [edit, setEdit] = React.useState(false)
  const ctaEditHandler = () => {
    setEdit(true)
    console.log(edit);
  }
  // const items = JSON.parse(localStorage.getItem('user'));
  return (
    <>

      <Grid container spacing={2}>

        <Grid item xl={6} lg={6} md={6} sm={12} xs={12} >
          <CommonField Name={0} Label='Name' edit={edit} />
        </Grid>
        <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
          <CommonField Email={0} Label='Email' edit={edit} />
        </Grid>
        <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
          <CommonField Role={0} Label='Role' />
        </Grid>
        <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
          <CommonField Label='Phone No' PhoneNo={0} edit={edit} />
        </Grid>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <CommonField Address={0} Label='Address' edit={edit} />
        </Grid>





      </Grid>


    </>
  )
}
