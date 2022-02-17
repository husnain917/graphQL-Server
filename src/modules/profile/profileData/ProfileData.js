import { Grid, IconButton } from '@mui/material'
import React, { useState } from 'react'
import CommonField from '../../../commonComponents/commonField/CommonField'

export default function ProfileData() {
 
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xl={6} lg={6} md={6} sm={12} xs={12} >
          <CommonField Name='sami shoukat' Label='Name' />
        </Grid>
        <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
          <CommonField Name='Shoukat' Label='Father Name' />
        </Grid>
        <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
          <CommonField Email='sami@gmail.com' Label='Email' />
        </Grid>
        <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
          <CommonField Role='Admin' Label='Role' />
        </Grid>
        <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
          <CommonField Label='Phone No' PhoneNo='+9200000000' />
        </Grid>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <CommonField Address='ABC Faisalabad' Label='Address' />
        </Grid>
        
      </Grid>


    </>
  )
}
