import { Container, TextField, Stack} from '@mui/material'
import React from 'react'
import Pbutton from '../../commonComponents/Ibutton/Ibutton'
import { TypoHead, TypoText, ContainerFields } from './ContactUsStyle'

export default function ContactUs() {
    return (
        <div>
            <TypoHead>Contact Us</TypoHead>
            <TypoText>Contact the Help Team</TypoText>

            <Container maxWidth='small'>
                <center>
                    <ContainerFields>
                        <Stack spacing={2}>
                            <TextField size="small" label={'Name'} id="margin-normal" margin="normal" />
                            <TextField size="small" label={'Email'} id="margin-normal" margin="normal" />
                            <TextField size="small" label={'Role'} id="margin-normal" margin="normal" />
                            <TextField size="large" label={'Reason'} id="margin-normal" margin="normal" />
                          
                        </Stack>
                        <br/>
                        <Pbutton title="Contact Us" size="medium" />

                    </ContainerFields>

                </center>

            </Container>




        </div>
    )
}
