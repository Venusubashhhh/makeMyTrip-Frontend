import React, { createContext, useEffect, useState } from "react";
import Sel from "./Sel";
import Buttonsel from "./Buttonsel";
import DatePicker from "react-datepicker";
import Sel2 from "./Sel2";
import "react-datepicker/dist/react-datepicker.css";
import DateLabel from "./DateLabel";
import axios from "axios";
import { Link } from "react-router-dom";
import Flights from "./Flights";
export const Data1=createContext()
export const Data2=createContext();
export const Data3=createContext();
export const Data4=createContext();
export const Data5=createContext();
function Aeroplane() {
  const[flag,setflag]=useState(false)
  const[flag1,setflag1]=useState(false)
  const [flag5,setflag5]=useState(false)
  const[flag3,setflag3]=useState(false)
  const[flag4,setflag4]=useState(false)
  const [fromcity,setfromcity]=useState('coimbatore')
  const[fromairport,setfromairport]=useState('coimbatore Airport')
  const[fromcountry,setfromcountry]=useState('India')
  const [tocity,settocity]=useState('Chennai')
  const[toairport,settoairport]=useState('Chennai Airport')
  const[tocountry,settocountry]=useState(' India')
  const [startDate, setStartDate] = useState();
  const [startDate2, setStartDate2] = useState();
  const[totalmembers,settotalmembers]=useState(0);
  const[classs,setclasss]=useState('');
  const[flights,setflights]=useState([])

  function senddata()
  {
   
   axios.post('https://backend-mmt.onrender.com/searchFlights', {
    from: {
      city: fromcity,
      date: startDate
    },
    to: {
      city: tocity
    }
    , fareType: classs,

  } ).then((res)=>{
    setflights(res.data)
    console.log(res.data)
  }).catch((err)=>console.log(err));
  }
 
  return (
    <div style={{backgroundColor:'white',height:'280px',paddingTop:'25px',width:'90%',marginLeft:'5%',paddingLeft:'-10%'}}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="aeroplane-trip-types">
          <div style={{ color: "black", fontSize: "10px" }}>
            <label>
              {" "}
              <input type="radio" name="oneway" placeholder="" />
              ONEWAY
            </label>
            <label>
              {" "}
              <input type="radio" name="oneway" placeholder="" />
              ROUNDTRIP
            </label>
            <label>
              {" "}
              <input type="radio" name="oneway" placeholder="" />
              MULTICITY
            </label>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: "7px",
              color: "silver",
              gap: "5px",
            }}
          >
            <h1>International Flights |</h1>
            <h1>Domestic Flights |</h1>
            <h1>
              <span
                style={{
                  background: "red",
                  padding: "5px",
                  boxShadow: "0 1px 4px 0 rgb(0 0 0 / 20%)",
                  backgroundColor: "rgba(254, 197, 0, 0.2)",
                }}
              >
                Flight+Cab: Serving non Airport cities
              </span>
            </h1>
          </div>
        </div>
        <div
          style={{
    
            border: "1px solid silver",
            width: "1200px",
            height: "100px",
        marginLeft:'12px',
            borderRadius: "5px",
            display: "flex",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "10px",
            }}
          >
            <div
              style={{
                marginLeft: "20px",
                fontSize: "20px",
                marginTop: "10px",
              }}
         onClick={()=>setflag(true)}
            >
              From
            </div>
            <p style={{fontFamily: 'Mukta, Lato, sans-serif',
          fontWeight:'900',
          fontSize:'30px'}}>{fromcity}</p>
          <p style={{    color: '#4a4a4a',
    fontSize: '14px',
    fontFamily: 'var(--font-family)',
    fontWeight: '400'}}>{fromairport} {fromcountry}</p>
            {
              flag1 && <Data1.Provider value={{setfromcity,setfromairport,setfromcountry,flag,setflag}}><Sel display></Sel></Data1.Provider>}
          </div>
          <div style={{ borderLeft: "2px solid silver", height: "100px" }}></div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "10px",
            }}
           
          >
            <div
              style={{
                marginLeft: "20px",
                fontSize: "20px",
                marginTop: "10px",
              }}
              onClick={()=>setflag1(true)}
            >
              To
            </div>
            <p style={{fontFamily: 'Mukta, Lato, sans-serif',
          fontWeight:'900',
          fontSize:'30px'}}>{tocity}</p>
          <p style={{    color: '#4a4a4a',
    fontSize: '14px',
    fontFamily: 'var(--font-family)',
    fontWeight: '400'}}>{toairport} {tocountry}</p>
            {
              flag1 && <Data2.Provider value={{settocity,settoairport,settocountry,flag1,setflag1}}><Sel2 display></Sel2></Data2.Provider>}
          </div>
          <div style={{ borderLeft: "2px solid silver", height: "100px", }}></div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "10px",
              paddingRight: "10px",
            }}
            onClick={()=>setflag3(!flag3)}
          >
            <div
              style={{
                marginLeft: "20px",
                fontSize: "20px",
                marginTop: "10px",
              }}
            >
              Departure
            </div>
            <Data4.Provider value={{setStartDate}}><DateLabel/></Data4.Provider>
          </div>
          <div style={{ borderLeft: "2px solid silver", height: "100px" }}></div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "10px",
            }}
            onClick={()=>setflag4(!flag4)}
          >
            <div
              style={{
                marginLeft: "20px",
                fontSize: "20px",
                marginTop: "10px",
              }}
            >
              Return
            </div>
           {/* <DateLabel/> */}
          </div>
          <div
            style={{
              borderLeft: "2px solid silver",
              height: "100px",
              marginLeft: "7px",
            }}
          ></div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "10px",
            }}
        
          >
            <div
              style={{
                marginLeft: "20px",
                fontSize: "20px",
                marginTop: "10px",
              }}
            >
              Travellers
            </div>
            <div style={{ display: "flex" }} >
              
              <div style={{ fontSize: "23px", margin: "5px 0 0 -25px " }} onClick={()=>setflag5(true)}>
                Travellers
              </div>
              <p>{totalmembers}</p>
              <p>{classs}</p>
             {flag5 && <Data3.Provider value={{flag5,setflag5,settotalmembers,setclasss}}><Buttonsel/></Data3.Provider>}
            </div>
          </div>
        </div>
      </form>
      <div style={{ display: "flex" }}>
        <div
          style={{
            color: "black",
            fontSize: "10px",
            margin: " 15px 0 0 80px",
            display: "flex",
            background: "#F2F2F2",
            width: "30%",
            padding: "5px",
            borderRadius: "5px",
          }}
        >
          <div style={{ display: "flex" }}>
            {" "}
            <input type="radio" name="oneway" placeholder="" />
            <div className="snipcss0-5-48-49">
              Regular <br />
              Fares
            </div>
          </div>
          <div style={{ display: "flex" }}>
            {" "}
            <input type="radio" name="oneway" placeholder="" />
            <div>
              Armed Forces <br />
              Fares
            </div>
          </div>
          <div style={{ display: "flex" }}>
            {" "}
            <input type="radio" name="oneway" placeholder="" />
            <div>
              Student <br />
              Fares
            </div>
          </div>
          <div style={{ display: "flex" }}>
            {" "}
            <input type="radio" name="oneway" placeholder="" />
            <div>
              Senior Citizen <br />
              Fares
            </div>
          </div>
          <div style={{ display: "flex" }}>
            {" "}
            <input type="radio" name="oneway" placeholder="" />
            <div>
              Double Seat <br />
              Fares
            </div>
          </div>
        </div>

        <div style={{ display: "flex", margin: "15px 0 0 360px" }}>
          <div style={{ fontSize: "11px", marginTop: "5px" }}>
            Recent Searches :{" "}
          </div>
          <div style={{ display: "flex" }}>
            <div
              style={{
                fontSize: "11px",
                background: "#F2F2F2",
                width: "120px",
                height: "30px",
                marginLeft: "8px",
                borderRadius: "5px",
                padding: "3px",
              }}
            >
              Hyderabad - Mumbai <br />
              19 nov 2021
            </div>
            <div
              style={{
                fontSize: "11px",
                background: "#F2F2F2",
                width: "120px",
                height: "30px",
                marginLeft: "10px",
                borderRadius: "5px",
                padding: "3px",
              }}
            >
              Hyderabad - Mumbai <br /> 14 sept 2021{" "}
            </div>
          </div>
        </div>
       <Link to='/flights'><button onClick={senddata}>submit</button></Link> 
      </div>

{/* 
       <div
  data-cy="flightSW"
  className="fltWidgetSection appendBottom40 primaryTraveler snipcss-TpxtC"
style={{marginTop:'30px'}}>
  <div className="makeFlex hrtlCenter">
    <ul className="fswTabs latoRegular darkGreyText ">
      <li data-cy="oneWayTrip" className="selected">
      <input type="radio" name="oneway" placeholder="" />
           
        One Way
      </li>
      <li data-cy="roundTrip" className="">
      <input type="radio" name="oneway" placeholder="" />
           
        Round Trip
      </li>
      <li data-cy="mulitiCityTrip" className="">
      <input type="radio" name="oneway" placeholder="" />
           
        Multi City
      </li>
    </ul>
    <div className="pushRight makeFlex hrtlCenter">
      <p className="widgetTitle flexOne">
        Book&nbsp;
        <a href="/international-flights/" className="darkGreyText">
          International
        </a>
        &nbsp;and&nbsp;
        <a href="/flights/" className="darkGreyText">
          Domestic Flights
        </a>
      </p>
    </div>
  </div>
  <div className="fsw snipcss0-0-0-1 tether-element-attached-top tether-element-attached-center tether-target-attached-top tether-target-attached-center">
    <div className="fsw_inner returnPersuasion snipcss0-1-1-2 snipcss0-0-0-1" onClick={()=>setflag1(!flag1)}>
    <div className="flt_fsw_inputBox searchCity inactiveWidget snipcss0-2-2-3 snipcss0-1-1-2">
        <label htmlFor="fromCity" className="snipcss0-3-3-4 snipcss0-2-2-3">
          <span className="lbl_input appendBottom10 snipcss0-4-4-5 snipcss0-3-3-4">
            From
          </span>
          {
              flag1 && <Data1.Provider value={{setfromcity,setfromairport,setfromcountry,flag,setflag}}><Sel display></Sel></Data1.Provider>}
         
         
         
         {!flag1 &&   <p
            data-cy="fromCity"
            id="fromCity"
            type="text"
            className="fsw_inputField lineHeight36 latoBlack font30 snipcss0-4-4-6 snipcss0-3-3-5"
            readOnly=""
            
              >{fromcity}</p>}
         {!flag1 && <p
            className="code makeRelative snipcss0-4-4-7 snipcss0-3-3-6"
            title="DEL, Indira Gandhi International Airport India"
          >
            <span
              data-cy="defaultFromValue"
              title=""
              className="truncate airPortName snipcss0-5-7-8 snipcss0-4-6-7"
            >
              DEL, Indira Gandhi International Airport India
            </span>
          </p>}
        </label>
      </div>
      <span className="fltSwipCircle snipcss0-2-2-9 snipcss0-1-1-8">
        <span className="flightsSprite fltSwipIcon snipcss0-3-9-10 snipcss0-2-8-9"></span>
      </span>
      <div className="flt_fsw_inputBox searchToCity inactiveWidget snipcss0-2-2-11 snipcss0-1-1-10">
        <label htmlFor="toCity" className="snipcss0-3-11-12 snipcss0-2-10-11">
          <span className="lbl_input appendBottom10 snipcss0-4-12-13 snipcss0-3-11-12">
            To
          </span>
          <input
            data-cy="toCity"
            id="toCity"
            type="text"
            className="fsw_inputField lineHeight36 latoBlack font30 snipcss0-4-12-14 snipcss0-3-11-13"
            readOnly=""
            defaultValue="Coimbatore"
          />
          <p
            className="code makeRelative snipcss0-4-12-15 snipcss0-3-11-14"
            title="CJB, Coimbatore Airport India"
          >
            <span
              data-cy="defaultToValue"
              title=""
              className="truncate airPortName snipcss0-5-15-16 snipcss0-4-14-15"
            >
              CJB, Coimbatore Airport India
            </span>
          </p>
        </label>
      </div>
      <div className="flt_fsw_inputBox dates inactiveWidget snipcss0-2-2-17 snipcss0-1-1-16">
        <label
          htmlFor="departure"
          className="snipcss0-3-17-18 snipcss0-2-16-17"
        >
          <span className="lbl_input appendBottom10 snipcss0-4-18-19 snipcss0-3-17-18">
            Departure
          </span>
          <input
            data-cy="departure"
            id="departure"
            type="text"
            className="fsw_inputField font20 snipcss0-4-18-20 snipcss0-3-17-19"
            readOnly=""
            defaultValue="Monday, 5 Feb 2024"
          />
          <p
            data-cy="departureDate"
            className="blackText font20 code lineHeight36 snipcss0-4-18-21 snipcss0-3-17-20"
          >
            <span className="font30 latoBlack snipcss0-5-21-22 snipcss0-4-20-21">
              2
            </span>
            <span className="snipcss0-5-21-23 snipcss0-4-20-22">Feb</span>
            <span className="shortYear snipcss0-5-21-24 snipcss0-4-20-23">
              24
            </span>
          </p>
          <p
            data-cy="departureDay"
            className="code snipcss0-4-18-25 snipcss0-3-17-24"
          >
            Friday
          </p>
        </label>
      </div>
      <div className="flt_fsw_inputBox dates reDates inactiveWidget snipcss0-2-2-26 snipcss0-1-1-25">
        <div className="returnPersuasionTooltip hide snipcss0-3-26-27 snipcss0-2-25-26">
          <p className="snipcss0-4-27-28 snipcss0-3-26-27">
            Return fares may hike due to high demand. Book now using myBiz
            special fare &amp; cancel/change date for FREE later if plan changes
          </p>
        </div>
        <div data-cy="returnArea" className="snipcss0-3-26-29 snipcss0-2-25-28">
          <label className="snipcss0-4-29-30 snipcss0-3-28-29">
            <span className="lbl_input appendBottom10 snipcss0-5-30-31 snipcss0-4-29-30">
              Return
            </span>
            <p
              data-cy="returnDefaultText"
              className="latoBlack font12 greyText lineHeight16 snipcss0-5-30-32 snipcss0-4-29-31"
            >
              Tap to add a return date for bigger discounts
            </p>
          </label>
        </div>
      </div>
      <div
        data-cy="flightTraveller"
        className="flt_fsw_inputBox flightTravllers inactiveWidget snipcss0-2-2-33 snipcss0-1-1-32"
      >
        <label
          htmlFor="travellers"
          className="snipcss0-3-33-34 snipcss0-2-32-33"
        >
          <span className="lbl_input appendBottom5 snipcss0-4-34-35 snipcss0-3-33-34">
            Travellers &amp; Class
          </span>
          <input
            data-cy="travellers"
            id="travellers"
            type="text"
            className="fsw_inputField font30 latoBlack snipcss0-4-34-36 snipcss0-3-33-35"
            readOnly=""
            defaultValue="2 Infants, 2 Adults, 8 Childrens"
          />
          <p
            data-cy="travellerText"
            className="blackText font20 code lineHeight36 snipcss0-4-34-37 snipcss0-3-33-36"
          >
            <span className="appendRight10 snipcss0-5-37-38 snipcss0-4-36-37">
              <span className="font30 latoBlack snipcss0-6-38-39 snipcss0-5-37-38">
                12&nbsp;
              </span>
              Travellers
            </span>
          </p>
          <p className="snipcss0-4-34-40 snipcss0-3-33-39">Premium Economy</p>
        </label>
        <div className="introGBFlt snipcss0-3-33-41 snipcss0-2-32-40">
          <div className="introGBFltTooltip whiteText snipcss0-4-41-42 snipcss0-3-40-41">
            Save on bookings with more than 9 travellers
          </div>
        </div>
      </div>
    </div>
    <div className="makeFlex hrtlCenter appendBottom20 flightFare snipcss0-1-1-43">
      <div className="makeFlex hrtlCenter snipcss0-2-43-44">
        
        <span className="font12 latoBold noShrink appendRight5 selectFareText snipcss0-3-44-45">
          Select A
          <br className="snipcss0-4-45-46" />
          Fare Type:
        </span>
        <ul className="specialFareNew snipcss0-3-44-47">
          <li className="font12 blackText wrapFilter activeItem snipcss0-4-47-48">
            <p className="snipcss0-5-48-49">
              Regular
              <br className="snipcss0-6-49-50" />
              Fares
            </p>
          </li>
          <li className="font12 blackText wrapFilter snipcss0-4-47-51">
            <p className="snipcss0-5-51-52">
              Armed Forces
              <br className="snipcss0-6-52-53" />
              Fares
            </p>
            <div className="specialFareTooltip whiteText snipcss0-5-51-54">
              <p className="font12 latoBold appendBottom5 snipcss0-6-54-55">
                Armed Forces Fares
              </p>
              <p className="font11 snipcss0-6-54-56">
                Applicable for serving and retired personnel of Armed Forces and
                Paramilitary Forces, their recognised dependants like spouses
                and children, and war widows. It is mandatory to show a valid ID
                or dependant card at the airport, without which boarding might
                be denied.
              </p>
            </div>
          </li>
          <li className="font12 blackText wrapFilter snipcss0-4-47-57">
            <p className="snipcss0-5-57-58">
              Student
              <br className="snipcss0-6-58-59" />
              Fares
            </p>
            <div className="specialFareTooltip whiteText snipcss0-5-57-60">
              <p className="font12 latoBold appendBottom5 snipcss0-6-60-61">
                Student Fares
              </p>
              <p className="font11 snipcss0-6-60-62">
                Only students above 12 years of age are eligible for special
                fares and/or additional baggage allowances. Carrying valid
                student ID cards and student visas (where applicable) is
                mandatory, else the passenger may be denied boarding or asked to
                pay for extra baggage.
              </p>
            </div>
          </li>
          <li className="font12 blackText wrapFilter snipcss0-4-47-63">
            <p className="snipcss0-5-63-64">
              Senior Citizen
              <br className="snipcss0-6-64-65" />
              Fares
            </p>
            <div className="specialFareTooltip whiteText snipcss0-5-63-66">
              <p className="font12 latoBold appendBottom5 snipcss0-6-66-67">
                Senior Citizen Fares
              </p>
              <p className="font11 snipcss0-6-66-68">
                Only senior citizens above the age of 60 years can avail this
                special fare. It is mandatory to produce proof of Date of Birth
                at the airport, without which prevailing fares will be charged.
              </p>
            </div>
          </li>
          <li className="font12 blackText wrapFilter snipcss0-4-47-69">
            <p className="snipcss0-5-69-70">
              Doctors &amp; Nurses
              <br className="snipcss0-6-70-71" />
              Fares
            </p>
            <div className="specialFareTooltip whiteText snipcss0-5-69-72">
              <p className="font12 latoBold appendBottom5 snipcss0-6-72-73">
                Doctors &amp; Nurses Fares
              </p>
              <p className="font11 snipcss0-6-72-74">
                Applicable only for medical personnel. It is mandatory to show a
                valid ID at the airport, without which boarding may be denied.
              </p>
            </div>
          </li>
          <li className="font12 blackText wrapFilter isItemDisabled snipcss0-4-47-75">
            <p className="disabled snipcss0-5-75-76">
              Double Seat
              <br className="snipcss0-6-76-77" />
              Fares
            </p>
            <div className="specialFareTooltip whiteText snipcss0-5-75-78">
              <p className="font12 latoBold appendBottom5 snipcss0-6-78-79">
                Fly Safer with Double Seat
              </p>
              <p className="font11 snipcss0-6-78-80">
                Double Seat service is available only for domestic one-way
                economy flights. You can continue to book at the regular fare or
                change your search parameter(s) to avail of this service.
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div className="makeFlex perfectCenter appendleft10 recentSearchGrid snipcss0-2-43-81">
        <span className="font12 latoBold snipcss0-3-81-82">
          Recent Searches:
        </span>
        <ul className="fltRecentSearches snipcss0-3-81-83">
          <li className="snipcss0-4-83-84">
            <a
              className="darkGreyText snipcss0-5-84-85"
              href="https://www.makemytrip.com/flight/search?itinerary=DEL-CJB-02/02/2024&tripType=O&paxType=A-8_C-2_I-2&intl=false&cabinClass=PE&ccde=IN&lang=eng&isGrpBkg=true"
            >
              <p className="font12 appendBottom3 snipcss0-6-85-86">
                New Delhi
                <span className="fltBlueOnewayArrowIcon flightsSprite appendLeft5 appendRight5 snipcss0-7-86-87"></span>
                Coimbatore
              </p>
              <p className="greyText font10 snipcss0-6-85-88">2 Feb 24</p>
            </a>
          </li>
          <li className="snipcss0-4-83-89">
            <a
              className="darkGreyText snipcss0-5-89-90"
              href="https://www.makemytrip.com/flight/search?itinerary=CJB-DEL-02/02/2024&tripType=O&paxType=A-9_C-3_I-3&intl=false&cabinClass=PE&ccde=IN&lang=eng&pft=SC&isGrpBkg=true"
            >
              <p className="font12 appendBottom3 snipcss0-6-90-91">
                Coimbatore
                <span className="fltBlueOnewayArrowIcon flightsSprite appendLeft5 appendRight5 snipcss0-7-91-92"></span>
                New Delhi
              </p>
              <p className="greyText font10 snipcss0-6-90-93">2 Feb 24</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <p data-cy="submit" className="makeFlex vrtlCenter snipcss0-1-1-94">
      <a className="primaryBtn font24 latoBold widgetSearchBtn snipcss0-2-94-95">
        Search
      </a>
    </p>
  </div> */}
{/* </div> */}
{
  false && <Data5.Provider value={flights}><Flights/></Data5.Provider>
}
    </div>
  );
}

export default Aeroplane;