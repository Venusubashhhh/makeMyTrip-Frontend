import React, { useContext, useState } from 'react'
import { Email } from './Sample';
import axios from 'axios';
function Otpsuccess() {
    const [username,setusername]=useState('');
    const [password,setpassword]=useState('');
    const {setflag3,inputValue}=useContext(Email);
    function sendpass(e)
    {
        e.preventDefault();
axios.post('https://backend-mmt.onrender.com/setPassword',{email:inputValue,name:username,password:password,}).then((res)=>console.log(res)).catch((err)=>console.log(err))
    }
  return (
    <div >


<section data-cy="CommonModal_2" className="modalMain snipcss-tOKyM" style={{zIndex:'20'}}>
  <div className="appendBottom25">
    <p
      data-cy="commonModal"
      className="modalTitle makeFlex hrtlCenter font26 latoBold appendBottom5"
    >
      
      <span className="accountCreatedTitle">
        Congratulations!
        <br />
        Account created successfully
      </span>
    </p>
  </div>
  <form data-cy="profileForm_20">
    <div className="appendBottom20 welcomeOffer makeFlex hrtlCenter">
      <span className="welcomeOfferSymbol appendRight10"></span>
      <span>
        <span>
          Welcome offers for you! Use code:
          <strong>'WELCOMEMMT'</strong>
          and enjoy
          <strong>up to 20%*</strong>
          more savings on flights, hotels, bus, trains &amp; more.
        </span>
      </span>
    </div>
    <div className="modalContainer makeFlex spaceBetween">
      <div className="modalField makeFlex column appendBottom20 appendRight20">
        <label htmlFor="firstName" className="font14 latoBold appendBottom10">
          Enter full name
        </label>
        <div className="modalFieldInner makeFlex hrtlCenter">
          <input
            data-cy="fName"
            className="font14 fullWidth"
            id="firstName"
            name="firstName"
            maxLength={40}
            placeholder="Enter Your Full Name"
            type="text"
            value={username}
            onChange={(e)=>setusername(e.target.value)}
          />
        </div>
      </div>
    </div>
    <div className="modalContainer makeFlex spaceBetween">
      <div className="modalField makeFlex column appendBottom10 appendRight20">
        <label htmlFor="firstName" className="font14 latoBold appendBottom10">
          Enter password
        </label>
        <div className="modalFieldInner makeFlex hrtlCenter">
          
        <input
            data-cy="fName"
            className="font14 fullWidth"
            maxLength={40}
            placeholder="Enter password"
            type="password"
            value={password}
            onChange={(e)=>setpassword(e.target.value)}
          />
         
        </div>
      </div>
    </div>
    <p className="appendBottom20">
      Must be atleast 8 characters in length and should contain at least one
      alphabet, one number and one special character @$!%*#?&amp;
    </p>

      <button
     onClick={sendpass}
      >
        <span>Save and Continue</span>
      </button>
   
  </form>
  <p
    data-cy="CommonModal_6"
    className="font16 textCenter lightGreyText latoBold capText cursorPointer"
  >
    Skip
  </p>
</section>

    </div>
  )
}

export default Otpsuccess