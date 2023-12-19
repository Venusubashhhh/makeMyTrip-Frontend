import React from 'react'
import { useContext } from 'react'
import { Data5 } from './Search'
function Flights() {
const flightdata=useContext(Data5);
console.log(flightdata+'data');
return (
    <div>

<div className="listingCard appendBottom5 snipcss-joiB4">
  <div className="makeFlex hrtlCenter spaceBetween">
    <div className="makeFlex"></div>
  </div>
  <div className="makeFlex spaceBetween">
    <div className="makeFlex">
      <div
        className="makeFlex align-items-center gap-x-10 airline-info-wrapper style-OiHhq"
        id="style-OiHhq"
      >
        <span className="singleairline">
          <span className="arln-logo logo1 style-7s5S6" id="style-7s5S6"></span>
        </span>
        <div>
          <p className="boldFont blackText airlineName">Vistara</p>
          <p className="fliCode">UK 533</p>
        </div>
      </div>
      <div className="fontSize12 darkText clusterTimingOuter"></div>
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
                    <span>11:45</span>
                  </p>
                  <p className="blackText">
                    <font color="#000000">New Delhi</font>
                  </p>
                </div>
                <div className="stop-info flexOne">
                  <p>
                    03
                    <font color="#757575">h</font>
                  </p>
                  <div>
                    <div className="relative fliStopsSep">
                      <p
                        className="fliStopsSepLine style-oH1k4"
                        id="style-oH1k4"
                      ></p>
                    </div>
                    <p className="flightsLayoverInfo">Non stop</p>
                  </div>
                </div>
                <div className="flexOne timeInfoRight">
                  <p className="appendBottom2 flightTimeInfo">
                    <span>14:45</span>
                  </p>
                  <p className="blackText">
                    <font color="#000000">Coimbatore</font>
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
          <button className="grpBkgSelectBtn text-uppercase   clusterBtn">
            SELECT
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

    </div>
  )
}

export default Flights