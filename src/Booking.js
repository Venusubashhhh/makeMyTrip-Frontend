import React, { useContext, useState } from 'react'
import { Flightcontext } from './App'
import axios from 'axios';
import { Link } from 'react-router-dom';
function Booking() {
  const[firstname,setfirstname]=useState('');
  const[lastname,setlastname]=useState('');
 const[phone,setphone]=useState('');
 const[countrycode,setcountrycode]=useState('');
 const[mail,setmail]=useState('');
 const [selectedGender, setSelectedGender] = useState('');
 const[mobileno,setmobileno]=useState('');
 const[country,setcountry]=useState('');
 const[pincode,setpincode]=useState('');
 const[state,setstate]=useState('');
 const[address,setaddress]=useState('');
 const[email,setemail]=useState('');
 const [selectedGenderc, setSelectedGenderc] = useState(''); const [selectedGenderi, setSelectedGenderi] = useState('');
 const [flag,setflag]=useState(false); // Initial state is an empty string
 const[cfirstname,setcfirstname]=useState('');
 const[clastname,setclastname]=useState('');
const[dob,setdob]=useState('')
const [cselectedGender, csetSelectedGender] = useState('');
const [flag1,setflag1]=useState(false);
const[ifirstname,setifirstname]=useState('');
 const[ilastname,setilastname]=useState('');
const[idob,setidob]=useState('')
const [iselectedGender, isetSelectedGender] = useState('');
const [flag2,setflag2]=useState(false);

function sendpassengerdetails()
{
axios.post('https://backend-mmt.onrender.com/storePassengerDetails',{
  adult:{
    firstName:firstname,
    lastName:lastname,
    gender:selectedGender,
    countryCode:countrycode,
    mobile:phone,
    email:mail
  }
  ,
  children:{
    firstName:cfirstname,
    lastName:clastname,
    gender:cselectedGender,
    dob:dob,
  }
  ,
  infant:{
    firstName:ifirstname,
    lastName:ilastname,
    gender:iselectedGender,
    dob:idob, 
  }
  ,
 flightId:flightid
}).then((res)=>{console.log(res)
setbookingid(res?.data?.bookingId)
}).catch((err)=>console.log(err))
}
 const handleGenderChange = (event) => {
   setSelectedGender(event.target.value); // Update the selected gender state
 };
 const handleGenderChangei = (event) => {
  setSelectedGenderc(event.target.value); // Update the selected gender state
};
const handleGenderChangec = (event) => {
  setSelectedGenderi(event.target.value); // Update the selected gender state
};


  const {from,setfrom,to,setto,flightname,setflightname,arrtime,setarrtime,deptime,setdeptime,price,setprice,durationh,setdurationh,durationm,setdurationm,logo,setlogo,date,setdate,tax,settax,flightid,setflightid,bookingid,setbookingid}=useContext(Flightcontext)
  return (
    <>
    <div></div>
    <div style={{backgroundColor:'#051423',color:'white',position:'sticky',height:'70px',paddingLeft:'50px'}}><h2 className="blackFont" style={{color:'white',fontSize:'20px',paddingTop:'20px'}}>Complete Your Booking</h2></div>
    <div style={{backgroundColor:'#051423',height:'100px'}}></div>
    <div style={{display:'flex'}}>
<div style={{marginLeft:'5%'}}>

<div className="componentContainer padding20 snipcss-EDNob" >
  <div>
    <div className="appendBottom20">
      <section className="flightDetailBlk undefined">
        <div className="flDetailHdr">
          <div>
            <h2 className="blackFont">
              <b>{from} → {to}</b>
            </h2>
            <p className="appendTop10 makeFlex gap-x-10">
              <span className="scheduleDay style-DxY7K" id="style-DxY7K">
               {date}
              </span>
              <span className="fontSize14">Non Stop · {durationh}h {durationm}m</span>
            </p>
          </div>
          <div className="makeFlex column">
            <p className="refundTag style-rlGvb" id="style-rlGvb">
              <font color="#ffffff">Cancellation Fees Apply</font>
            </p>
            <p className="fontSize14 linkText appendTop10 textRight">
              <span>View Fare Rules</span>
            </p>
          </div>
        </div>
        <div className="flightItenaryWrap 0">
          <div className="flightItenaryHdr">
            <div className="makeFlex gap-x-10">
            <img src={logo} style={{height:'25px'}}/>
              <p className="makeFlex hrtlCenter gap-x-10">
                <span className="fontSize14 boldFont">{flightname}</span>
                <span className="fontSize14">AI 539</span>
               
              </p>
            </div>
            <div className="makeFlex">
              <div className="makeFlex hrtlCenter">
                <span className="fontSize14">
                  Business &gt;
                  <font color="#249995">
                    <b>Business Flex</b>
                  </font>
                </span>
                <span
                  className="bgProperties icon16 appendLeft5 appendTop2 style-LZWzN"
                  id="style-LZWzN"
                ></span>
              </div>
            </div>
          </div>
          <div className="flightItenary">
            <div className="flightItineraryDetails">
              <div className="flexOne">
                <div className="itenaryLeft">
                  <div className="makeFlex gap-x-10 ">
                    <div className="makeFlex time-info-ui">
                      <span className="fontSize14 blackFont">{deptime}</span>
                      <span className="layoverCircle"></span>
                    </div>
                    <div>
                      <span className="fontSize14 blackFont">{from}</span>
                      <span className="fontSize14">. {from} Airport</span>
                    </div>
                  </div>
                  <div className="layover">
                    <span className="fontSize14">{durationh}h {durationm}m</span>
                  </div>
                  <div className="makeFlex gap-x-10 overideBg">
                    <div className="makeFlex time-info-ui">
                      <span className="fontSize14 blackFont">{arrtime}</span>
                      <span className="layoverCircle"></span>
                    </div>
                    <div>
                      <span className="fontSize14 blackFont">{to}</span>
                      <span className="fontSize14">
                        . {to} International Airport
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="baggageInfo">
              <div className="baggageSection">
                <span
                  className="bgProperties icon24 appendRight5 style-4cBtU"
                  id="style-4cBtU"
                ></span>
                <span className="flexOne appendRight5">
                  <span className="boldFont fontSize14 appendRight5">
                    Cabin Baggage:
                  </span>
                  <span>12 Kgs / Adult</span>
                </span>
              </div>
              <div className="baggageSection">
                <span
                  className="bgProperties icon24 appendRight5 style-MiGES"
                  id="style-MiGES"
                ></span>
                <span className="flexOne appendRight5">
                  <span className="boldFont fontSize14 appendRight5">
                    Check-In Baggage:
                  </span>
                  <span>40 Kgs / Adult</span>
                </span>
              </div>
            </div>
          </div>
          <div
            className="baggageTag relative baggageArrowUp style-65xhj"
            id="style-65xhj"
          >
            <div className="baggageContent">
              <span
                className="icon20 bgProperties appendRight10 style-Ko12v"
                id="style-Ko12v"
              ></span>
              <p className="fontSize12 boldFont">
                Sorry, extra check-in baggage allowance details are currently
                not available from the airline for CJB-MAA.
              </p>
            </div>
            <div></div>
          </div>
        </div>
      </section>
    </div>
    <div className=" reviewUpgradeFare appendTop20">
      <p className="blackText fontSize18 blackFont appendBottom5"></p>
      <p className="appendBottom15"></p>
      <div className="make_flex gap20"></div>
    </div>
    <div className="appendTop20">
      <section className="refundSection">
        <div>
          <div className="refundHdr">
            <div className="makeFlex hrtlCenter">
              <h3 className="fontSize16 blackFont">
                <font color="#000000">Cancellation Refund Policy</font>
              </h3>
            </div>
            <div>
              <p className="fontSize14 darkText textRight">
                <span className="linkText appendLeft3">View Policy</span>
              </p>
            </div>
          </div>
          <div className="flightDetails reviewCanPolicyWrapper">
            <div className="cancSecWrap">
              <p className="flightDetailsInfo makeFlex hrtlCenter">
                <span className="singleairline">
                <img src={logo} style={{height:'25px'}}/>
                </span>
                <span className="blackFont darkText appendLeft10">{flightname}</span>
              </p>
              <div className="timeLineDetailsInfo makeFlex ">
                <div className="cancInfoLeft">
                  <p className="appendBottom20">Cancellation Penalty :</p>
                  <p>Cancel Between (IST) :</p>
                </div>
                <div className="flexOne">
                  <div className="makeFlex">
                    <span className="cancPriceInfo fontSize16">₹ 3,100</span>
                    <span className="cancPriceInfo fontSize16">₹ 20,059</span>
                  </div>
                  <p className="cancGradline style-5FcWY" id="style-5FcWY"></p>
                  <div className="cancTimeline">
                    <div className="cancTimeNode">
                      <p className="blackFont">Now</p>
                    </div>
                    <div className="cancTimeNode">
                      <p className="blackFont">{date.slice(0,7)}</p>
                      <p className="fontSize12 boldFont">13:10</p>
                    </div>
                    <div className="cancTimeNode">
                      <p className="blackFont">{date.slice(0,7)}</p>
                      <p className="fontSize12 boldFont">15:10</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>    
  </div>
  <div className="travellerWrapper snipcss-QBVar">
  <div className="travellerHeading paddingTop20 appendBottom20">
    <h2 className="fontSize18 blackFont">Traveller Details</h2>
  </div>

  <div className="appendBottom20 " id="wrapper_ADULT">
    <div className="adultDetailsHeading">
      <div className="makeFlex perfectCenter">
        <div className="appendRight10">
          <span
            className="adultImg bgProperties style-DiJ27"
            id="style-DiJ27"
          ></span>
        </div>
        <p className="fontSize14">
          <font className="boldFont">ADULT (12 yrs+)</font>
        </p>
      </div>
     
    </div>
    <div
      className="alert-wrapper makeFlex appendBottom12 appendTop12 travellerSectionAlert style-LjHLw"
      id="style-LjHLw"
    >
      <div className="makeFlex flexOne column">
        <p className="darkText fontSize12 boldFont">
          <span className="alert-text">
            <b>Important:</b>
            Enter name as mentioned on your passport or Government approved IDs.
          </span>
        </p>
      </div>
    </div>
    <div className="adultListWrapper">
      <div className="collapse"></div>
      <div className="otherList">
        <span>You have not added any adults to the list</span>
      </div>
      <div className="otherList">
        <button type="button" className="addTravellerBtn" onClick={()=>setflag(true)}>
          + ADD NEW ADULT
        </button>
      </div>
      {flag &&
 <div className="snipcss-BlDrZ" style={{backgroundColor:'white'}}>
  <div className="adultList checked" >
    <label className="checkboxContainer ">
      <span className="commonCheckbox sizeSm primaryCheckbox">
        <input
          type="checkbox"
          defaultValue=""
          defaultChecked=""
          id="style-h1VKF"
          className="style-h1VKF"
        />
        <span className="box">
          <span className="check"></span>
        </span>
      </span>
      <div className="checkboxContent">
        <p className="checkboxTitle">
          <span className="paxname">ADULT 2</span>
        </p>
      </div>
    </label>
  </div>
  <div className="AdultFormWrapper collapse show" >
    <div className="adultDetailsForm">
      <div className="adultDetailsInnner">
        <div className="adultItemRow appendBottom15">
          <div className="adultItem style-2n8GO" id="style-2n8GO">
            <div className="relative">
              <input
                autoComplete="none"
                placeholder="First & Middle Name"
                className="tvlrInput "
                type="text"
                defaultValue=""
                value={firstname}
                onChange={(e)=>setfirstname(e.target.value)}
              />
            </div>
          </div>
          <div className="adultItem style-S2hnZ" id="style-S2hnZ">
            <div className="relative">
              <input
                autoComplete="none"
                placeholder="Last Name"
                className="tvlrInput "
                type="text"
                defaultValue=""
                value={lastname}
                onChange={(e)=>setlastname(e.target.value)}
              />
            </div>
          </div>
          <div className="adultItem style-vd6EU" id="style-vd6EU">
      <div className="selectTab">
        <div>
          <label tabIndex={0}>
            <input
              type="radio"
              name="gender"
              value="MALE"
              checked={selectedGender === 'MALE'} // Check if the selected gender is 'MALE'
              onChange={handleGenderChange} // Handle changes in the gender selection
            />
            <span className="selectTabText">MALE</span>
          </label>
          <label tabIndex={1}>
            <input
              type="radio"
              name="gender"
              value="FEMALE"
              checked={selectedGender === 'FEMALE'} // Check if the selected gender is 'FEMALE'
              onChange={handleGenderChange} // Handle changes in the gender selection
            />
            <span className="selectTabText">FEMALE</span>
          </label>
        </div>
      </div>
      <p>Selected Gender: {selectedGender}</p> {/* Display the selected gender */}
    </div>
        </div>
        <div className="adultItemRow appendBottom15">
          <div className="adultItem style-hn9ko" id="style-hn9ko">
            <label className="makeFlex hrtlCenter">Country Code</label>
            <div className="selectItem relative ">
              <div className="selectList css-2b097c-container">
                <div className="dropdown__control css-yk16xz-control">
                  <div className="dropdown__value-container css-1hwfws3">
                    <div className="dropdown__placeholder css-1wa3eu0-placeholder">
                      Country Code
                    </div>
                    <div className="css-1g6gooi">
                      <div
                        className="dropdown__input style-L7HoJ"
                        id="style-L7HoJ"
                      >
                        <input
                       value={countrycode}
                       onChange={(e)=>setcountrycode(e.target.value)}
                          type="text"
                          aria-autocomplete="list"
                          defaultValue=""
                          className="style-UOToG"
                        />
                        <div id="style-DxTNk" className="style-DxTNk"></div>
                      </div>
                    </div>
                  </div>
                  <div className="dropdown__indicators css-1wy0on6">
                    <span className="dropdown__indicator-separator css-1hyfx7x"></span>
                    <div
                      aria-hidden="true"
                      className="dropdown__indicator dropdown__dropdown-indicator css-1eew81i"
                    >
                      <svg
                        height={20}
                        width={20}
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                        focusable="false"
                        className="css-19bqh2r"
                      >
                        <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="adultItem style-Wp2ce" id="style-Wp2ce">
            <div className="relative">
              <label htmlFor="popup">Mobile No</label>
              <input
                autoComplete="none"
                placeholder="Mobile No(Optional)"
                className="tvlrInput "
                type="text"
                defaultValue=""
                value={phone}
                onChange={(e)=>setphone(e.target.value)}
              />
            </div>
          </div>
          <div className="adultItem style-9j5Ka" id="style-9j5Ka">
            <div className="relative">
              <label htmlFor="popup">Email</label>
              <input
                autoComplete="none"
                placeholder="Email(Optional)"
                className="tvlrInput "
                type="text"
                defaultValue=""
                value={mail}
                onChange={(e)=>setmail(e.target.value)}
              />
            </div>
          </div>
        </div>
             
           


 

        </div>
    </div>
    </div>
    </div>}
    </div>
    
  </div>
  
  <div className="appendBottom20 " id="wrapper_CHILD">
    <div className="adultDetailsHeading">
      <div className="makeFlex perfectCenter">
        <div className="appendRight10">
          <span
            className="adultImg bgProperties style-qCvT6"
            id="style-qCvT6"
          ></span>
        </div>
        <p className="fontSize14">
          <font className="boldFont">CHILD (2-12 Yrs)</font>
        </p>
      </div>
      <div className="makeFlex perfectCenter fontSize14 boldFont">
        <font color="#4a4a4a">0/1</font>
        <font color="#9b9b9b">&nbsp;added</font>
      </div>
    </div>
    <div
      className="alert-wrapper makeFlex appendBottom12 appendTop12 travellerSectionAlert style-vb5nV"
      id="style-vb5nV"
    >
      <div className="makeFlex flexOne column">
        <p className="darkText fontSize12 boldFont">
          <span className="alert-text">
            <b>Important:</b>
            Enter name as mentioned on your passport or Government approved IDs.
          </span>
        </p>
      </div>
    </div>
    <div className="adultListWrapper">
      <div className="collapse"></div>
      <div className="otherList">
        <span>You have not added any child to the list</span>
      </div>
      <div className="otherList">
        <button type="button" className="addTravellerBtn" onClick={()=>setflag1(true)}>
          + ADD NEW CHILD
        </button>
      </div>
      {flag2 &&
 <div className="snipcss-BlDrZ" style={{backgroundColor:'white'}}>
  <div className="adultList checked" >
    <label className="checkboxContainer ">
      <span className="commonCheckbox sizeSm primaryCheckbox">
        <input
          type="checkbox"
          defaultValue=""
          defaultChecked=""
          id="style-h1VKF"
          className="style-h1VKF"
        />
        <span className="box">
          <span className="check"></span>
        </span>
      </span>
      <div className="checkboxContent">
        <p className="checkboxTitle">
          <span className="paxname">Child 1</span>
        </p>
      </div>
    </label>
  </div>
  <div className="AdultFormWrapper collapse show" >
    <div className="adultDetailsForm">
      <div className="adultDetailsInnner">
        <div className="adultItemRow appendBottom15">
          <div className="adultItem style-2n8GO" id="style-2n8GO">
            <div className="relative">
              <input
                autoComplete="none"
                placeholder="First & Middle Name"
                className="tvlrInput "
                type="text"
                defaultValue=""
                value={ifirstname}
                onChange={(e)=>setifirstname(e.target.value)}
              />
            </div>
          </div>
          <div className="adultItem style-S2hnZ" id="style-S2hnZ">
            <div className="relative">
              <input
                autoComplete="none"
                placeholder="Last Name"
                className="tvlrInput "
                type="text"
                defaultValue=""
                value={ilastname}
                onChange={(e)=>setilastname(e.target.value)}
              />
            </div>
          </div>
          <div className="adultItem style-vd6EU" id="style-vd6EU">
      <div className="selectTab">
        <div>
          <label tabIndex={0}>
            <input
              type="radio"
              name="gender"
              value="MALE"
              checked={selectedGenderi === 'MALE'} // Check if the selected gender is 'MALE'
              onChange={handleGenderChangei} // Handle changes in the gender selection
            />
            <span className="selectTabText">MALE</span>
          </label>
          <label tabIndex={1}>
            <input
              type="radio"
              name="gender"
              value="FEMALE"
              checked={selectedGenderc === 'FEMALE'} // Check if the selected gender is 'FEMALE'
              onChange={handleGenderChangec} // Handle changes in the gender selection
            />
            <span className="selectTabText">FEMALE</span>
          </label>
        </div>
      </div>
      <p>Selected Gender: {selectedGender}</p> {/* Display the selected gender */}
    </div>
        </div>
        <div className="adultItemRow appendBottom15">
          
          <div className="adultItem style-Wp2ce" id="style-Wp2ce">
            <div className="relative">
              <label htmlFor="popup">Date of birth</label>
              <input
                autoComplete="none"
                placeholder="Date of birth"
                className="tvlrInput "
                type="text"
                defaultValue=""
                value={idob}
                onChange={(e)=>setidob(e.target.value)}
              />
            </div>
          </div>
        
        </div>
             
           


 

        </div>
    </div>
    </div>
    </div>}
      
    </div>
  </div>
  <div className="appendBottom20 " id="wrapper_INFANT">
    <div className="adultDetailsHeading">
      <div className="makeFlex perfectCenter">
        <div className="appendRight10">
          <span
            className="adultImg bgProperties style-Bom29"
            id="style-Bom29"
          ></span>
        </div>
        <p className="fontSize14">
          <font className="boldFont">Infant (15 days - 2 Yrs)</font>
        </p>
      </div>
      <div className="makeFlex perfectCenter fontSize14 boldFont">
        <font color="#4a4a4a">0/1</font>
        <font color="#9b9b9b">&nbsp;added</font>
      </div>
    </div>
    <div
      className="alert-wrapper makeFlex appendBottom12 appendTop12 travellerSectionAlert style-DCANL"
      id="style-DCANL"
    >
      <div className="makeFlex flexOne column">
        <p className="darkText fontSize12 boldFont">
          <span className="alert-text">
            <b>Important:</b>
            Enter name as mentioned on your passport or Government approved IDs.
          </span>
        </p>
      </div>
    </div>
    <div className="adultListWrapper">
      <div className="collapse"></div>
      <div className="otherList">
        <span>You have not added any infants to the list</span>
      </div>
      <div className="otherList">
        <button type="button" className="addTravellerBtn" onClick={()=>setflag2(true)}>
          + ADD NEW INFANT
        </button>
        
      </div>
      {flag1 &&
 <div className="snipcss-BlDrZ" style={{backgroundColor:'white'}}>
  <div className="adultList checked" >
    <label className="checkboxContainer ">
      <span className="commonCheckbox sizeSm primaryCheckbox">
        <input
          type="checkbox"
          defaultValue=""
          defaultChecked=""
          id="style-h1VKF"
          className="style-h1VKF"
        />
        <span className="box">
          <span className="check"></span>
        </span>
      </span>
      <div className="checkboxContent">
        <p className="checkboxTitle">
          <span className="paxname">Infant 1</span>
        </p>
      </div>
    </label>
  </div>
  <div className="AdultFormWrapper collapse show" >
    <div className="adultDetailsForm">
      <div className="adultDetailsInnner">
        <div className="adultItemRow appendBottom15">
          <div className="adultItem style-2n8GO" id="style-2n8GO">
            <div className="relative">
              <input
                autoComplete="none"
                placeholder="First & Middle Name"
                className="tvlrInput "
                type="text"
                defaultValue=""
                value={cfirstname}
                onChange={(e)=>setcfirstname(e.target.value)}
              />
            </div>
          </div>
          <div className="adultItem style-S2hnZ" id="style-S2hnZ">
            <div className="relative">
              <input
                autoComplete="none"
                placeholder="Last Name"
                className="tvlrInput "
                type="text"
                defaultValue=""
                value={clastname}
                onChange={(e)=>setclastname(e.target.value)}
              />
            </div>
          </div>
          <div className="adultItem style-vd6EU" id="style-vd6EU">
      <div className="selectTab">
        <div>
          <label tabIndex={0}>
            <input
              type="radio"
              name="gender"
              value="MALE"
              checked={selectedGenderc === 'MALE'} // Check if the selected gender is 'MALE'
              onChange={handleGenderChangec} // Handle changes in the gender selection
            />
            <span className="selectTabText">MALE</span>
          </label>
          <label tabIndex={1}>
            <input
              type="radio"
              name="gender"
              value="FEMALE"
              checked={selectedGenderc === 'FEMALE'} // Check if the selected gender is 'FEMALE'
              onChange={handleGenderChangec} // Handle changes in the gender selection
            />
            <span className="selectTabText">FEMALE</span>
          </label>
        </div>
      </div>
      <p>Selected Gender: {selectedGender}</p> {/* Display the selected gender */}
    </div>
        </div>
        <div className="adultItemRow appendBottom15">
          
          <div className="adultItem style-Wp2ce" id="style-Wp2ce">
            <div className="relative">
              <label htmlFor="popup">Mobile No</label>
              <input
                autoComplete="none"
                placeholder="Date of birth"
                className="tvlrInput "
                type="text"
                defaultValue=""
                value={dob}
                onChange={(e)=>setdob(e.target.value)}
              />
            </div>
          </div>
        
        </div>
             
           


 

        </div>
    </div>
    </div>
    </div>}
 
    </div>
   
    
    </div>
    
    </div>
</div>
 <div style={{paddingLeft:'20px',paddingBottom:'40px',height:'150px',backgroundColor:'white',marginTop:'10px'}}>
  <div ></div>

      <p style={{fontWeight:'bold',paddingTop:'20px',paddingBottom:'10px'}}>Bookling details will be sent to</p>
     <div style={{display:'flex'}}>
      <div className="relative">
              <label htmlFor="popup">Country Code</label>
              <input
                autoComplete="none"
                placeholder="Enter country code"
                className="tvlrInput "
                type="text"
                defaultValue=""
                value={country}
                onChange={(e)=>setcountry(e.target.value)}
              />
            </div>
            <div className="relative" style={{paddingLeft:'20px'}}>
              <label htmlFor="popup">Mobile No</label>
              <input
                autoComplete="none"
                placeholder="Enter mobile no"
                className="tvlrInput "
                type="text"
                defaultValue=""
                value={mobileno}
                onChange={(e)=>setmobileno(e.target.value)}
              />
            </div>
            <div className="relative" style={{paddingLeft:'20px'}}>
              <label htmlFor="popup">Email</label>
              <input
                autoComplete="none"
                placeholder="Enter Mail id"
                className="tvlrInput "
                type="text"
                defaultValue=""
                value={email}
                onChange={(e)=>setemail(e.target.value)}
              />
            </div>
            </div>
    </div>
    

<div style={{paddingLeft:'20px',paddingBottom:'40px',marginTop:'10px',backgroundColor:'white',}}>
      <p style={{fontWeight:'bold',paddingTop:'10px',paddingBottom:'10px',fontSize:'20px'}}>Your Pincode and State</p>
     <div style={{display:'flex'}}>
      <div className="relative">
              <label htmlFor="popup">Pincode Code</label>
              <input
                autoComplete="none"
                placeholder="Enter Pincode"
                className="tvlrInput "
                type="text"
                defaultValue=""
                value={pincode}
                onChange={(e)=>setpincode(e.target.value)}
              />
            </div>
            <div className="relative" style={{paddingLeft:'20px'}}>
              <label htmlFor="popup">State</label>
              <input
                autoComplete="none"
                placeholder="Enter your state"
                className="tvlrInput "
                type="text"
                defaultValue=""
                value={state}
                onChange={(e)=>setstate(e.target.value)}
              />
            </div>
            <div className="relative" style={{paddingLeft:'20px'}}>
              <label htmlFor="popup">Address</label>
              <input
                autoComplete="none"
                placeholder="Enter your address"
                className="tvlrInput "
                type="text"
                defaultValue=""
                value={address}
                onChange={(e)=>setaddress(e.target.value)}
              />
            </div>
            </div>
    </div> 
    <Link to='/seatbooking'>
    <button className="grpBkgSelectBtn text-uppercase   clusterBtn"  onClick={sendpassengerdetails} style={{margin:'30px 03px'}}>continue</button>
    </Link>
    </div>
    <div style={{backgroundColor:'white',width:'300px',height:'250px',padding:'20px',marginLeft:'50px',marginTop:'20px'}}>
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
    </>
  )
}

export default Booking