import { Grid } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import CommonField from '../../../commonComponents/commonField/CommonField'
import CommonTableLoader from '../../../commonComponents/commonTableLoader/CommonTableLoader'
import { AppContext } from '../../../State'
export default function ProfileData() {

  const { state } = useContext(AppContext)
  const [loading, setLoading] = useState(true)
  setTimeout(function () {
    setLoading(false);
  }, 2000);

  return (
    <>
      {
        loading ?
          <><CommonTableLoader /></>
          :
          <Grid container spacing={2}>
            <Grid item xl={6} lg={6} md={6} sm={12} xs={12} >
              <CommonField Name={state.user?.name} Label='Name' />
            </Grid>
            <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
              <CommonField Email={state.user?.email} Label='Email' />
            </Grid>
            <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
              <CommonField Role={state.user?.role} Label='Role' />
            </Grid>
            <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
              <CommonField Label='Phone No' PhoneNo={state.user?.contact} />
            </Grid>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <CommonField Address={state.user?.address} Label='Address' />
            </Grid>
          </Grid>

      }

    </>
  )
}
