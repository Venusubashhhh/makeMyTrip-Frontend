import React, { useContext, useState } from 'react'
import { Flightcontext } from './App'
function Booking() {
  const[firstname,setfirstname]=useState();
  const[lastname,setlastname]=useState();
 const[phone,setphone]=useState();
 const[countrycode,setcountrycode]=useState();
 const[mail,setmail]=useState();
 const [selectedGender, setSelectedGender] = useState('');
 const [selectedGenderc, setSelectedGenderc] = useState(''); const [selectedGenderi, setSelectedGenderi] = useState('');
 const [flag,setflag]=useState(false); // Initial state is an empty string

 const handleGenderChange = (event) => {
   setSelectedGender(event.target.value); // Update the selected gender state
 };
 const handleGenderChangei = (event) => {
  setSelectedGenderc(event.target.value); // Update the selected gender state
};
const handleGenderChangec = (event) => {
  setSelectedGenderi(event.target.value); // Update the selected gender state
};

 const[cfirstname,setcfirstname]=useState();
 const[clastname,setclastname]=useState();
const[dob,setdob]=useState()
const [cselectedGender, csetSelectedGender] = useState('');
const [flag1,setflag1]=useState(false);
const[ifirstname,setifirstname]=useState();
 const[ilastname,setilastname]=useState();
const[idob,setidob]=useState()
const [iselectedGender, isetSelectedGender] = useState('');
const [flag2,setflag2]=useState(false);

  const {from,setfrom,to,setto,flightname,setflightname,arrtime,setarrtime,deptime,setdeptime,price,setprice,durationh,setdurationh,durationm,setdurationm,logo,setlogo,date,setdate}=useContext(Flightcontext)
  return (
    <div>


<div className="componentContainer padding20 snipcss-EDNob">
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
</div>


<div className="travellerWrapper snipcss-QBVar">
  <div className="travellerHeading paddingTop20 appendBottom20">
    <h2 className="fontSize18 blackFont">Traveller Details</h2>
  </div>
  <div
    className="infoContactStrip appendBottom10 fontSize12 style-Zwnj3"
    id="style-Zwnj3"
  >
    "Multiple travellers can now receive booking details &amp; other alerts by
    just adding their contact info!"
    <span
      className="newInfoTag appendLeft5 fontSize10 style-AMXR4"
      id="style-AMXR4"
    >
      NEW
    </span>
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
      <div className="makeFlex perfectCenter fontSize14 boldFont">
        <font color="#4a4a4a">0/2</font>
        <font color="#9b9b9b">&nbsp;added</font>
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
  )
}

export default Booking