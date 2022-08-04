import { Stack } from '@mui/material'
import React from 'react'
import { CF } from './CommonFieldStyle'

export default function CommonEditField({ type, Label, value, onChange, placeholder }) {
    return (

        <Stack spacing={2}>
            {/* <CF.ProfileFieldLabel >
                {Label}
            </CF.ProfileFieldLabel> */}
            {/* <CF.ProfileField type={type} value={value} placeholder={placeholder} onChange={onChange} /> */}
            <CF.TextInput 
                value={value}
                label={Label}
                placeholder={placeholder}
                type={type}
                onChange={onChange}
                InputLabelProps={{ shrink: true }}
                margin="dense"
                variant="standard"
                id='file'
                fullWidth
                InputProps={{
                    disableUnderline: true
                }} />
        </Stack>
    )
}
