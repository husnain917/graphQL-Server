import { CandlestickChartSharp } from '@mui/icons-material'
import { Grid } from '@mui/material'
import React, { Suspense } from 'react'
import CommonEditField from '../../../commonComponents/commonField/CommonEditField'
import CommonTableLoader from '../../../commonComponents/commonTableLoader/CommonTableLoader'
import PButton from '../../../commonComponents/Pbutton/Pbutton'
import { Pd } from '../profileData/profileDataStyle'
import { UseEditProfile } from './UseEditProfile'
export default function EditProfile() {
    const [{
        ctaUpdateHandler,
        name,
        email,
        address,
        contact,
        cnic,
        setName,
        setEmail,
        role,
        setAddress,
        setContact,
        state,
        // handleChange,
        UPDATE_LOADING
    }] = UseEditProfile()
    if (UPDATE_LOADING) {
        return <CommonTableLoader />
    }

    return (
        <>

            <Grid container spacing={2}>
                <Grid item
                    xl={6}
                    lg={6}
                    md={6}
                    sm={12}
                    xs={12} >
                    <CommonEditField
                        Label='Name'
                        type='text'
                        placeholder={state?.orgLogin ?
                            state?.user?.organizationLogin.name
                            :
                            state?.user.email}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </Grid>
                <Grid item
                    xl={6}
                    lg={6}
                    md={6} sm={12}
                    xs={12}>
                    <CommonEditField
                        Label='Email'
                        type='email'
                        placeholder={state?.orgLogin ?
                            state?.user?.organizationLogin.email
                            :
                            state?.user.userGroup.email}
                        value={email}
                    />
                </Grid>
                <Grid item
                    xl={6}
                    lg={6}
                    md={6}
                    sm={12}
                    xs={12}>
                    <CommonEditField
                        Label='Role'
                        value={role}
                        placeholder={state?.orgLogin ?
                            state?.user?.organizationLogin.role
                            :
                            state?.user.userGroup.userGroupRole}
                    />
                </Grid>
                <Grid item
                    xl={6}
                    lg={6}
                    md={6}
                    sm={12}
                    xs={12}>
                    <CommonEditField
                        Label='Phone No'
                        type='tel'
                        placeholder={state?.orgLogin ?
                            state?.user?.organizationLogin.contact
                            :
                            state?.user.contact}
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                    />
                </Grid>
                {/* <Grid item
                    xl={6}
                    lg={6}
                    md={6}
                    sm={12}
                    xs={12}>
                    <CommonEditField
                        Label='Phone No'
                        type='number'
                        placeholder={state?.orgLogin ?
                            state?.user?.organizationLogin.cnic
                            :
                            state?.user.cnic}
                        value={cnic}
                        onChange={(e) => setContact(e.target.value)}
                    />
                </Grid> */}
                <Grid item
                    xl={12}
                    lg={12}
                    md={12}
                    sm={12}
                    xs={12}>
                    <CommonEditField
                        Label='Address'
                        type='text'
                        placeholder={state?.orgLogin ?
                            state?.user?.organizationLogin.address
                            :
                            state?.user.address}
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </Grid>
                {/* <Grid item
                    xl={12}
                    lg={12}
                    md={12}
                    sm={12}
                    xs={12} >
                    <CommonEditField
                        type='file'
                    />
                </Grid> */}
                <Grid item
                    xl={12}
                    lg={12}
                    md={12}
                    sm={12}
                    xs={12}>
                    <Pd.ProDiv>
                        <PButton
                            title="save changes"
                            ctaHandler={ctaUpdateHandler}
                        />
                    </Pd.ProDiv>
                </Grid>
            </Grid>

        </>
    )
}
