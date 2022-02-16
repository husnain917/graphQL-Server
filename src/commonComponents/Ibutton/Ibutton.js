import React from 'react'
import { Ibutton } from './IButtonStyle'

export default function PButton({ title, iconEnd,iconStart }) {
    return (
        <Ibutton startIcon={iconStart ? iconStart : ''} endIcon={iconEnd ? iconEnd : ''}>
            {title}
        </Ibutton>
    )
}
