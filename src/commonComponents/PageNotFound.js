import React from 'react'
import { useParams } from 'react-router-dom'

export default function PageNotFound() {
    const params = useParams()
    return (
        <div>"{params.pageName}"PageNotFound</div>
    )
}
