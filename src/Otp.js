import React, { useContext, useEffect } from 'react'
import axios from 'axios';
import { useState } from 'react';
import { Email } from './Sample';
function Otp() {

   const {inputValue,setflag4}=useContext(Email)
const[otp,setotp]=useState('')

  useEffect(()=>{
  
console.log('otp')
    axios.post('https://backend-mmt.onrender.com/otpEmail',{
        email:inputValue}).then((res)=>console.log(res)).catch((err)=>console.log(err));
  },[])
  function verifyotp(e){
e.preventDefault();
    console.log('otp verification')
    axios.post('https://backend-mmt.onrender.com/verifyEmail',{email:inputValue,
    otp:otp

    }).then((res)=>{console.log(res)
    setflag4(true);
    }).then((res)=>console.log(res))
  }
  return (
    <div >


<section
  data-cy="CommonModal_2"
  className="modalMain tcnFooter snipcss0-0-0-1 snipcss-nxyLB" style={{zIndex:'20'}}
>
  <span
    data-cy="closeModal"
    className="commonModal__close snipcss0-1-1-2"
  ></span>
  <div className="appendBottom25 snipcss0-1-1-3">
   
  </div>
  <form className="snipcss0-1-1-7">
    
   
    <div className="modalField makeFlex column appendBottom20 snipcss0-2-7-10">
      <label
        htmlFor="username"
        className="font14 latoBold appendBottom10 snipcss0-3-10-11"
      >
 Enter OTP
      </label>
      <div className="modalFieldInner makeFlex hrtlCenter snipcss0-3-10-12">
        <input
          type="text"
          className="font14 fullWidth snipcss0-4-12-13"
          id="username"
          name="username"
          autoComplete="off"
          placeholder="Enter OTP here"
          data-cy="userName"
          defaultValue=""
   value={otp}
   onChange={(e)=>setotp(e.target.value)}
        />
      </div>
    </div>

      <button onClick={verifyotp}
     
      >
        <span className="snipcss0-4-15-16">Continue</span>
      </button>
 
    <div className="snipcss0-2-7-17"></div>
  </form>
  <p className="googleLoginBar snipcss0-1-1-18">
    <span className="snipcss0-2-18-19">Or Login/Signup With</span>
  </p>
  <div className="makeFlex vrtlCenter appendBottom25 snipcss0-1-1-20">
    <div
      id="g_id_onload"
      data-client_id="365487944636-q943oq1rje9ugcbscagg2vre5om9maj0.apps.googleusercontent.com"
      data-callback="onGoogleLoginClick"
      data-auto_prompt="false"
      data-auto_select="true"
      className="snipcss0-2-20-21"
    ></div>
    <div
      className="g_id_signin snipcss0-2-20-22"
      data-type="icon"
      data-shape="circle"
      data-theme="outline"
      data-text="signin_with"
      data-size="large"
    >
      <div
        className="S9gUrf-YoZ4jf snipcss0-3-22-23 style-6cgzX"
        id="style-6cgzX"
      >
        <div className="snipcss0-4-23-24"></div>
        <iframe
          src="https://accounts.google.com/gsi/button?type=icon&shape=circle&theme=outline&text=signin_with&size=large&client_id=365487944636-q943oq1rje9ugcbscagg2vre5om9maj0.apps.googleusercontent.com&iframe_id=gsi_146458_696447&as=9ugI9QDmAwicLrkvDhAGSA"
          id="gsi_146458_696447"
          title="Sign in with Google Button"
          className="snipcss0-4-23-25 style-FmL5K"
        ></iframe>
      </div>
    </div>
  </div>
  <div className="makeFlex column hrtlCenter loginFooter snipcss0-1-1-26">
    <p className="textCenter appendBottom5 appendTop20 font12 blackText lineHeight18 snipcss0-2-26-27">
      By proceeding, you agree to MakeMyTrip's &nbsp;
      <a data-cy="LoginFlowPopup_97" className="snipcss0-3-27-28">
        Privacy Policy
      </a>
      ,
      <a data-cy="LoginFlowPopup_98" className="snipcss0-3-27-29">
        User Agreement
      </a>
      &nbsp;and&nbsp;
      <a data-cy="LoginFlowPopup_99" className="snipcss0-3-27-30">
        T&amp;Cs
      </a>
    </p>
  </div>
</section>
    </div>
  )
}

export default Otp