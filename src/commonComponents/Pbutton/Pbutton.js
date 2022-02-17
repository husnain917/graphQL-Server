import React from 'react'
import { Ibutton } from './PButtonStyle'

export default function PButton({ title, iconEnd, iconStart, icon }) {
    return (
        <Ibutton startIcon={iconStart ? iconStart : ''} endIcon={iconEnd ? iconEnd : ''}>
            {title ? title : icon}
        </Ibutton>
    )
}
