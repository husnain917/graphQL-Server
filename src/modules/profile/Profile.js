import { Grid, Stack } from '@mui/material'
import React, { useContext } from 'react'
import { P } from './ProfileStyle'
import { TypoHead, TypoTextProfile } from '../../constants/Typos'
import img from '../../assets/profile.jpg'
import { Outlet } from 'react-router-dom'
import { AppContext } from '../../State'
export default function Profile() {
    const{state}=useContext(AppContext)
    // const items = JSON.parse(localStorage.getItem('user'));
    console.log(state.user);
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
                                   {state.user.name}
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
                                <P.MyLink to={`ChangePassword/id`} style={isActive => ({
                                    color: isActive ? "#00688B" : "black"
                                })}>Change password</P.MyLink>

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
