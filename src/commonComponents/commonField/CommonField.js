import { Stack } from '@mui/material'
import React, { useState } from 'react'
import { CF } from './CommonFieldStyle'
export default function CommonField({ Name, Label, Email, Address, Role, Password, PhoneNo ,passwordShown}) {
   
    return (
        <>
            <Stack spacing={2}>
                <CF.ProfileFieldLabel >
                    {Label}
                </CF.ProfileFieldLabel>
                {
                    Password ?
                        <>
                            <CF.ProfileField type={passwordShown ? "text" : "password"} required
                            />
                        </>
                        :
                        Address ?
                            <CF.ProfileField defaultValue={Address}
                                multiline
                                rows={3}
                                InputProps={{
                                    readOnly: true,
                                }} />
                            :
                            <CF.ProfileField defaultValue={Name ? Name : Address ? Address : Email ? Email : Role ? Role : PhoneNo ? PhoneNo : ''}
                                InputProps={{
                                    readOnly: true,
                                }} />

                }
            </Stack>
        </>
    )
}
