import { Stack } from '@mui/material'
import React from 'react'
import { CF } from './CommonFieldStyle'

export default function CommonEditField({ Label, value, onChange, placeholder }) {
    return (

        <Stack spacing={2}>
            <CF.ProfileFieldLabel >
                {Label}
            </CF.ProfileFieldLabel>
            <CF.ProfileField value={value} placeholder={placeholder} onChange={onChange} />
        </Stack>
    )
}
