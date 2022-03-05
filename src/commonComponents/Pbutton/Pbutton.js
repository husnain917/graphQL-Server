import React from 'react'
import { Ibutton } from './PButtonStyle'

export default function PButton({ title, iconEnd, iconStart, icon, ctaHandler }) {
    return (
        <Ibutton startIcon={iconStart ? iconStart : ''} endIcon={iconEnd ? iconEnd : ''} onClick={ctaHandler}>
            {
                    title ? title : icon
            }
        </Ibutton>
    )
}
