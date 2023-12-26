import React, { useEffect } from 'react'
import { useContext } from 'react'
import { Data5 } from './Search';
import { Flight } from './App';
import { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { Flightcontext } from './App';

function Flights() {
const[flightlist,setflightlist]=useState([]);
const[flightlist2,setflightlist2]=useState([]);
const [sliderValue, setSliderValue] = useState(10000);
const[flag1,setflag1]=useState(false)
const {from,setfrom,to,setto,flightname,setflightname,arrtime,setarrtime,deptime,setdeptime,price,setprice,durationh,setdurationh,durationm,setdurationm,logo,setlogo,date,setdate}=useContext(Flightcontext)
const[depature,setdepature]=([]);
const[arrival,setarrival]=([]);
  const [checkboxes, setCheckboxes] = useState({
    option1: false,
    option2: false,
    option3: false,
    option4:false,
    // Add more options as needed
  });



  const {flights}=useContext(Flight);
  useEffect(()=>{
  // setflightlist(flights)
 
  setflightlist(flights);
  setflightlist2(flights);
  
  },[flights]);
  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckboxes({ ...checkboxes, [name]: checked });
  };
  const handleSliderChange = (event, newValue) => {
    setSliderValue(newValue);
  };

  console.log('flights',flightlist)
  useEffect(()=>{
    setflightlist(flightlist2);
  console.log(flightlist)
    const value=flightlist.map((obj)=>{
      if(  obj?.price?.total > sliderValue)
      return obj
      setflightlist(flightlist2);
    })
    setflightlist(value);

  
  },[sliderValue])
 useEffect(()=>{
 setflightlist(flightlist2);
  console.log(checkboxes)
    if(checkboxes.option1)
    {
      const value=flightlist.map((obj)=>{
        if(  obj?.stop=='Non Stop')
        return obj
      })
      setflightlist(value);
    }
  

    if(checkboxes.option2)
    {
      const value=flightlist.map((obj)=>{
        if(  obj?.stop=='1 stop')
        return obj
      })
      setflightlist(value);
    }

    if(checkboxes.option3)
    {
      const value=flightlist.map((obj)=>{
        if(   parseInt(obj?.arrival?.time.split(':')[0], 10) >= 12)
        return obj
      })
      setflightlist(value);
    }

  
    if(checkboxes.option4)
    {
      const value=flightlist.map((obj)=>{
        if(   parseInt(obj?.arrival?.time.split(':')[0], 10) < 12)
        return obj
      })
      setflightlist(value); 
    }

    
  
}
,[checkboxes])
return (
  <div style={{display:'inline-flex',marginLeft:'80px'}}>

  <div style={{backgroundColor:'white',width:'300px',paddingTop:'30px'}}>
     <div style={{marginLeft:'30px',}}>
     <p className="filtersHeading appendBottom15">Popular Filters</p>
     
      <FormControlLabel
        control={
          <Checkbox
            checked={checkboxes.option1}
            onChange={handleCheckboxChange}
            name="option1"
          />
        }
        label="Non Stop"
      />
      <br />
      <FormControlLabel
        control={
          <Checkbox
            checked={checkboxes.option2}
            onChange={handleCheckboxChange}
            name="option2"
          />
        }
        label="1 Stop"
      />
      <br />
      <FormControlLabel
        control={
          <Checkbox
            checked={checkboxes.option3}
            onChange={handleCheckboxChange}
            name="option3"
          />
        }
        label="AfterNoon Depature"
      />
         <br />
       <FormControlLabel
        control={
          <Checkbox
            checked={checkboxes.option4}
            onChange={handleCheckboxChange}
            name="option4"
          />
        }
        label="Morning Depature"
      />
<p className="filtersHeading appendBottom15">One way slider</p>
<div style={{ width: 230 }}>
      <Typography id="mui-slider" gutterBottom>
      
      </Typography>
      <Slider
        aria-labelledby="mui-slider"
        value={sliderValue}
        onChange={handleSliderChange}
        valueLabelDisplay="auto"
        min={10000}
        max={500000}
      />
      <Typography>
        Value: {sliderValue}
      </Typography>
    </div>
    </div>
      {/* Add more checkboxes using FormControlLabel */}
     
      <div className="filtersOuter snipcss-5RcnG">
  <p className="filtersHeading appendBottom15">Depature at New Delhi</p>
  <div>
    <div className="timeSlotsOuter">
      <div className="appendBottom12 filterTimeSlots snipcss0-0-0-1">
        <span
          className="appendBottom2 checkBlockIcon snipcss0-1-1-2 style-bqPoi"
          id="style-bqPoi"
        ></span>
        <div className="boldFont snipcss0-1-1-3">
          Before
          <b className="snipcss0-2-3-4">6</b>
          AM
        </div>
      </div>
      <div className="appendBottom12 filterTimeSlots ">
        <span
          className="appendBottom2 checkBlockIcon style-6qYEa"
          id="style-6qYEa"
        ></span>
        <div className="boldFont">
          <b>6</b>
          AM -<b>12</b>
          PM
        </div>
      </div>
      <div className="appendBottom12 filterTimeSlots ">
        <span
          className="appendBottom2 checkBlockIcon style-V8VIx"
          id="style-V8VIx"
        ></span>
        <div className="boldFont">
          <b>12</b>
          PM -<b>6</b>
          PM
        </div>
      </div>
      <div className="appendBottom12 filterTimeSlots ">
        <span
          className="appendBottom2 checkBlockIcon style-AhKaE"
          id="style-AhKaE"
        ></span>
        <div className="boldFont">
          After
          <b>6</b>
          PM
        </div>
      </div>
    </div>
  </div>
</div>

<div className="filtersOuter snipcss-5RcnG">
  <p className="filtersHeading appendBottom15">Arrival at New Delhi</p>
  <div>
    <div className="timeSlotsOuter">
      <div className="appendBottom12 filterTimeSlots snipcss0-0-0-1">
        <span
          className="appendBottom2 checkBlockIcon snipcss0-1-1-2 style-bqPoi"
          id="style-bqPoi"
        ></span>
        <div className="boldFont snipcss0-1-1-3">
          Before
          <b className="snipcss0-2-3-4">6</b>
          AM
        </div>
      </div>
      <div className="appendBottom12 filterTimeSlots ">
        <span
          className="appendBottom2 checkBlockIcon style-6qYEa"
          id="style-6qYEa"
        ></span>
        <div className="boldFont">
          <b>6</b>
          AM -<b>12</b>
          PM
        </div>
      </div>
      <div className="appendBottom12 filterTimeSlots ">
        <span
          className="appendBottom2 checkBlockIcon style-V8VIx"
          id="style-V8VIx"
        ></span>
        <div className="boldFont">
          <b>12</b>
          PM -<b>6</b>
          PM
        </div>
      </div>
      <div className="appendBottom12 filterTimeSlots ">
        <span
          className="appendBottom2 checkBlockIcon style-AhKaE"
          id="style-AhKaE"
        ></span>
        <div className="boldFont">
          After
          <b>6</b>
          PM
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
    <div style={{marginLeft:'30px'}}>
      
{flightlist.map((data,i)=>{

if (data==undefined) {
  return null; // Skip rendering if data is undefined
}

return (
  

  


<div className="listingCard appendBottom5 snipcss-joiB4" style={{width:'800px'}} key={i}>
  <div className="makeFlex hrtlCenter spaceBetween">
    <div className="makeFlex"></div>
  </div>
  <div className="makeFlex spaceBetween">
    <div className="makeFlex">
      <div
        className="makeFlex align-items-center gap-x-10 airline-info-wrapper style-OiHhq"
        id="style-OiHhq">
        <span className="singleairline">
<img src={data.airline.logo} style={{height:'35px'}}></img>
        </span>
        <div>
          <p className="boldFont blackText airlineName">{data?.airline?.name}</p>
          <p className="fliCode">UK 533</p>
        </div>
      </div>
      <div className="fontSize12 darkText clusterTimingOuter">



      </div>
      <div className="timingOptionOuter">
        <label
          className="not-radio  style-9sR5l"
          htmlFor="jrnyKey_0_e6e19444-b59c-41c8-8a5d-4231f67eeeef"
          id="style-9sR5l"
        >
          <div className="timingOption">
            <div className="makeFlex">
              <div className="makeFlex fontSize12 flexOne gap-x-10">
                <div className="flexOne timeInfoLeft">
                  <p className="appendBottom2 flightTimeInfo">
                    <span>{data?.arrival?.time}</span>
                  </p>
                  <p className="blackText">
                    <font color="#000000">{data?.arrival?.city}</font>
                  </p>
                </div>
                <div className="stop-info flexOne">
                  <p>
                  {data?.duration?.hours}
                    <font color="#757575">h</font>
                    {data?.duration?.minutes}
                  </p>
                  <div>
                    <div className="relative fliStopsSep">
                      <p
                        className="fliStopsSepLine style-oH1k4"
                        id="style-oH1k4"
                      ></p>
                    </div>
                    <p className="flightsLayoverInfo">{data?.stop}</p>
                  </div>
                </div>
                <div className="flexOne timeInfoRight">
                  <p className="appendBottom2 flightTimeInfo">
                    {data?.departure?.time}
                  </p>
                  <p className="blackText">
                 {data?.departure?.city}
                  </p>
                </div>
                <div className="flexOne timeInfoRight">
                <p className="appendBottom2 flightTimeInfo" style={{marginLeft:'40px'}}>
                ₹{data?.price?.total}
                  </p>
                </div>
                
              </div>
            </div>
          </div>
        </label>
      </div>
    </div>
    <div className="priceSection ">
      <div className="makeFlex top gap-x-10">
        <div className="textRight flexOne style-RL6GK" id="style-RL6GK">
          <div className="blackText fontSize18 blackFont white-space-no-wrap clusterViewPrice"></div>
        </div>
        <div className="pull-right make_relative">
          <button className="grpBkgSelectBtn text-uppercase   clusterBtn" onClick={()=>{setflag1(!flag1)
          setarrtime(data?.arrival?.time)
          setdeptime(data?.departure?.time)
          setfrom(data?.arrival?.city)
          setto(data?.departure?.city)
          setflightname(data?.airline.name)
          setprice(data?.price?.total)
          setlogo(data?.airline?.logo)
          setdurationh(data?.duration?.hours)
          setdurationm(data?.duration?.minutes);
          }}>
        Book
          </button>
        </div>
      </div>
    </div>
  </div>
  <p
    className="alertMsg appendBottom10 appendTop10 style-xlpHb"
    id="style-xlpHb"
  >
    Get Rs 250 off using MMTBONUS* &amp; complimentary meal on this flight
  </p>
  <div className="makeFlex spaceBtwCenter fontSize12 card-footer-v2">
    <div></div>
    <span className="linkText ctaLink viewFltDtlsCta">View Flight Details</span>
  </div>
</div>
);
})}

    </div>
    {flag1 &&
    <div className="fareFamilyOverlay fareFamilyPopupWrapper snipcss-xhzHn">
  <div className="ffTopHeader">
    <div className="ffTopHeaderTitle">
      <p className="fontSize20 blackText makeFlex hrtlCenter">
        <b>
          <font color="#007E7D">2 FARE OPTIONS</font>
          available for your trip.
        </b>
      </p>
      <span className="multifareCross" onClick={()=>setflag1(false)}></span>
    </div>
  </div>
  <div className="appendTop20 ffWrapper flexColumn wdth100 scrollHr">
    <div className="wdth100">
      <div className="paddingLR30"></div>
      <div className="appendBottom30">
        <div className="paddingLR30">
          <div className="makeFlex darkText paddingBottom10">
            <span>
              <span className="boldFont fontSize16">{from} → {to}</span>
              <span className="padding-10 inlineB verticalAlign">
                <span className="singleairline">
                  <span
                    className="arln-logo logo1 style-Sp6fP"
                    id="style-Sp6fP"
                  ></span>
                </span>
              </span>
              <span className="mediumBoldFont">
               {flightname} · Departure at {deptime}- Arrival at {arrtime}
              </span>
            </span>
          </div>
        </div>
        <div className="paddinBottom4"></div>
        <div className="">
          <div className="glider-contain">
            <div id={10} className="glider">
              <div className="glider-track style-y8aBL" id="style-y8aBL">
                <div
                  className="fareFamilyCardWrapper cta-wrapper glider-slide active visible left-1 style-VbadD"
                  data-gslide={0}
                  id="style-VbadD"
                >
                  <div
                    className="ffCardHeading makeFlex relative style-w1SoE"
                    id="style-w1SoE"
                  >
                    <div>
                      <p>
                        <span className="fontSize18 blackFont appendRight5">
                          ₹ {price}
                        </span>
                        <span className="fontSize12">per adult</span>
                      </p>
                      <p className="fontSize12 capText">Business Value</p>
                    </div>
                  </div>
                  <div className="ffCardBody ">
                    <p className="fontSize12 boldFont appendBottom8">
                      <b>Baggage</b>
                    </p>
                    <ul className="ffCardList">
                      <li>
                        <img
                          className="bgProperties icon14 appendRight5"
                          src="https://imgak.mmtcdn.com/flights/assets/media/dt/common/multifare/included.png"
                          alt="iconURL"
                        />
                        <span className="blackText fontSize12">
                          12 Kgs Cabin Baggage
                        </span>
                      </li>
                      <li>
                        <img
                          className="bgProperties icon14 appendRight5"
                          src="https://imgak.mmtcdn.com/flights/assets/media/dt/common/multifare/included.png"
                          alt="iconURL"
                        />
                        <span className="blackText fontSize12">
                          30 Kgs Check-in Baggage
                        </span>
                      </li>
                    </ul>
                    <p className="fontSize12 boldFont appendBottom8">
                      <b>Flexibility</b>
                    </p>
                    <ul className="ffCardList">
                      <li>
                        <img
                          className="bgProperties icon14 appendRight5"
                          src="https://imgak.mmtcdn.com/flights/assets/media/dt/common/multifare/partial_inclusion.png"
                          alt="iconURL"
                        />
                        <span className="blackText fontSize12">
                          Cancellation fees apply
                        </span>
                      </li>
                      <li>
                        <img
                          className="bgProperties icon14 appendRight5"
                          src="https://imgak.mmtcdn.com/flights/assets/media/dt/common/multifare/partial_inclusion.png"
                          alt="iconURL"
                        />
                        <span className="blackText fontSize12">
                          Date Change fees apply
                        </span>
                      </li>
                    </ul>
                    <p className="fontSize12 boldFont appendBottom8">
                      <b>Seats, Meals &amp; More</b>
                    </p>
                    <ul className="ffCardList">
                      <li>
                        <img
                          className="bgProperties icon14 appendRight5"
                          src="https://imgak.mmtcdn.com/flights/assets/media/dt/common/multifare/not_included.png"
                          alt="iconURL"
                        />
                        <span className="blackText fontSize12">
                          <font color="#757575">
                            Seat information not available
                          </font>
                        </span>
                      </li>
                      <li>
                        <img
                          className="bgProperties icon14 appendRight5"
                          src="https://imgak.mmtcdn.com/flights/assets/media/dt/common/multifare/not_included.png"
                          alt="iconURL"
                        />
                        <span className="blackText fontSize12">
                          <font color="#757575">
                            Meals information not available
                          </font>
                        </span>
                      </li>
                    </ul>
                    <div className="bottomPersuasions"></div>
                  </div>
                  <div className="ffCardFooter style-ID5yL" id="style-ID5yL">
                    <div className="makeFlex spaceBetween center cta-container">
                      <button
                        type="button"
                        className="lato-black button buttonSecondry buttonBig fontSize14 ffSpinBtnWrapper"
                      >
                        LOCK PRICE
                      </button>
 <Link to='/booking'>                 <button
                        type="button"
                        className="lato-black button buttonPrimary buttonBig fontSize14"
                      > 
                        BOOK NOW
                      </button></Link>   
                    </div>
                  </div>
                </div>
                <div
                  className="fareFamilyCardWrapper cta-wrapper glider-slide center visible style-t7XIj"
                  data-gslide={1}
                  id="style-t7XIj"
                >
                  <div
                    className="ffCardHeading makeFlex relative style-ik36X"
                    id="style-ik36X"
                  >
                    <div>
                      <p>
                        <span className="fontSize18 blackFont appendRight5">
                          ₹ {price+3000}
                        </span>
                        <span className="fontSize12">per adult</span>
                      </p>
                      <p className="fontSize12 capText">Business Standard</p>
                    </div>
                  </div>
                  <div className="ffCardBody ">
                    <p className="fontSize12 boldFont appendBottom8">
                      <b>Baggage</b>
                    </p>
                    <ul className="ffCardList">
                      <li>
                        <img
                          className="bgProperties icon14 appendRight5"
                          src="https://imgak.mmtcdn.com/flights/assets/media/dt/common/multifare/included.png"
                          alt="iconURL"
                        />
                        <span className="blackText fontSize12">
                          12 Kgs Cabin Baggage
                        </span>
                      </li>
                      <li>
                        <img
                          className="bgProperties icon14 appendRight5"
                          src="https://imgak.mmtcdn.com/flights/assets/media/dt/common/multifare/included.png"
                          alt="iconURL"
                        />
                        <span className="blackText fontSize12">
                          35 Kgs Check-in Baggage
                        </span>
                      </li>
                    </ul>
                    <p className="fontSize12 boldFont appendBottom8">
                      <b>Flexibility</b>
                    </p>
                    <ul className="ffCardList">
                      <li>
                        <img
                          className="bgProperties icon14 appendRight5"
                          src="https://imgak.mmtcdn.com/flights/assets/media/dt/common/multifare/partial_inclusion.png"
                          alt="iconURL"
                        />
                        <span className="blackText fontSize12">
                          Cancellation fees apply
                        </span>
                      </li>
                      <li>
                        <img
                          className="bgProperties icon14 appendRight5"
                          src="https://imgak.mmtcdn.com/flights/assets/media/dt/common/multifare/partial_inclusion.png"
                          alt="iconURL"
                        />
                        <span className="blackText fontSize12">
                          Date Change fees apply
                        </span>
                      </li>
                    </ul>
                    <p className="fontSize12 boldFont appendBottom8">
                      <b>Seats, Meals &amp; More</b>
                    </p>
                    <ul className="ffCardList">
                      <li>
                        <img
                          className="bgProperties icon14 appendRight5"
                          src="https://imgak.mmtcdn.com/flights/assets/media/dt/common/multifare/not_included.png"
                          alt="iconURL"
                        />
                        <span className="blackText fontSize12">
                          <font color="#757575">
                            Seat information not available
                          </font>
                        </span>
                      </li>
                      <li>
                        <img
                          className="bgProperties icon14 appendRight5"
                          src="https://imgak.mmtcdn.com/flights/assets/media/dt/common/multifare/not_included.png"
                          alt="iconURL"
                        />
                        <span className="blackText fontSize12">
                          <font color="#757575">
                            Meals information not available
                          </font>
                        </span>
                      </li>
                    </ul>
                    <div className="bottomPersuasions"></div>
                  </div>
                  <div className="ffCardFooter style-GyHnO" id="style-GyHnO">
                    <div className="makeFlex spaceBetween center cta-container">
                      <button
                        type="button"
                        className="lato-black button buttonSecondry buttonBig fontSize14 ffSpinBtnWrapper"
                      >
                        LOCK PRICE
                      </button>
                      <button
                        type="button"
                        className="lato-black button buttonPrimary buttonBig fontSize14"
                      >
                        BOOK NOW
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
}

    </div>
  )
}

export default Flights