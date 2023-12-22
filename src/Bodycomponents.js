import React from 'react'

function Bodycomponents() {
  return (
    

   <>
   <div
  data-cy="tertiaryRowContainer"
  className="choosFrom appendBottom20 snipcss-DiPIc"
>
  <div data-cy="tertiaryRowHeaderContainer" className="choosFrom__header">
    <img
      data-cy="tertiaryRowHeaderIconLeft"
      className="icDoubleDownArrow"
      src="https://promos.makemytrip.com/Growth/Images/B2C/2x/dt_tert_downArrow.png"
      alt="chooseHeaderIcon"
    />
    <span
      data-cy="tertiaryRowHeaderText"
      className="choosFrom__header--text defaultCursor"
    >
      Explore More
    </span>
    <img
      data-cy="tertiaryRowHeaderIconRight"
      className="icDoubleDownArrow"
      src="https://promos.makemytrip.com/Growth/Images/B2C/2x/dt_tert_downArrow.png"
      alt="chooseHeaderIcon"
    />
  </div>
  <div className="choosFrom__wrap" style={{width:'1300px'}}>
    <ul data-cy="tertiaryRowItemsContainer" className="choosFrom__list">
      <li className="choosFrom__list--item" data-cy="tertiaryRowItem_Where2Go">
        <span data-cy="tertiaryRowIcon_Where2Go" className="appendRight12">
          <img
            src="https://promos.makemytrip.com/appfest/2x/icon-wheretogo-23062022.png"
            alt="Where2Go_image"
            id="style-B5foY"
            className="style-B5foY"
          />
        </span>
        <div className="choosFrom__list--itemDesc makeFlex column flexOne">
          <p data-cy="tertiaryRowTitle_Where2Go" className="font14">
            <span>Where2Go</span>
          </p>
        </div>
      </li>
      <li className="choosFrom__list--item" data-cy="tertiaryRowItem_Insurance">
        <span data-cy="tertiaryRowIcon_Insurance" className="appendRight12">
          <img
            src="https://promos.makemytrip.com/appfest/2x/trip-money-1.png"
            alt="Insurance_image"
            id="style-LOC74"
            className="style-LOC74"
          />
        </span>
        <div className="choosFrom__list--itemDesc makeFlex column flexOne">
          <p data-cy="tertiaryRowTitle_Insurance" className="font14">
            <span>Insurance</span>
          </p>
          <span
            data-cy="tertiaryRowSubTitle_For International Trips"
            className="appendTop3 font12"
          >
            For International Trips
          </span>
        </div>
      </li>
      <li
        className="choosFrom__list--item"
        data-cy="tertiaryRowItem_<span class='latoBold blackText font14'>Explore International Flights</span>"
      >
        <span
          data-cy="tertiaryRowIcon_<span class='latoBold blackText font14'>Explore International Flights</span>"
          className="appendRight12 choosFrom__list--itemIcon"
        >
          <img
            src="https://promos.makemytrip.com/Growth/Images/B2C/2x/dt_tert_flights.png"
            alt="<span class='latoBold blackText font14'>Explore International Flights</span>_image"
            id="style-2fqHD"
            className="style-2fqHD"
          />
        </span>
        <div className="choosFrom__list--itemDesc makeFlex column flexOne">
          <p
            data-cy="tertiaryRowTitle_<span class='latoBold blackText font14'>Explore International Flights</span>"
            className="font14"
          >
            <span>
              <span className="latoBold blackText font14">
                Explore International Flights
              </span>
            </span>
          </p>
          <span
            data-cy="tertiaryRowSubTitle_Cheapest Flights to Paris, Bali, Tokyo & more"
            className="appendTop3 font12"
          >
            Cheapest Flights to Paris, Bali, Tokyo &amp; more
          </span>
        </div>
      </li>
      <li className="choosFrom__list--item" data-cy="tertiaryRowItem_MICE">
        <span data-cy="tertiaryRowIcon_MICE" className="appendRight12">
          <img
            src="https://promos.makemytrip.com/images/myBiz/MICE/mice%20icon%20-%20square.png"
            alt="MICE_image"
            id="style-qOorb"
            className="style-qOorb"
          />
        </span>
        <div className="choosFrom__list--itemDesc makeFlex column flexOne">
          <p data-cy="tertiaryRowTitle_MICE" className="font14">
            <span>MICE</span>
          </p>
          <span
            data-cy="tertiaryRowSubTitle_Offsites, Events & Meetings"
            className="appendTop3 font12"
          >
            Offsites, Events &amp; Meetings
          </span>
        </div>
      </li>
      <li
        className="choosFrom__list--item"
        data-cy="tertiaryRowItem_Gift Cards"
      >
        <span data-cy="tertiaryRowIcon_Gift Cards" className="appendRight12">
          <img
            src="https://promos.makemytrip.com/appfest/2x/gift%20card%201.png"
            alt="Gift Cards_image"
            id="style-nMhO7"
            className="style-nMhO7"
          />
        </span>
        <div className="choosFrom__list--itemDesc makeFlex column flexOne">
          <p data-cy="tertiaryRowTitle_Gift Cards" className="font14">
            <span>Gift Cards</span>
          </p>
        </div>
      </li>
    </ul>
  </div>
</div>

   </>
  )
}

export default Bodycomponents