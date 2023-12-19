import React, { useState } from 'react'

function Box() {
    useState()
  return (
    <div>
        <div
  data-cy="flightSW"
  className="fltWidgetSection appendBottom40 primaryTraveler snipcss-L7DoJ"
>
  <div className="makeFlex hrtlCenter">
    <ul className="fswTabs latoRegular darkGreyText ">
      <li data-cy="oneWayTrip" className="selected">
        <span className="tabsCircle appendRight5"></span>
        One Way
      </li>
      <li data-cy="roundTrip" className="">
        <span className="tabsCircle appendRight5"></span>
        Round Trip
      </li>
      <li data-cy="mulitiCityTrip" className="">
        <span className="tabsCircle appendRight5"></span>
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
  <div className="fsw ">
    <div className="fsw_inner returnPersuasion">
      <div className="flt_fsw_inputBox searchCity inactiveWidget ">
        <label htmlFor="fromCity">
          <span className="lbl_input appendBottom10">From</span>
          <input
            data-cy="fromCity"
            id="fromCity"
            type="text"
            className="fsw_inputField lineHeight36 latoBlack font30"
            readOnly=""
            defaultValue="Delhi"
          />
          <p className="code makeRelative" title="DEL, Delhi Airport India">
            <span
              data-cy="defaultFromValue"
              title=""
              className="truncate airPortName "
            >
           
            </span>
          </p>
        </label>
      </div>
      <span className="fltSwipCircle">
        <span className="flightsSprite fltSwipIcon"></span>
      </span>
      <div className="flt_fsw_inputBox searchToCity inactiveWidget ">
        <label htmlFor="toCity">
          <span className="lbl_input appendBottom10">To</span>
          <input
            data-cy="toCity"
            id="toCity"
            type="text"
            className="fsw_inputField lineHeight36 latoBlack font30"
            readOnly=""
            defaultValue="Bengaluru"
          />
          <p
            className="code makeRelative"
            title="BLR, Bengaluru International Airport India"
          >
            <span
              data-cy="defaultToValue"
              title=""
              className="truncate airPortName "
            >
              BLR, Bengaluru International Airport India
            </span>
          </p>
        </label>
      </div>
      <div className="flt_fsw_inputBox dates inactiveWidget ">
        <label htmlFor="departure">
          <span className="lbl_input appendBottom10">Departure</span>
          <input
            data-cy="departure"
            id="departure"
            type="text"
            className="fsw_inputField font20"
            readOnly=""
            defaultValue="Thursday, 14 Dec 2023"
          />
          <p
            data-cy="departureDate"
            className="blackText font20 code lineHeight36"
          >
            <span className="font30 latoBlack">15</span>
            <span>Dec</span>
            <span className="shortYear">23</span>
          </p>
          <p data-cy="departureDay" className="code ">
            Friday
          </p>
        </label>
      </div>
      <div className="flt_fsw_inputBox dates reDates inactiveWidget ">
        <div className="returnPersuasionTooltip hide">
          <p>
            Return fares may hike due to high demand. Book now using myBiz
            special fare &amp; cancel/change date for FREE later if plan changes
          </p>
        </div>
        <div data-cy="returnArea">
          <label>
            <span className="lbl_input appendBottom10">Return</span>
            <p
              data-cy="returnDefaultText"
              className="latoBlack font12 greyText lineHeight16"
            >
              Tap to add a return date for bigger discounts
            </p>
          </label>
        </div>
      </div>
      <div
        data-cy="flightTraveller"
        className="flt_fsw_inputBox flightTravllers inactiveWidget "
      >
        <label htmlFor="travellers">
          <span className="lbl_input appendBottom5">
            Travellers &amp; Class
          </span>
          <input
            data-cy="travellers"
            id="travellers"
            type="text"
            className="fsw_inputField font30 latoBlack"
            readOnly=""
            defaultValue="0 Infant, 0 Adult, 1 Children"
          />
          <p
            data-cy="travellerText"
            className="blackText font20 code lineHeight36"
          >
            <span className="appendRight10">
              <span className="font30 latoBlack">1&nbsp;</span>
              Traveller
            </span>
          </p>
          <p className="">Economy/Premium Economy</p>
        </label>
        <div className="introGBFlt">
          <div className="introGBFltTooltip whiteText">
            Save on bookings with more than 9 travellers
          </div>
        </div>
      </div>
    </div>
    <div className="makeFlex hrtlCenter appendBottom20 flightFare">
      <div className="makeFlex hrtlCenter">
        <span className="font12 latoBold noShrink appendRight5 selectFareText">
          Select A
          <br />
          Fare Type:
        </span>
        <ul className="specialFareNew">
          <li className="font12 blackText wrapFilter activeItem ">
            <p className="">
              Regular
              <br />
              Fares
            </p>
          </li>
          <li className="font12 blackText wrapFilter  ">
            <p className="">
              Armed Forces
              <br />
              Fares
            </p>
            <div className="specialFareTooltip whiteText">
              <p className="font12 latoBold appendBottom5">
                Armed Forces Fares
              </p>
              <p className="font11">
                Applicable for serving and retired personnel of Armed Forces and
                Paramilitary Forces, their recognised dependants like spouses
                and children, and war widows. It is mandatory to show a valid ID
                or dependant card at the airport, without which boarding might
                be denied.
              </p>
            </div>
          </li>
          <li className="font12 blackText wrapFilter  ">
            <p className="">
              Student
              <br />
              Fares
            </p>
            <div className="specialFareTooltip whiteText">
              <p className="font12 latoBold appendBottom5">Student Fares</p>
              <p className="font11">
                Only students above 12 years of age are eligible for special
                fares and/or additional baggage allowances. Carrying valid
                student ID cards and student visas (where applicable) is
                mandatory, else the passenger may be denied boarding or asked to
                pay for extra baggage.
              </p>
            </div>
          </li>
          <li className="font12 blackText wrapFilter  ">
            <p className="">
              Senior Citizen
              <br />
              Fares
            </p>
            <div className="specialFareTooltip whiteText">
              <p className="font12 latoBold appendBottom5">
                Senior Citizen Fares
              </p>
              <p className="font11">
                Only senior citizens above the age of 60 years can avail this
                special fare. It is mandatory to produce proof of Date of Birth
                at the airport, without which prevailing fares will be charged.
              </p>
            </div>
          </li>
          <li className="font12 blackText wrapFilter  ">
            <p className="">
              Doctors &amp; Nurses
              <br />
              Fares
            </p>
            <div className="specialFareTooltip whiteText">
              <p className="font12 latoBold appendBottom5">
                Doctors &amp; Nurses Fares
              </p>
              <p className="font11">
                Applicable only for medical personnel. It is mandatory to show a
                valid ID at the airport, without which boarding may be denied.
              </p>
            </div>
          </li>
          <li className="font12 blackText wrapFilter  ">
            <p className="">
              Double Seat
              <br />
              Fares
            </p>
            <div className="specialFareTooltip whiteText">
              <p className="font12 latoBold appendBottom5">
                Fly Safer with Double Seat
              </p>
              <p className="font11">
                Step up physical distancing by booking two or three adjacent
                seats for one traveller. Opt from ‘Double/ Entire Row’ by Indigo
                or ‘GoMore’ service by GoAir - available only for domestic
                one-way economy class bookings.
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div className="makeFlex perfectCenter appendleft10 recentSearchGrid ">
        <span className="font12 latoBold">Trending Searches:</span>
        <ul className="fltRecentSearches">
          <li>
            <a className="darkGreyText">
              <p className="font12 appendBottom3">
                Dubai
                <span className="fltBlueOnewayArrowIcon flightsSprite appendLeft5 appendRight5"></span>
                Delhi
              </p>
            </a>
          </li>
          <li>
            <a className="darkGreyText">
              <p className="font12 appendBottom3">
                Chennai
                <span className="fltBlueOnewayArrowIcon flightsSprite appendLeft5 appendRight5"></span>
                Hyderabad
              </p>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <p data-cy="submit" className="makeFlex vrtlCenter ">
      <a className="primaryBtn font24 latoBold widgetSearchBtn ">Search</a>
    </p>
  </div>
</div>

    </div>
  )
}

export default Box