import React, { createContext, useContext, useState } from 'react'
import Otp from './Otp';
import Password from './Password';
import axios from 'axios';
import Otpsuccess from './Otpsuccess';
import { Signup,Flight, Otpp } from './App';
import { Emailcontext } from './App';

export const Email=createContext();
function Sample() {
    const {setflights,sign,setsign,passflag,setpassflag,confirmflag,setconfirmflag,username,setusername}=useContext(Flight)
    const{otpflag,setotpflag}=useContext(Otpp);
    const[flag,setflag]=useState(false)
    const[flag1,setflag1]=useState(false);
    const[flag2,setflag2]=useState(false);
    const[flag3,setflag3]=useState(false)
    const[flag4,setflag4]=useState(false)
    const [inputValue, setInputValue] = useState('');
 const {email,setemail}=useContext(Emailcontext)

    const handleChange = (event) => {
      setInputValue(event.target.value);
      setemail(event.target.value);
    };
  const handlesubmit=(e)=>{
    e.preventDefault();
console.log('submit')
    axios.post('https://backend-mmt.onrender.com/userCheck',{
        email:inputValue}).then((res)=>{console.log(res)
        setpassflag(true)
        setsign(false);
        }).catch((err)=>{console.log(err)
        setotpflag(true)
        setsign(false);
        });
     
  }
  return (
    <div>

{sign &&
    <section
  data-cy="CommonModal_2"
  className="modalMain tcnFooter snipcss0-0-0-1 snipcss-nxyLB" style={{zIndex:'40'}}
>
  <span
    data-cy="closeModal"
    className="commonModal__close snipcss0-1-1-2"
  ></span>
  <div className="appendBottom25 snipcss0-1-1-3">
    <ul
      data-cy="LoginFlowPopup_82"
      className="makeFlex textCenter latoBlack font16 capText noSelection snipcss0-2-3-4"
    >
      <li
        className="active snipcss0-3-4-5"
        data-acctype="personal"
        data-cy="personalLogin"
      >
        Personal Account
      </li>
      <li className="snipcss0-3-4-6" data-acctype="myBiz">
        MyBiz Account
      </li>
    </ul>
  </div>
  <form className="snipcss0-1-1-7">
    
   
    <div className="modalField makeFlex column appendBottom20 snipcss0-2-7-10">
      <label
        htmlFor="username"
        className="font14 latoBold appendBottom10 snipcss0-3-10-11"
      >
        Email or Mobile Number
      </label>
      <div className="modalFieldInner makeFlex hrtlCenter snipcss0-3-10-12">
        <input
          type="text"
          className="font14 fullWidth snipcss0-4-12-13"
          id="username"
          name="username"
          autoComplete="off"
          placeholder="Enter email or mobile number"
          data-cy="userName"
          defaultValue=""
          value={inputValue}
          onChange={handleChange}
        />
      </div>
    </div>

      <button
        onClick={handlesubmit}
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
</section>}
{otpflag && <Email.Provider value={{inputValue,setflag4}}> <Otp></Otp></Email.Provider>}

{passflag &&  <Email.Provider value={{inputValue}}><Password></Password></Email.Provider>}
{confirmflag && <Email.Provider value={{setflag3,inputValue}}><Otpsuccess/></Email.Provider> }
    </div>
  )
  
}

export default Sample