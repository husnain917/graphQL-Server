import React from 'react'
import { FM } from './PButtonStyle'

export default function PButton({ title, iconEnd, iconStart, icon, ctaHandler }) {
    return (
        <FM.FormButton style={{ color: '#1E86FF' }} variant="outlined" startIcon={iconStart ? iconStart : ''} endIcon={iconEnd ? iconEnd : ''} onClick={()=>ctaHandler()}>
            {
                    title ? title : icon
            }
        </FM.FormButton >
    )
}