import { Grid } from '@mui/material'
import React from 'react'
import CommonField from '../../../commonComponents/commonField/CommonField'
import PButton from '../../../commonComponents/Pbutton/Pbutton'
import { Pd } from './profileDataStyle'
import EditIcon from '@mui/icons-material/Edit';
export default function ProfileData() {
  const [edit, setEdit] = React.useState(false)
  const ctaEditHandler = () => {
    setEdit(true)
    console.log(edit);
  }
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xl={6} lg={6} md={6} sm={12} xs={12} >
          <CommonField Name='sami shoukat' Label='Name' edit={edit} />
        </Grid>
        <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
          <CommonField Name='Shoukat' Label='Father Name' edit={edit} />
        </Grid>
        <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
          <CommonField Email='sami@gmail.com' Label='Email' edit={edit} />
        </Grid>
        <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
          <CommonField Role='Admin' Label='Role' />
        </Grid>
        <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
          <CommonField Label='Phone No' PhoneNo='+9200000000' edit={edit} />
        </Grid>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <CommonField Address='ABC Faisalabad' Label='Address' edit={edit} />
        </Grid>
       


      </Grid>


    </>
  )
}
