import { Grid } from '@mui/material'
import React from 'react'
import { TabsStyle } from './TabsPermissionsStyle'
export default function TabsPermission() {

  return (
    <TabsStyle.MainDiv>
      <Grid container>
        <Grid item xl={6} lg={6} mg={12} sm={12} xs={12}>
          <TabsStyle.InputLabel>
            User Group Name
            <TabsStyle.MyInput />
          </TabsStyle.InputLabel>
        </Grid>
        <Grid item xl={6} lg={6} mg={12} sm={12} xs={12}>
          <TabsStyle.InputLabel>
            User Role
            <TabsStyle.MyInput />
          </TabsStyle.InputLabel>
        </Grid>
        <Grid item xl={6} lg={6} mg={12} sm={12} xs={12}>
          <TabsStyle.InputLabel>
            User Type
            <TabsStyle.MyInput />
          </TabsStyle.InputLabel>
        </Grid>
        {/* <Grid item xl={6} lg={6} mg={12} sm={12} xs={12}>
          <TabsStyle.InputLabel>
            User Group Name
            <TabsStyle.MyInput />
          </TabsStyle.InputLabel>
        </Grid> */}
      </Grid>
      <TabsStyle.PermissionText>
        API Permissions
      </TabsStyle.PermissionText>
      
    </TabsStyle.MainDiv>
  )
}
