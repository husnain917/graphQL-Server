import { Checkbox, Grid } from '@mui/material'
import React, { useContext, useState } from 'react'
import { TabsStyle } from './UserGroupStyle'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { AppContext } from "../../../State";
import PButton from '../../../commonComponents/Pbutton/Pbutton';
import { UseUserGroup } from './UseUserGroup';
export default function UserGroup() {
  const [userName, userGroupRole, email, setEmail, setUserName, setuserGroupRole, ctaFormHandler] = UseUserGroup()
  const { state, dispatch } = useContext(AppContext);

  const [AddPermission, setAddPermission] = useState(false)
  const [DelPermission, setDelPermission] = useState(false)
  const [EditPermission, setEditPermission] = useState(false)
  const [ViewPermission, setViewPermission] = useState(false)
  const [AllPermission, setAllPermission] = useState(false)

  const ctaViewPermission = () => {
    state?.tabsPersmission.map((item, index) => {
      item.pages.map((items, i) => {
        if (index === i) {
          setViewPermission(!ViewPermission)
        }
      })
    })
  }
  const ctaAddPermission = () => {
    const obj = {
      "navigationResults": [
        {
          "moduleName": "Dashboard",
          "module_id": "",
          "module_icon": "",
          "pages": [
            {
              "pageName": "Dashboard",
              "pageID": "",
              "pageURL": "/",
              "page_id": "",
              "AddPermission": false,
              "DelPermission": false,
              "EditPermission": false,
              "ViewPermission": false,
              "FullAccess": false
            }
          ]
        }
      ]
  }
}
  return (
    <TabsStyle.MainDiv>
      <Grid container>
        <Grid item xl={6} lg={6} mg={12} sm={12} xs={12}>
          <TabsStyle.InputLabel>
            User Group Name
            <TabsStyle.MyInput placeholder='Enter Name' value={userName} onChange={(e) => setUserName(e.target.value)} />
          </TabsStyle.InputLabel>
        </Grid>
        <Grid item xl={6} lg={6} mg={12} sm={12} xs={12}>
          <TabsStyle.InputLabel>
            User Email
            <TabsStyle.MyInput placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)} />
          </TabsStyle.InputLabel>
        </Grid>
        <Grid item xl={6} lg={6} mg={12} sm={12} xs={12}>
          <TabsStyle.InputLabel>
            User Role
            <TabsStyle.MyInput placeholder='Enter Role' value={userGroupRole} onChange={(e) => setuserGroupRole(e.target.value)} />
          </TabsStyle.InputLabel>
        </Grid>
      </Grid>
      <TabsStyle.PermissionText>
        API Permissions
      </TabsStyle.PermissionText>
      <TabsStyle.TableDiv>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 530 }} aria-label="simple table">
            <TabsStyle.PermissionsTableHead>
              <TableRow>
                <TabsStyle.PermissionTableTitleHead>Option</TabsStyle.PermissionTableTitleHead>
                <TabsStyle.PermissionTableTitleHead align="right">View Only</TabsStyle.PermissionTableTitleHead>
                <TabsStyle.PermissionTableTitleHead align="right">Create</TabsStyle.PermissionTableTitleHead>
                <TabsStyle.PermissionTableTitleHead align="right">Update</TabsStyle.PermissionTableTitleHead>
                <TabsStyle.PermissionTableTitleHead align="right">Delete</TabsStyle.PermissionTableTitleHead>
                <TabsStyle.PermissionTableTitleHead align="center">Full Access</TabsStyle.PermissionTableTitleHead>
              </TableRow>
            </TabsStyle.PermissionsTableHead>
            <TableBody>
              {
                state?.tabsPersmission.map((item, i) => {
                  return (
                    <TableRow
                      key={i}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TabsStyle.PermissionTitletTxt component="th" scope="row">
                        {item.moduleName}
                      </TabsStyle.PermissionTitletTxt>
                      {
                        item.pages.map((row) => {
                          return (
                            <>
                              <TableCell style={{ paddingBottom: 10, paddingTop: 10 }} align="right">
                                <Checkbox
                                  checked={ViewPermission}
                                  value={ViewPermission}
                                  onChange={ctaViewPermission}
                                />
                              </TableCell>
                              <TableCell style={{ paddingBottom: 10, paddingTop: 10 }} align="right">
                                <Checkbox
                                  checked={AddPermission}
                                  value={AddPermission}
                                  onChange={() => setAddPermission(!AddPermission)}
                                />
                              </TableCell>
                              <TableCell style={{ paddingBottom: 10, paddingTop: 10 }} align="right">
                                <Checkbox
                                  checked={DelPermission}
                                  value={DelPermission}
                                  onChange={() => setDelPermission(!DelPermission)}
                                />
                              </TableCell>
                              <TableCell style={{ paddingBottom: 10, paddingTop: 10 }} align="right">
                                <Checkbox
                                  checked={EditPermission}
                                  value={EditPermission}
                                  onChange={() => setEditPermission(!EditPermission)}
                                />
                              </TableCell>
                              <TableCell style={{ paddingBottom: 10, paddingTop: 10 }} align="center">
                                <Checkbox
                                  checked={AllPermission}
                                  value={AllPermission}
                                  onChange={() => setAllPermission(!AllPermission)}
                                />
                              </TableCell>
                            </>
                          )
                        })
                      }
                    </TableRow>
                  )
                })
              }
            </TableBody>
          </Table>
        </TableContainer>
        <br />
        <PButton title='Add User Group' />
       
      </TabsStyle.TableDiv>
    </TabsStyle.MainDiv>
  )
}
