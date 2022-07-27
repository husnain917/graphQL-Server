import React from 'react'
import { useState, useContext, useEffect } from 'react';
import { AppContext } from "../../../State";

export default function UseForgotPassword() {
  
    const [email, setEmail] = useState('');
    const [emailTyping, setEmailTyping] = useState(false)

    const handleTyping= () =>{
        setEmailTyping(true)
    }
    const handleRemoveTyping= () =>{
        setEmailTyping(false)
    }

  return (
    [{email, setEmail, emailTyping, handleTyping, handleRemoveTyping}]
  )
}
