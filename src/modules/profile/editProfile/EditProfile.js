import { Grid } from '@mui/material'
import React from 'react'
import CommonEditField from '../../../commonComponents/commonField/CommonEditField'
import PButton from '../../../commonComponents/Pbutton/Pbutton'
import { Pd } from '../profileData/profileDataStyle'
export default function EditProfile() {
    const [edit, setEdit] = React.useState(true)

    const ctaEditHandler = () => {

    }
    return (
        <>
            <Grid container spacing={2}>
                <Grid item xl={6} lg={6} md={6} sm={12} xs={12} >
                    <CommonEditField Label='Name' />
                </Grid>
                <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                    <CommonEditField Label='Email' />
                </Grid>
                <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                    <CommonEditField Label='Role' />
                </Grid>
                <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                    <CommonEditField Label='Phone No' />
                </Grid>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <CommonEditField Label='Address' />
                </Grid>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <Pd.ProDiv ><PButton title="save changes" ctaEditHandler={ctaEditHandler} /></Pd.ProDiv>
                </Grid>


            </Grid>


        </>
    )
}
