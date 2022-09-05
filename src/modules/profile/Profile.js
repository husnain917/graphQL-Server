import { Grid, Stack } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { P } from './ProfileStyle'
import { TypoHead, TypoTextProfile } from '../../constants/Typos'
import img from '../../assets/profile.jpg'
import { Outlet } from 'react-router-dom'
import CommonTableLoader from '../../commonComponents/commonTableLoader/CommonTableLoader'
import student from '../../assets/profile/student.png'
import teacher from '../../assets/profile/teacher.png'
import admin from '../../assets/profile/admin.png'
import owner from '../../assets/profile/owner.png'
import { orgCheck, userData } from '../../lib/reactivities/reactiveVarables'
import { useReactiveVar } from '@apollo/client'

export default function Profile() {
    const useOrgCheck = useReactiveVar(orgCheck)
    const useUserData = useReactiveVar(userData)
    console.log("user in reactive var", useUserData)


    const [loading, setLoading] = useState(true)
    setTimeout(function () {
        setLoading(false);
    }, 2000);


    return (
        <>
            {
                loading ?
                    <CommonTableLoader />
                    :

                    <div style={{ backgroundColor: "white", minHeight: "100vh", minWidth: "100%", padding: "20px", borderRadius: "20px" }}>
                        <P.MycontainerBorder>
                            <TypoHead>
                                Profile
                            </TypoHead>
                        </P.MycontainerBorder>
                        <P.Mycontainer>
                            <Grid container>
                                <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
                                    <P.MycontainerName>
                                        <Stack direction="row" spacing={2}>
                                            {
                                                useUserData.role === "ORGANIZATIONKEY" ?
                                                    <P.Myimg src={owner} alt='broken-img' />
                                                    :

                                                    useUserData?.userGroup[0]?.userGroupRole === "ADMIN" ?
                                                        <P.Myimg src={admin} alt='broken-img' />
                                                        :
                                                        useUserData?.userGroup[0]?.userGroupRole === "TEACHER" ?
                                                            <P.Myimg src={teacher} alt='broken-img' />
                                                            :
                                                            useUserData?.userGroup[0]?.userGroupRole === "STUDENT" ?
                                                                <P.Myimg src={student} alt='broken-img' />
                                                                :
                                                                ""


                                            }
                                            <TypoTextProfile>
                                                {useUserData.name
                                                    // state?.orgLogin ?
                                                    // useOrgCheck ?
                                                    //     useUserData.name
                                                    //     :
                                                    //     useUserData.name
                                                }
                                            </TypoTextProfile>
                                        </Stack>
                                    </P.MycontainerName>
                                    <P.Mycontainer>
                                        <Stack spacing={2}>
                                            <P.MyLink to={`id`} style={isActive => ({
                                                color: isActive ? "#00688B" : "black"
                                            })}>Profile</P.MyLink>
                                            <P.MyLink to={`editProfile/id`} style={isActive => ({
                                                color: isActive ? "#00688B" : "black"
                                            })}>Edit Profile</P.MyLink>
                                            {/* <P.MyLink to={`ChangePassword/id`} style={isActive => ({
                                                color: isActive ? "#00688B" : "black"
                                            })}>Change password</P.MyLink> */}

                                        </Stack>
                                    </P.Mycontainer>
                                </Grid>
                                <Grid item xl={8} lg={8} md={8} sm={12} xs={12}>
                                    <P.Mycontainer>
                                        <Outlet />
                                    </P.Mycontainer>
                                </Grid>
                            </Grid>
                        </P.Mycontainer>
                    </div>
            }
        </>
    )
}
