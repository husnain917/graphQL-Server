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
        phone,
        setName,
        setEmail,
        setAddress,
        setPhone,
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
                <Grid item xl={6} lg={6} md={6} sm={12} xs={12} >
                    <CommonEditField Label='Name' type='text' placeholder={state.user.name} value={name} onChange={(e) => setName(e.target.value)} />
                </Grid>
                <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                    <CommonEditField Label='Email' type='email' value={state.user.email}  />
                </Grid>
                <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                    <CommonEditField Label='Role'  value={state.user.role} />
                </Grid>
                <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                    <CommonEditField Label='Phone No' type='number' placeholder={state.user.phone} value={phone} onChange={(e) => setPhone(e.target.value)} />
                </Grid>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <CommonEditField Label='Address' type='text' placeholder={state.user.address} value={address} onChange={(e) => setAddress(e.target.value)} />
                </Grid>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12} >
               <CommonEditField type='file'  />
                </Grid>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <Pd.ProDiv ><PButton title="save changes" ctaHandler={ctaUpdateHandler} /></Pd.ProDiv>
                </Grid>
            </Grid>

        </>
    )
}
