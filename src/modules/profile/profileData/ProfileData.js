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
          <Grid container
            spacing={2}>
            <Grid item
              xl={6}
              lg={6}
              md={6}
              sm={12}
              xs={12} >
              <CommonField
                Name={state?.orgLogin ?
                  state?.user?.organizationLogin.name
                  :
                  state?.user.name}
                Label='Name'
              />
            </Grid>
            <Grid item
              xl={6}
              lg={6}
              md={6}
              sm={12}
              xs={12}
            >
              <CommonField
                Email={state?.orgLogin ?
                  state?.user?.organizationLogin.email
                  :
                  state?.user.email}
                Label='Email'
              />
            </Grid>
            <Grid item
              xl={6}
              lg={6}
              md={6}
              sm={12}
              xs={12}>
              <CommonField
                Role={state?.orgLogin ?
                  state?.user?.organizationLogin.userGroup.userGroupRole
                  :
                  state?.user.userGroup.userGroupRole}
                Label='Role'
              />
            </Grid>
            <Grid item
              xl={6}
              lg={6}
              md={6}
              sm={12}
              xs={12}>
              <CommonField
                Label='Phone No'
                PhoneNo={state?.orgLogin ?
                  state?.user?.organizationLogin.contact
                  :
                  state?.user.contact}
              />
            </Grid>
            <Grid item
              xl={12}
              lg={12}
              md={12}
              sm={12}
              xs={12}>
              <CommonField
                Address={state?.orgLogin ?
                  state?.user?.organizationLogin.address
                  :
                  state?.user.address}
                Label='Address'
              />
            </Grid>
          </Grid>

      }

    </>
  )
}
