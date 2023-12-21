import React, { createContext, useContext } from 'react'
import { Link } from 'react-router-dom'
import img from'./assets/Screenshot from 2023-12-20 10-21-32.png'
import Sample from './Sample'
import { useState } from 'react'
import { Flight, Signup } from './App'

export const Visiblity=createContext()
function Navbar() {
  const[flagg,setflagg]=useState(false);
const{setflights,sign,setsign}=useContext(Flight)
  return (
    <div style={{backgroundImage:`url(${img})`,
    backgroundSize: 'cover',}}>
<div data-cy="landingContainer" className="landingContainer eng snipcss-4gB7r">
<nav style={{display:'flex'}}> 
<div className="makeFlex hrtlCenter prependTop5 appendBottom50">
  <Link to='/'>
    <a data-cy="mmtLogo" className="mmtLogo makeFlex">
      <picture className="" style={{marginLeft:'70px',width:'100%',marginTop:'-10px'}}>
        <img
          src="https://imgak.mmtcdn.com/pwa_v3/pwa_hotel_assets/header/mmtLogoWhite.png"
          alt="Make My Trip"
        />
      </picture>
    </a>
    </Link>
    <ul className="userSection pushRight" >
    <Link to='/offers'>
      <li
        data-cy="SuperOffersSection_45"
        className="makeFlex perfectCenter makeRelative"
        style={{marginLeft:
          '150px',}}
      >
        <span className="headerOfferIcon__offericonCont">
          <span className="headerOfferIcon--text">%</span>
          <span className="chSprite chDiscount headerOfferIcon"></span>
        </span>
        <div className="flexOne">
          <p className="font12 whiteText latoBlack">Super Offers</p>
          <p
            data-cy="AppDownloadSubText"
            className="font10 userPerText appendTop3"
          >
            Explore great deals &amp; offers
          </p>
        </div>
      </li>
      </Link>
      <Link to='/mybiz'>
      <li
        data-cy="myBiz"
        className="makeFlex perfectCenter makeRelative myBizIntro"
        id="showBizUpgradePopup"
        style={{marginLeft:
          '-40px',width:'250px',marginTop:'-2px'}}
      >
        <span
          data-cy="myBizIcon"
          className="appendRight10 landingSprite myBizIcon"
        >
          &nbsp;
        </span>
        <div className="appendRight5" style={{marginLeft:'10px',  }}>
          <p className="whiteText">
            <span data-cy="myBizText" className="latoBold" style={{fontSize:'14px',fontWeight:'700'}}>
              Introducing My Biz</span>
          </p>
          <p data-cy="myBizSubText" className="font10 whiteText">
            Business Travel Solution
          </p>
        </div>
      </li>
      </Link>
      <Link to='/mytrips'>
      <li data-cy="myTrips" className="makeFlex hrtlCenter lhMyTrips"  style={{marginLeft:
          '0px',marginTop:'0px'}}>
        <span
          data-cy="myTripsIcon"
          className="landingSprite myTripsIcon appendRight10"
        >
          &nbsp;
        </span>
        <div className="makeFlex column flexOne font10 latoBold" style={{marginLeft:'10px'}}>
          <p
            data-cy="MyTripsWidgetText"
            className="whiteText appendBottom3 font11"
          >
            My Trips
          </p>
          <p data-cy="MyTripsWidgetSubText" className="userPerText">
            Manage your bookings
          </p>
        </div>
      </li>
      </Link>
      <Link t0='/accounts'>
        <div style={{backgroundColor:'#008cff',borderRadius:'4px' }}   onClick={()=>setsign(true)}  >
      <li
        data-cy="account"
        className="makeFlex hrtlCenter font10 makeRelative lhUser userLoggedOut"
        style={{marginLeft:
          '10px',marginTop:'0px',height:'43px'}}
          onClick={()=>setsign(true)}
      >
        <span className="userNameIcon whiteText makeFlex perfectCenter latoBlack appendRight10">
          <span data-cy="myIconWhite" className="landingSprite myIconWhite">
            &nbsp;
          </span>
        </span>
        <div className="makeFlex column flexOne whiteText latoBold" style={{marginLeft:'10px', backgroundColor:'#008cff'}} >
          <p data-cy="LoginHeaderText">Login or Create Account</p>
        </div>
      </li>
      </div>
      </Link>
      <li className="makeFlex column makeRelative vrtlCenter conCurLang geoSwitcher"style={{marginTop:'px',backgroundColor:'hsla(0,0%,100%,.15)',borderRadius:'4px',marginLeft:''}}>
        <div>
          <div
            data-cy="LanguageSwitcherWidget"
            className="whiteText makeFlex perfectCenter langSlct"
          >
            <span className="flags flagSprite appendRight5 in"></span>
            <span className="latoBold capText font11">
              <span>IN</span>|<span>eng</span>|<span>inr</span>
            </span>
            <span
              data-cy="switcherDownArrow"
              className="switcherDownArrow appendLeft10"
            style={{marginLeft:'7px'}}
            ></span>
          </div>
        </div>
      </li>
    </ul>
    <div className="headerOuter" style={{
            marginTop:'-50px',paddingTop:'30px'
          }}>
    <span className="headerModuleFedTest2"></span>
    <div className="chHeaderWrapper navOnly">
      <div className="chHeaderContainer">
        <span className="logoContainer">
          <a
            data-cy="Logo_38"
            className="chMmtLogo"
            href="https://www.makemytrip.com/"
          >
            {/* <img
              src="https://imgak.mmtcdn.com/pwa_v3/pwa_hotel_assets/header/logo@2x.png"
              alt="MMT's LOGO"
            /> */}
          </a>
        </span>
        <nav className="">
          <ul className="makeFlex font12 headerIconsGap" style={{paddingTop:'10px'}} >
           <Link to='/flights'>
          <li data-cy="menu_Flights" className="menu_Flights" style={{}}>
              <span data-cy="item-wrapper">
                <a
                  href="https://www.makemytrip.com/flights/"
                  className="headerIcons makeFlex hrtlCenter column active"
                >
                  <span className="headerIconWrapper">
                    <span className="chNavIcon appendBottom2 chSprite chFlights active"></span>
                  </span>
                  <span className="headerIconTextAlignment chNavText darkGreyText">
                    Flights
                  </span>
                </a>
              </span>
            </li>
            </Link>
            <Link to='/hotels'>
            <li data-cy="menu_Hotels" className="menu_Hotels" style={{marginLeft:'-30px',}}>
              <span data-cy="item-wrapper">
                <a
                  className="headerIcons makeFlex hrtlCenter column">
                  <span className="headerIconWrapper">
                    <span className="chNavIcon appendBottom2 chSprite chHotels"></span>
                  </span>
                  <span className="headerIconTextAlignment chNavText darkGreyText">
                    Hotels
                  </span>
                </a>
              </span>
            </li>
            </Link>
            <li data-cy="menu_Homestays" className="menu_Homestays" style={{marginLeft:'-30px',}}>
              <span data-cy="item-wrapper">
                <a
                
                  className="headerIcons makeFlex hrtlCenter column"
                >
                  <span className="headerIconWrapper">
                    <span className="chNavIcon appendBottom2 chSprite chHomestays"></span>
                  </span>
                  <span className="headerIconTextAlignment chNavText darkGreyText">
                    Homestays &amp; Villas
                  </span>
                </a>
              </span>
            </li>
            <li
              data-cy="menu_Holidays"
              className="menu_Holidays removeItemMargin" style={{marginLeft:'-30px',}}
            >
              <span data-cy="item-wrapper">
                <a
                  href="https://www.makemytrip.com/holidays-india/"
                  className="headerIcons makeFlex hrtlCenter column"
                >
                  <span className="headerIconWrapper">
                    <span className="chNavIcon appendBottom2 chSprite chHolidays"></span>
                  </span>
                  <span className="headerIconTextAlignment chNavText darkGreyText">
                    Holiday Packages
                  </span>
                </a>
              </span>
            </li>
            <Link to='/trains'></Link>
            <li data-cy="menu_Trains" className="menu_Trains" style={{marginLeft:'-70px'}}>
              <span data-cy="item-wrapper">
                <a
                  className="headerIcons makeFlex hrtlCenter column"
                >
                  <span className="headerIconWrapper">
                    <span className="chNavIcon appendBottom2 chSprite chTrains"></span>
                  </span>
                  <span className="headerIconTextAlignment chNavText darkGreyText">
                    Trains
                  </span>
                </a>
              </span>
            </li>
            <li data-cy="menu_Buses" className="menu_Buses" style={{marginLeft:'-30px',}}>
              <span data-cy="item-wrapper">
                <a
              
                  className="headerIcons makeFlex hrtlCenter column"
                >
                  <span className="headerIconWrapper">
                    <span className="chNavIcon appendBottom2 chSprite chBuses"></span>
                  </span>
                  <span className="headerIconTextAlignment chNavText darkGreyText">
                    Buses
                  </span>
                </a>
              </span>
            </li>
            <li data-cy="menu_Cabs" className="menu_Cabs" style={{marginLeft:'-30px',}}>
              <span data-cy="item-wrapper">
                <a
              
                  className="headerIcons makeFlex hrtlCenter column"
                >
                  <span className="headerIconWrapper">
                    <span className="chNavIcon appendBottom2 chSprite chCabs"></span>
                  </span>
                  <span className="headerIconTextAlignment chNavText darkGreyText">
                    Cabs
                  </span>
                </a>
              </span>
            </li>
            <li data-cy="menu_Forex" className="menu_Forex" style={{marginLeft:'-45px',}}>
              <span data-cy="item-wrapper">
                <a
                  className="headerIcons makeFlex hrtlCenter column"
                >
                  <span className="headerIconWrapper">
                    <span className="chNavIcon appendBottom2 chSprite chForex"></span>
                  </span>
                  <span className="headerIconTextAlignment chNavText darkGreyText">
                    Forex Currency
                  </span>
                </a>
              </span>
              <span className="font10 latoBold whiteText newTagImage">new</span>
            </li>
            <li data-cy="menu_TravelInsurance" className="menu_TravelInsurance" style={{marginLeft:'-45px'}}>
              <span data-cy="item-wrapper">
                <a
               
                  className="headerIcons makeFlex hrtlCenter column"
                >
                  <span className="headerIconWrapper">
                    <span className="chNavIcon appendBottom2 chSprite chTravelInsurance"></span>
                  </span>
                  <span className="headerIconTextAlignment chNavText darkGreyText">
                    Travel Insurance
                  </span>
                </a>
              </span>
              <span className="font10 latoBold whiteText newTagImage">new</span>
            </li>
          </ul>
        </nav>
        <ul className="makeFlex hrtlCenter font10 blackText">
          <li data-cy="LoginHeader_37" className="font12 makeRelative">
            <div id="loginTrigger" className="makeFlex cursorPointer">
              <span className="userInfoBoxLabel whiteText appendRight10 font10 latoBlack textCenter">
                <span className="chSprite chLoggedOutLogo chMy"></span>
              </span>
              <div className="makeFlex hrtlCenter">
                <div data-cy="account" className="makeFlex spaceBetween column">
                  <span className="latoBold appendBottom2">Login or</span>
                  <span className="latoBold">Create Account</span>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <ul className="makeFlex hrtlCenter">
          <li className="makeFlex hrtlCenter font10 blackText appendLeft20 countryChange">
            <div className="whiteText" data-cy="countryChange">
              <p className="appendBottom3 ctrySelectText">Country</p>
              <p data-cy="CountryDropdown_12" className="makeFlex hrtlCenter">
                <span className="flags flagSprite appendRight3 in"></span>
                <span className="latoBold ctrySelectText">India</span>
                <span className="appendLeft10 arrow arrowDown"></span>
              </p>
            </div>
          </li>
        </ul>
        <ul className="makeFlex hrtlCenter">
          <li className="makeFlex hrtlCenter font10 blackText appendLeft20 countryChange">
            <div data-cy="language-dropdown_141">
              <p className="appendBottom3">Language</p>
              <p className="makeFlex hrtlCenter">
                <span className="latoBold">ENG</span>
                <span className="appendLeft10 appendTop2 arrow arrowDown"></span>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
  </div>
   </nav>
   {flagg && <Visiblity.Provider value={{setflagg}}><Sample /></Visiblity.Provider> }
</div> 

    </div>
  )
}

export default Navbar

