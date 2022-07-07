import { Checkbox, Grid } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
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

  const [AddPermission, setAddPermission] = useState()
  const [DelPermission, setDelPermission] = useState()
  const [EditPermission, setEditPermission] = useState()
  const [ViewPermission, setViewPermission] = useState()
  const [AllPermission, setAllPermission] = useState()
  const [pushobj, setPush] = useState()
  const [stateArray, setStateArray] = useState(state.tabsPersmission)
  const [mynewArray, setMyNewArray] = useState({
    "navigationResults": []
  })
  useEffect(() => {
    state.tabsPersmission.map((item, index) => {
      item.pages.map((items) => {
        if (items.pageName === item.moduleName) {
          setPush(item.AddToJson)
        }
        if (items.pageName === item.moduleName) {
          setAddPermission(items.AddPermission)
          setDelPermission(items.DelPermission)
          setEditPermission(items.EditPermission)
          setViewPermission(items.ViewPermission)
          setAllPermission(items.FullAccess)

        }
      })
    })
  }, [])
  const ctaAddPermission = (item) => {

    const newArray = stateArray.map((ites, i) => {
      if (ites.module_id === item.module_id) {
        ites.pages.forEach((row) => {
          var obj = {
            "moduleName": item.moduleName,
            "module_id": item.module_id,
            "AddToJson": !item.AddToJson,
            "pages": [
              {
                "pageName": row.pageName,
                "pageID": row.pageID,
                "pageURL": row.pageURL,
                "page_id": row.page_id,
                "AddPermission": row.AddPermission,
                "DelPermission": row.DelPermission,
                "EditPermission": row.EditPermission,
                "ViewPermission": row.ViewPermission,
                "FullAccess": row.FullAccess
              }
            ]
          }

          // if (ites.module_id === item.module_id) {

          // if (!pushobj) {
          // var finalArray = mynewArray.navigationResults.push(obj)
          setStateArray([...stateArray, obj])
          console.log(stateArray);
          // }
          // else if (pushobj) {
          //   let newStudents = mynewArray.navigationResults.filter((ite) => {
          //     if (ite.module_id !== item.module_id) {
          //       return obj;
          //     }
          //   })


          // }
          //   console.log("newArray", mynewArray);
          //   return obj
          // }
        })
      }
      return ites
    })

  }


  const ctaPermission = (item, row) => {
    const newArray = state?.tabsPersmission.map((ites, i) => {
      ites.pages.forEach((rows) => {
        if (item.module_id === ites.module_id) {
          var obj = {
            "moduleName": item.moduleName,
            "module_id": item.module_id,
            "AddToJson": pushobj,
            "pages": [
              {
                "pageName": row.pageName,
                "pageID": row.pageID,
                "pageURL": row.pageURL,
                "page_id": row.page_id,
                "AddPermission": row.AddPermission,
                "DelPermission": row.DelPermission,
                "EditPermission": row.EditPermission,
                "ViewPermission": row.ViewPermission,
                "FullAccess": row.FullAccess
              }
            ]
          }
          console.log("object", obj);
        }
      })
    })
  }

  const ctaCreatePermission = (item, row) => {
    const newArray = state?.tabsPersmission.map((ites, i) => {
      ites.pages.forEach((rows) => {
        if (item.module_id === ites.module_id) {
          var obj = {
            "moduleName": item.moduleName,
            "module_id": item.module_id,
            "AddToJson": pushobj,
            "pages": [
              {
                "pageName": row.pageName,
                "pageID": row.pageID,
                "pageURL": row.pageURL,
                "page_id": row.page_id,
                "AddPermission": !row.AddPermission,
              }
            ]
          }
          console.log("object", obj);
        }
      })
    })
  }
  const ctaDeletePermission = (item, row) => {
    const newArray = state?.tabsPersmission.map((ites, i) => {
      ites.pages.forEach((rows) => {
        if (item.module_id === ites.module_id) {
          var obj = {
            "moduleName": item.moduleName,
            "module_id": item.module_id,
            "AddToJson": pushobj,
            "pages": [
              {
                "pageName": row.pageName,
                "pageID": row.pageID,
                "pageURL": row.pageURL,
                "page_id": row.page_id,
                "DelPermission": !row.DelPermission,
              }
            ]
          }
          console.log("object", obj);
        }
      })
    })
  }
  const ctaeditPermission = (item, row) => {
    const newArray = state?.tabsPersmission.map((ites, i) => {
      ites.pages.forEach((rows) => {
        if (item.module_id === ites.module_id) {
          var obj = {
            "moduleName": item.moduleName,
            "module_id": item.module_id,
            "AddToJson": pushobj,
            "pages": [
              {
                "pageName": row.pageName,
                "pageID": row.pageID,
                "pageURL": row.pageURL,
                "page_id": row.page_id,
                "EditPermission": !row.EditPermission,
              }
            ]
          }
          console.log("object", obj);
        }
      })
    })
  }
  const ctaviewPermission = (item, row) => {
    const newArray = state?.tabsPersmission.map((ites, i) => {
      ites.pages.forEach((rows) => {
        if (item.module_id === ites.module_id) {
          var obj = {
            "moduleName": item.moduleName,
            "module_id": item.module_id,
            "AddToJson": pushobj,
            "pages": [
              {
                "pageName": row.pageName,
                "pageID": row.pageID,
                "pageURL": row.pageURL,
                "page_id": row.page_id,
                "ViewPermission": !row.ViewPermission,
              }
            ]
          }
          console.log("object", obj);
        }
      })
    })
  }

  const ctaFullPermission = (item, row) => {
    const newArray = state?.tabsPersmission.map((ites, i) => {
      ites.pages.forEach((rows) => {
        if (item.module_id === ites.module_id) {
          var obj = {
            "moduleName": item.moduleName,
            "module_id": item.module_id,
            "AddToJson": pushobj,
            "pages": [
              {
                "pageName": row.pageName,
                "pageID": row.pageID,
                "pageURL": row.pageURL,
                "page_id": row.page_id,
                "FullAccess": !row.FullAccess
              }
            ]
          }
          console.log("object", obj);
        }
      })
    })
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
        {/* <Grid item xl={6} lg={6} mg={12} sm={12} xs={12}>
          <TabsStyle.InputLabel>
            User Email
            <TabsStyle.MyInput placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)} />
          </TabsStyle.InputLabel>
        </Grid> */}
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
                <TabsStyle.PermissionTableTitleHead align="center">Add</TabsStyle.PermissionTableTitleHead>
              </TableRow>
            </TabsStyle.PermissionsTableHead>
            <TableBody>
              {
                stateArray.map((item, i) => {
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
                          console.log("row", row);
                          return (
                            <>
                              <TableCell style={{ paddingBottom: 10, paddingTop: 10 }} align="right">
                                <Checkbox
                                  checked={row.ViewPermission}
                                  value={row.ViewPermission}
                                  onChange={() => ctaviewPermission(item, row)}
                                />
                              </TableCell>
                              <TableCell style={{ paddingBottom: 10, paddingTop: 10 }} align="right">
                                <Checkbox
                                  checked={row.AddPermission}
                                  value={row.AddPermission}
                                  onChange={() => ctaCreatePermission(item, row)}
                                />
                              </TableCell>
                              <TableCell style={{ paddingBottom: 10, paddingTop: 10 }} align="right">
                                <Checkbox
                                  checked={row.EditPermission}
                                  value={row.EditPermission}
                                  onChange={() => ctaeditPermission(item, row)}
                                />
                              </TableCell>
                              <TableCell style={{ paddingBottom: 10, paddingTop: 10 }} align="right">
                                <Checkbox
                                  checked={row.DelPermission}
                                  value={row.DelPermission}
                                  onChange={() => ctaDeletePermission(item, row)}
                                />
                              </TableCell>
                              <TableCell style={{ paddingBottom: 10, paddingTop: 10 }} align="center">
                                <Checkbox
                                  checked={row.FullAccess}
                                  value={row.FullAccess}
                                  onChange={() => ctaFullPermission(item, row)}
                                />
                              </TableCell>
                              <TableCell style={{ paddingBottom: 10, paddingTop: 10 }} align="center">
                                <Checkbox
                                  checked={pushobj}
                                  value={pushobj}
                                  onChange={() => ctaAddPermission(item)}
                                // onClick={() => ctaAddPermission(item)}
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
