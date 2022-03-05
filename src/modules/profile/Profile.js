import { Grid, Stack } from '@mui/material'
import React from 'react'
import { P } from './ProfileStyle'
import { TypoHead, TypoTextProfile } from '../../constants/Typos'
import img from '../../assets/profile.jpg'
import { Outlet } from 'react-router-dom'
export default function Profile() {
    return (
        <>
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
                                <P.Myimg src={img} alt='broken-img' />
                                <TypoTextProfile>
                                    sami shoukat
                                </TypoTextProfile>
                            </Stack>
                        </P.MycontainerName>
                        <P.Mycontainer>
                           <Stack spacing={2}>
                           <P.MyLink to='id:' >Profile</P.MyLink>
                           <P.MyLink to='editProfile/id:' >Edit Profile</P.MyLink>
                           <P.MyLink to='ChangePassword' >Change Password</P.MyLink>

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
        </>
    )
}
