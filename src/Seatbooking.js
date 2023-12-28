import React, { useEffect } from 'react'
import { useNavigate } from 'react-router';
import Stack from '@mui/material/Stack';
import ToggleButton from '@mui/material/ToggleButton';
import { Flightcontext } from './App';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useState,useContext } from 'react';

import axios from 'axios';
import { first } from 'lodash';
function Seatbooking() {
  const [alignment, setAlignment] = React.useState();
  const [alignment1, setAlignment1] = React.useState();
  const [alignment2, setAlignment2] = React.useState('A2');
  const[fname,setfname]=useState('');
  const[lname,setlname]=useState('');
  const[flag1,setflag1]=useState(false);

 
  const {from,setfrom,to,setto,flightname,setflightname,arrtime,setarrtime,deptime,setdeptime,price,setprice,durationh,setdurationh,durationm,setdurationm,logo,setlogo,date,setdate,tax,settax,flightid,setflightid,bookingid,setbookingid,paymentid,setpaymentid}=useContext(Flightcontext)
 const navigate=useNavigate()
  useEffect(()=>{
   
  },[paymentid])
  useEffect(()=>{
    axios.post('https://backend-mmt.onrender.com/getPassengerDetails',{
      bookingId:bookingid,
    }).then((res)=>{
      console.log(res);
setfname(res?.data?.passengers?.adult?.firstName)
setlname(res?.data?.passengers?.adult?.lastName)
    }).catch((err)=>console.log(err))
  },[bookingid])
  const handleChange2 = (event, newAlignment) => {
    setAlignment2(newAlignment);
    console.log(alignment2);
  };
  const children2 = [
    <ToggleButton value={'A3'} key="2">
<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAhElEQVR4nO2RywnAIBBE52RPWkEqy6dNwVjGhoABMejqxpAcfDC3dZ86wOABCsAGYAdAmTgAS5htZi0sTjNLBC4c1oUZE72kmet2vebeF6ioVC8QeK70XKkc1aXHpRqBQHOlpwulHVDu3GcCqsx/BRxD0O+LrKBYyuTcdWPqJLFh1wBVHPrbsh4HlQxQAAAAAElFTkSuQmCC"></img>
    </ToggleButton>,
   ]
    const control2 = {
      value: alignment2,
      onChange: handleChange2,
      exclusive: true,
    };

    const [alignment3, setAlignment3] = React.useState();
    const handleChange3 = (event, newAlignment) => {
      setAlignment3(newAlignment);
      console.log(alignment3);
    };
    const children3 = [
      <ToggleButton value={'A4'} key="2">
  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAhElEQVR4nO2RywnAIBBE52RPWkEqy6dNwVjGhoABMejqxpAcfDC3dZ86wOABCsAGYAdAmTgAS5htZi0sTjNLBC4c1oUZE72kmet2vebeF6ioVC8QeK70XKkc1aXHpRqBQHOlpwulHVDu3GcCqsx/BRxD0O+LrKBYyuTcdWPqJLFh1wBVHPrbsh4HlQxQAAAAAElFTkSuQmCC"></img>
      </ToggleButton>,
     ]
      const control3 = {
        value: alignment3,
        onChange: handleChange3,
        exclusive: true,
      };
const initpayment=(data)=>{
const options={
  key:'rzp_test_lxRT5NF1Dopxfd',
  amount:data.amount,
  currency:data.currency,
  order_id:data.id,
  handler:async(response)=>{
    setpaymentid(response?.razorpay_payment_id)
    console.log('response',response)
    try{
const {data}=axios.post('https://backend-mmt.onrender.com/payment/verify',response).then(()=>{
  axios.post('https://backend-mmt.onrender.com/airTicket',{
    from:from,
    to:to,
    duration:durationh,
    date:date,
    flightNo:flightid,
    seatNo:alignment2,
    passengerName:{
      firstName:fname,
      lastName:lname
    },
    paymentId:paymentid
  })
 navigate('/flightsuccess')
})
console.log(data)   
}
    catch(error){
 console.log(error)
 navigate('/flightfailure')
    }
  },
  theme:{
    color:'pink'
  }
}
const rzp1=new window.Razorpay(options);
rzp1.open();
}
const handlepayment =async() => {
  try{
const {data}=await axios.post('https://backend-mmt.onrender.com/payment/order',{amount:price})
console.log(data);
initpayment(data.data)

  }
  catch(error)
  {
    console.log(error);
  }
}

  const handleChange1 = (event, newAlignment) => {
    setAlignment1(newAlignment);
    console.log(alignment1);
  };
  const children1 = [
    <ToggleButton value={'A2'} key="1">
<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAhElEQVR4nO2RywnAIBBE52RPWkEqy6dNwVjGhoABMejqxpAcfDC3dZ86wOABCsAGYAdAmTgAS5htZi0sTjNLBC4c1oUZE72kmet2vebeF6ioVC8QeK70XKkc1aXHpRqBQHOlpwulHVDu3GcCqsx/BRxD0O+LrKBYyuTcdWPqJLFh1wBVHPrbsh4HlQxQAAAAAElFTkSuQmCC"></img>
    </ToggleButton>,
   ]
    const control1 = {
      value: alignment1,
      onChange: handleChange1,
      exclusive: true,
    };
  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
    console.log(alignment);
  };
  const children = [
    <ToggleButton value={'A1'} key="1">
<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAhElEQVR4nO2RywnAIBBE52RPWkEqy6dNwVjGhoABMejqxpAcfDC3dZ86wOABCsAGYAdAmTgAS5htZi0sTjNLBC4c1oUZE72kmet2vebeF6ioVC8QeK70XKkc1aXHpRqBQHOlpwulHVDu3GcCqsx/BRxD0O+LrKBYyuTcdWPqJLFh1wBVHPrbsh4HlQxQAAAAAElFTkSuQmCC"></img>
    </ToggleButton>,
   ]
    const control = {
      value: alignment,
      onChange: handleChange,
      exclusive: true,
    };


  const [alignment6, setAlignment6] = React.useState();
  const [alignment4, setAlignment4] = React.useState();
  const [alignment5, setAlignment5] = React.useState();
  const handleChange5 = (event, newAlignment) => {
    setAlignment5(newAlignment);
    console.log(alignment5);
  };
  const children5 = [
    <ToggleButton value={'A6'} key="2">
<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAhElEQVR4nO2RywnAIBBE52RPWkEqy6dNwVjGhoABMejqxpAcfDC3dZ86wOABCsAGYAdAmTgAS5htZi0sTjNLBC4c1oUZE72kmet2vebeF6ioVC8QeK70XKkc1aXHpRqBQHOlpwulHVDu3GcCqsx/BRxD0O+LrKBYyuTcdWPqJLFh1wBVHPrbsh4HlQxQAAAAAElFTkSuQmCC"></img>
    </ToggleButton>,
   ]
    const control5 = {
      value: alignment5,
      onChange: handleChange5,
      exclusive: true,
    };

    const [alignment7, setAlignment7] = React.useState();
    const handleChange7 = (event, newAlignment) => {
      setAlignment7(newAlignment);
      console.log(alignment3);
    };
    const children7 = [
      <ToggleButton value={'A8'} key="2">
  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAhElEQVR4nO2RywnAIBBE52RPWkEqy6dNwVjGhoABMejqxpAcfDC3dZ86wOABCsAGYAdAmTgAS5htZi0sTjNLBC4c1oUZE72kmet2vebeF6ioVC8QeK70XKkc1aXHpRqBQHOlpwulHVDu3GcCqsx/BRxD0O+LrKBYyuTcdWPqJLFh1wBVHPrbsh4HlQxQAAAAAElFTkSuQmCC"></img>
      </ToggleButton>,
     ]
      const control7 = {
        value: alignment7,
        onChange: handleChange7,
        exclusive: true,
      };

  const handleChange6 = (event, newAlignment) => {
    setAlignment6(newAlignment);
    console.log(alignment6);
  };
  const children4 = [
    <ToggleButton value={'A5'} key="1">
<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAhElEQVR4nO2RywnAIBBE52RPWkEqy6dNwVjGhoABMejqxpAcfDC3dZ86wOABCsAGYAdAmTgAS5htZi0sTjNLBC4c1oUZE72kmet2vebeF6ioVC8QeK70XKkc1aXHpRqBQHOlpwulHVDu3GcCqsx/BRxD0O+LrKBYyuTcdWPqJLFh1wBVHPrbsh4HlQxQAAAAAElFTkSuQmCC"></img>
    </ToggleButton>,
   ]
  
  const handleChange4 = (event, newAlignment) => {
    setAlignment4(newAlignment);
    console.log(alignment);
  };
  const control4 = {
    value: alignment4,
    onChange: handleChange4,
    exclusive: true,
  };
  const children6 = [
    <ToggleButton value={'A1'} key="1">
<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAhElEQVR4nO2RywnAIBBE52RPWkEqy6dNwVjGhoABMejqxpAcfDC3dZ86wOABCsAGYAdAmTgAS5htZi0sTjNLBC4c1oUZE72kmet2vebeF6ioVC8QeK70XKkc1aXHpRqBQHOlpwulHVDu3GcCqsx/BRxD0O+LrKBYyuTcdWPqJLFh1wBVHPrbsh4HlQxQAAAAAElFTkSuQmCC"></img>
    </ToggleButton>,
   ]
    const control6 = {
      value: alignment6,
      onChange: handleChange6,
      exclusive: true,
    };
  
  return (
    <>
    <div style={{backgroundColor:'#051423',color:'white',position:'sticky',height:'70px',paddingLeft:'50px'}}><h2 className="blackFont" style={{color:'white',fontSize:'20px',paddingTop:'20px'}}>Complete Your Booking</h2></div>
   
    <div style={{display:'flex',marginLeft:'5%'}}>
    <div style={{width:'68.5%'}}>

    <div className="makeFlex column gap20 snipcss-iBfJd">
  <div className="">
    <div id="JOURNEY_SECTION" className="oneCard-element">
      <div className="componentContainer padding20">
        <div>
          <div className="flSummaryHdr">
            <div className="fltHdr">
              <h2 className="fontSize18 blackFont">Flights Summary</h2>
            </div>
            <span
              className="bgProperties icon20 style-jliSg"
              id="style-jliSg"
            ></span>
          </div>
          <div className="flOverviewContent" style={{marginTop:'-20px'}}>
            <div>
              <span className="boldFont">
                <font color="#6d7278">
                  <b>{from} → {to}</b>
                </font>
              </span>
              <span className="appendLeft10">
                <font color="#6d7278">{date} · Non Stop · {durationh}h {durationm}m</font>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="" style={{}}>
    <div className="componentContainer">
      <div className="overviewSummaryHeading" style={{paddingTop:'25px',paddingLeft:'20px'}}>
        <h2 className="fontSize18 blackFont heading-text makeFlex gap-x-15">
          <span>Traveller Details</span>
          <span className="subHeading greenText">
            <font color="#6d7278">{fname} {lname}</font>
          </span>
        </h2>
        <span
          className="bgProperties editIcon style-Wd9r6"
          id="style-Wd9r6"
        ></span>
      </div>
    </div>
  </div>
</div>


 
    
<div style={{    boxShadow: '0 3px 30px 0 rgba(0,0,0,.1)',
    backgroundColor: '#fff',marginBottom:'10px',width:'99%',marginTop:'30px'}}>

<div className="ancillaryHeader snipcss-8oEof">
  <ul className="ancillaryTabs">
    
  <h2 className="fontSize18 blackFont">Seats</h2>
  {flag1 && <p style={{paddingLeft:'20px'}}> {alignment1}{alignment2}{alignment3}{alignment4}{alignment5}{alignment6}{alignment7} </p>}
  </ul>
  <span className="fontSize16 blackFont"></span>
</div>
{!flag1 &&
    <div style={{backgroundColor:'white',height:'600px',width:'100%',overflowY:'scroll'}}>
        <div style={{backgroundColor:'skyblue',paddingLeft:'32%'}}>
            <img src='https://jsak.mmtcdn.com/flights/assets/media/ic_flightSmallFront.1e0e0ad4.png' style={{width:'300px'}}></img>
            <div style={{backgroundColor:'white',width:'300px',height:'300px'}}>
                <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups" style={{display:'flex',paddingTop:'20px'}}>
                <ul className="guestCounter font12 darkText gbCounter snipcss0-1-1-4">
    <ToggleButtonGroup {...control} aria-label="Small sizes">
        {children}
      </ToggleButtonGroup>
      <ToggleButtonGroup {...control1} aria-label="Small sizes">
        {children1}
      </ToggleButtonGroup>
      
    
    </ul>
    <ul style={{marginLeft:'106px'}}>
    <ToggleButtonGroup {...control2} aria-label="Small sizes">
        {children2}
      </ToggleButtonGroup>
      <ToggleButtonGroup {...control3} aria-label="Small sizes">
        {children3}
      </ToggleButtonGroup>
    </ul>
                </div>
                <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups" style={{display:'flex',marginTop:'20px'}}>
                <ul className="guestCounter font12 darkText gbCounter snipcss0-1-1-4">
    <ToggleButtonGroup {...control4} aria-label="Small sizes">
        {children4}
      </ToggleButtonGroup>
      <ToggleButtonGroup {...control5} aria-label="Small sizes">
        {children5}
      </ToggleButtonGroup>
      
    
    </ul>
    <ul style={{marginLeft:'106px'}}>
    <ToggleButtonGroup {...control6} aria-label="Small sizes">
        {children6}
      </ToggleButtonGroup>
      <ToggleButtonGroup {...control7} aria-label="Small sizes">
        {children7}
      </ToggleButtonGroup>
    </ul>
                </div>
                
                <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups" style={{display:'flex',marginTop:'20px'}}>
                <ul className="guestCounter font12 darkText gbCounter snipcss0-1-1-4">
    <ToggleButtonGroup {...control4} aria-label="Small sizes">
        {children4}
      </ToggleButtonGroup>
      <ToggleButtonGroup {...control5} aria-label="Small sizes">
        {children5}
      </ToggleButtonGroup>
      
    
    </ul>
    <ul style={{marginLeft:'106px'}}>
    <ToggleButtonGroup {...control6} aria-label="Small sizes">
        {children6}
      </ToggleButtonGroup>
      <ToggleButtonGroup {...control7} aria-label="Small sizes">
        {children7}
      </ToggleButtonGroup>
    </ul>
                </div>
                
                <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups" style={{display:'flex',marginTop:'20px'}}>
                <ul className="guestCounter font12 darkText gbCounter snipcss0-1-1-4">
    <ToggleButtonGroup {...control4} aria-label="Small sizes">
        {children4}
      </ToggleButtonGroup>
      <ToggleButtonGroup {...control5} aria-label="Small sizes">
        {children5}
      </ToggleButtonGroup>
      
    
    </ul>
    <ul style={{marginLeft:'106px'}}>
    <ToggleButtonGroup {...control6} aria-label="Small sizes">
        {children6}
      </ToggleButtonGroup>
      <ToggleButtonGroup {...control7} aria-label="Small sizes">
        {children7}
      </ToggleButtonGroup>
    </ul>
                </div>
                
            </div>
            <img src='https://jsak.mmtcdn.com/flights/assets/media/ic_flightSmallTail.aa15f774.png' style={{width:'300px'}}></img>
        </div>
        
    </div>
    
}


    
    <div style={{backgroundColor:'white',width:'73%'}}>
    <h2 className="blackFont" style={{fontSize:'20px',paddingLeft:'20px', paddingTop:'10px',paddingBottom:'10px'}}> {from} - {to}</h2>
   </div>
    <div>

    </div>
    
    </div>
    </div>
    <div style={{backgroundColor:'white',width:'300px',height:'250px',padding:'20px',marginLeft:'50px',}}>
      <p style={{fontSize:'20px',fontWeight:'bold'}}>
        Fare Summary
      </p>
      <div style={{display:'flex',marginTop:'20px',marginBottom:'10px'}}>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16" style={{marginRight:'6px',marginTop:'3px'}}>
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
</svg>
      <p style={{fontWeight:'bold',padding:'15px auto'}}>Base Fare  <span style={{marginLeft:'90px'}}>₹{price}</span></p>
      </div>
   <hr style={{backgroundColor:'grey'}}></hr>
   <div style={{display:'flex',marginTop:'10px',marginBottom:'10px'}}>
   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16" style={{marginRight:'6px',marginTop:'3px'}}>
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
</svg>
      <p style={{fontWeight:'bold',padding:'15px auto'}}>Taxes and surcharges  <span style={{marginLeft:'20px'}}>₹{tax}</span></p>
      </div>
<hr></hr>
      <p style={{fontWeight:'bold',fontSize:'17px',padding:'15px auto',marginTop:'20px'}}>Total amount <span style={{marginLeft:'65px'}}>₹{price}</span></p>
    </div>
    </div>
    {! flag1 &&
    <button className="grpBkgSelectBtn text-uppercase   clusterBtn"   style={{margin:'30px 80px'}} onClick={()=>{
      setflag1(!flag1)
    }}>continue</button>
    }
    {flag1 &&
     <button className="grpBkgSelectBtn text-uppercase   clusterBtn"  onClick={handlepayment} style={{margin:'30px 80px'}} >pay</button>
    }
    </>
  )
}

export default Seatbooking