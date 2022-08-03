import { Checkbox, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, Tooltip } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { TabsStyle } from "../../modules/settings/userGroup/UserGroupStyle";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import { Link } from "react-router-dom"
import PButton from "../Pbutton/Pbutton";
import { UseUserGroup } from "../../modules/settings/userGroup/UseUserGroup";
import { AppContext } from "../../State";
import { data } from "../../constants/userGroupPagesList"
import CommonTableLoader from "../commonTableLoader/CommonTableLoader";
export default function UserGroupModal() {
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

    const handleCloseUpdate = () => {
        dispatch({
            type: "setModal",
            payload: {
                modalUpdateFlag: false,
                openFormModal: false,
            },
        });
    };
    // const roles = [
    //   "ORGANIZATIONKEY", "ADMIN", "TEACHER", "STUDENT"
    // ]
    return (
        <Dialog open={state.openFormModal} onClose={handleCloseUpdate} fullWidth={true} BackdropProps={{ style: { backgroundColor: 'rgba(0, 0, 0, 0.4)', backdropFilter: 'blur(8px)' } }}>
            <DialogTitle>Update User Group</DialogTitle>
            <TabsStyle.MainDiv>
                <Grid container>
                    <Grid item xl={12} lg={12} mg={12} sm={12} xs={12}>
                        <TabsStyle.InputLabel>
                            User Name
                            <TabsStyle.MyInput
                                User Group Name
                                placeholder="Enter Name"
                                defaultValue={state?.editUserGroupData.name}
                                onChange={(e) => setUserName(e.target.value)}
                            />
                        </TabsStyle.InputLabel>
                    </Grid>
                    <Grid item xl={12} lg={12} mg={12} sm={12} xs={12} >

                        <TabsStyle.InputLabel>
                            User Role
                            <TabsStyle.MyInput
                                User Group Name
                                placeholder="Enter Role"
                                defaultValue={state?.editUserGroupData?.role}
                                onChange={(e) => setuserGroupRole(e.target.value.toUpperCase())}
                            />
                        </TabsStyle.InputLabel>

                        {/* {state?.editUserGroupData?.permissions.map((permission) => {
                            return permission.map((val) => {
                                return (
                                    <>
                                        {val.ViewPermission === true ?
                                            (

                                                <ul>
                                                    <li>true</li>
                                                </ul>
                                            ) : (
                                                <p>hello</p>

                                            )
                                        }
                                    </>
                                )
                            })


                        })} */}



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
                                                            {/* {state?.editUserGroupData?.permissions.map((permission) => {
                                                                return permission.map((val) => {
                                                                    return (
                                                                        val.pageName === navPage.pageName ?
                                                                            val.ViewPermission == true ?
                                                                                (
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
                                                                                            checked

                                                                                        />
                                                                                    </TableCell>
                                                                                ) :(
                                                                                
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
                                                                                        ): "" 
                                                                        
                                                                    )
                                                                })
                                                            })} */}
                                                            
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
                    <PButton title="Update User Group" ctaHandler={ctaUpdateHandler} />



                </TabsStyle.TableDiv>
            </TabsStyle.MainDiv >
        </Dialog>
    )

}
