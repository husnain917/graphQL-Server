import { Checkbox, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, Tooltip } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { TabsStyle } from "./UserGroupStyle";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom"
import PButton from "../../../commonComponents/Pbutton/Pbutton";
import { UseUserGroup } from "./UseUserGroup";
import { AppContext } from "../../../State";
import { data } from '../../../constants/userGroupPagesList'
import CommonTableLoader from "../../../commonComponents/commonTableLoader/CommonTableLoader";
export default function UserGroup() {
  const [
    {
      userName,
      userGroupRole,
      ADD_LOADING,
      email,
      setEmail,
      setUserName,
      setuserGroupRole,
      ctaHandler,
      handlingPermission,
      flag,
      ctaUpdateHandler
    }
  ] = UseUserGroup();

  const { state, dispatch } = useContext(AppContext);
  const [stateArray, setStateArray] = useState(data);


  // const roles = [
  //   "ORGANIZATIONKEY", "ADMIN", "TEACHER", "STUDENT"
  // ]
  return (
    <TabsStyle.MainDiv>
      <Grid container>
        {flag ?
          ""
          :
          <Link to="/tabs-permission"><PButton title="View All User Group" sx={{ marginLeft: 2 }} /></Link>
        }
        <Grid item xl={12} lg={12} mg={12} sm={12} xs={12}>
          <TabsStyle.InputLabel>
            User Name
            <TabsStyle.MyInput
              User Group Name
              placeholder="Enter Name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </TabsStyle.InputLabel>
        </Grid>
        <Grid item xl={12} lg={12} mg={12} sm={12} xs={12} >

          <TabsStyle.InputLabel>
          <TabsStyle.MyInput
              
              placeholder="Enter Role"
              value={userGroupRole}
              onChange={(e) => setuserGroupRole(e.target.value.toUpperCase())}
            />
          </TabsStyle.InputLabel>


          {/* <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              onChange={(e) => {
                // test[item.name] = e.target.value;
                setSelect(e.target.value)
              }}
            >
              {roles.map((option, i) => (
                <FormControlLabel key={i} value={option} control={<Radio />} label={option} />
              ))}
            </RadioGroup> */}

        </Grid>
      </Grid>
      <TabsStyle.TableDiv>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 530 }} aria-label="simple table">
            <TabsStyle.PermissionsTableHead>
              <TableRow>
                <TabsStyle.PermissionTableTitleHead>
                  Option
                </TabsStyle.PermissionTableTitleHead>
                <TabsStyle.PermissionTableTitleHead align="right">
                  View Only
                </TabsStyle.PermissionTableTitleHead>
                <TabsStyle.PermissionTableTitleHead align="right">
                  Create
                </TabsStyle.PermissionTableTitleHead>
                <TabsStyle.PermissionTableTitleHead align="right">
                  Update
                </TabsStyle.PermissionTableTitleHead>
                <TabsStyle.PermissionTableTitleHead align="right">
                  Delete
                </TabsStyle.PermissionTableTitleHead>
                {/* <TabsStyle.PermissionTableTitleHead align="center">
                    Full Access
                  </TabsStyle.PermissionTableTitleHead> */}
              </TableRow>
            </TabsStyle.PermissionsTableHead>
            {
              ADD_LOADING ?
                <CommonTableLoader />
                :
                <TableBody>
                  {stateArray?.navigationResults?.map((navModule, navModuleIndex) => {
                    return navModule?.pages.map((navPage, navPageIndex) => {
                      return (
                        <>
                          <TableRow
                            key={navModuleIndex}
                            sx={{
                              "&:last-child td, &:last-child th": { border: 0 },
                            }}
                          >
                            <TabsStyle.PermissionTitletTxt
                              component="th"
                              scope="row"
                            >
                              {navPage.pageName}
                            </TabsStyle.PermissionTitletTxt>
                            <TableCell
                              style={{ paddingBottom: 10, paddingTop: 10 }}
                              align="right"
                            >
                              <Checkbox
                                onChange={() =>
                                  handlingPermission(
                                    navModule,
                                    navPageIndex,
                                    "ViewPermission"
                                  )

                                }

                              />
                            </TableCell>
                            <TableCell
                              style={{ paddingBottom: 10, paddingTop: 10 }}
                              align="right"
                            >
                              <Checkbox
                                onChange={() =>
                                  handlingPermission(
                                    navModule,
                                    navPageIndex,
                                    "CreatePermission"
                                  )
                                }
                              />
                            </TableCell>
                            <TableCell
                              style={{ paddingBottom: 10, paddingTop: 10 }}
                              align="right"
                            >
                              <Checkbox
                                onChange={() =>
                                  handlingPermission(
                                    navModule,
                                    navPageIndex,
                                    "EditPermission"
                                  )
                                }
                              />
                            </TableCell>
                            <TableCell
                              style={{ paddingBottom: 10, paddingTop: 10 }}
                              align="right"
                            >
                              <Checkbox
                                onChange={() =>
                                  handlingPermission(
                                    navModule,
                                    navPageIndex,
                                    "DelPermission"
                                  )
                                }
                              />
                            </TableCell>
                            {/* <TableCell
                          style={{ paddingBottom: 10, paddingTop: 10 }}
                          align="center"
                        >
                          <Checkbox
                            onChange={() =>
                              handlingPermission(
                                navModule,
                                navPageIndex,
                                "FullAccess"
                              )
                            }
                          />
                        </TableCell> */}
                          </TableRow>
                        </>
                      );
                    });
                  })}
                </TableBody>
            }
          </Table>
        </TableContainer>
        <br />
        {flag ?
          <PButton title="Update User Group" ctaHandler={ctaUpdateHandler} />
          :
          <PButton title="Add User Group" ctaHandler={ctaHandler} />
        }


      </TabsStyle.TableDiv>
    </TabsStyle.MainDiv >
  )

}
