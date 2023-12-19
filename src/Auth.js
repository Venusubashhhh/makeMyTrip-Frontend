import React, { useState } from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import {auth} from './firebase/setup'
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth'
function Auth() {
    const[phone,setphone]=useState('+91 8248284863');
  const sendotp=async()=>{
    try{
    const recaptcha=new RecaptchaVerifier(auth,"recaptcha",{})
    const confirmation=await signInWithPhoneNumber(auth,phone,recaptcha)
    console.log(confirmation)
    }
    catch(err)
    {
        console.log(err);
    }
  }
    return (
    <>
    <div>Auth

    </div>
    <PhoneInput
  country={'us'}
value={phone}

/>
<button onClick={sendotp}>send otp</button>
<div id='recaptcha'></div>
<input type='text'></input>
    </>
  )
}

export default Auth