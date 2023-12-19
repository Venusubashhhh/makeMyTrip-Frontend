import React from 'react'

import Slider from "react-slick";
 import "slick-carousel/slick/slick.css"; 
  import "slick-carousel/slick/slick-theme.css";
 
function SimpleSlider2() {
  const settings = {


    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1
  };
  return (
    <div className='carosol' >
    <h2>Handpicked Collections for You</h2>
    <Slider {...settings}>
    
    <div className="tpDest__slider--itemImg snipcss-a6AP5">
  <div className="hpClcn__slider--itemDesc">
    <span className="hpClcn__slider--itemDescTop">Top 8</span>
    <p className="latoBold font16 lineHeight22 whiteText">
      Stays in &amp; Around Delhi for a Weekend Getaway
    </p>
  </div>
  <img
    src="https://hblimg.mmtcdn.com/content/hubble/img/delhi_hotels_tiow/mmt/activities/m_Le%20ROI%20Floating%20Huts_Eco%20Rooms_Tehri_Uttarakhand_l_550_821.jpg?im=Resize=(400,462)"
  />
</div>
<div className="tpDest__slider--itemImg snipcss-a6AP5">
  <div className="hpClcn__slider--itemDesc">
    <span className="hpClcn__slider--itemDescTop">Top 8</span>
    <p className="latoBold font16 lineHeight22 whiteText">
      Stays in &amp; Around Mumbai for a Weekend Getaway
    </p>
  </div>
  <img
    src="https://hblimg.mmtcdn.com/content/hubble/img/seo_img/mmt/activities/m_Radisson_blu_image_seo_l_550_821.jpg?im=Resize=(400,462)"
  />
</div>


<div className="tpDest__slider--itemImg snipcss-a6AP5">
  <div className="hpClcn__slider--itemDesc">
    <span className="hpClcn__slider--itemDescTop">Top 8</span>
    <p className="latoBold font16 lineHeight22 whiteText">
      Stays in &amp; Around Banglore for a Weekend Getaway
    </p>
  </div>
  <img
    src="https://hblimg.mmtcdn.com/content/hubble/img/bangalore_hotel_tiow/mmt/activities/m_Waterwoods%20Lodges%20&%20Resorts_Kabini_l_550_821.jpg?im=Resize=(400,462)"  />
</div>
   
      
<div className="tpDest__slider--itemImg snipcss-a6AP5">
  <div className="hpClcn__slider--itemDesc">
    <span className="hpClcn__slider--itemDescTop">Top 8</span>
    <p className="latoBold font16 lineHeight22 whiteText">
      Beach Destination
    </p>
  </div>
  <img
    src="https://hblimg.mmtcdn.com/content/hubble/img/collections/m_beach44_p_540_417.jpg?im=Resize=(400,462)"/></div>


      
<div className="tpDest__slider--itemImg snipcss-a6AP5">
  <div className="hpClcn__slider--itemDesc">
    <span className="hpClcn__slider--itemDescTop">Top 8</span>
    <p className="latoBold font16 lineHeight22 whiteText">
    Weekend Getaways
    </p>
  </div>
  <img
    src="


https://hblimg.mmtcdn.com/content/hubble/img/collections/m_weekend44_p_540_417.jpg?im=Resize=(400,462)" /></div>

<div className="tpDest__slider--itemImg snipcss-a6AP5">          
  <div className="hpClcn__slider--itemDesc">
    <span className="hpClcn__slider--itemDescTop">Top 8</span>
    <p className="latoBold font16 lineHeight22 whiteText">
  Hill Stations
    </p>
  </div>
  <img
    src="

    https://hblimg.mmtcdn.com/content/hubble/img/collections/m_hill_stations11_p_540_417.jpg?im=Resize=(400,462)" /></div>
      <div className="tpDest__slider--itemImg snipcss-a6AP5">
  <div className="hpClcn__slider--itemDesc">
    <span className="hpClcn__slider--itemDescTop">Top 8</span>
    <p className="latoBold font16 lineHeight22 whiteText">
Adventure Destination
    </p>
  </div>
  <img
    src="

    https://hblimg.mmtcdn.com/content/hubble/img/Australia/mmt/destination/m_Australia_destination_6_l_361_641.jpg?im=Resize=(400,462)" /></div>


<div className="tpDest__slider--itemImg snipcss-a6AP5">
  <div className="hpClcn__slider--itemDesc">
    <span className="hpClcn__slider--itemDescTop">Top 8</span>
    <p className="latoBold font16 lineHeight22 whiteText">
Heritage Destination
    </p>
  </div>
  <img
    src="

    https://hblimg.mmtcdn.com//content/hubble/img/amritsar/mmt/destination/m_Amritsar_activity_heritage_l_684_1026.jpg?im=Resize=(400,462)" /></div>



  
<div className="tpDest__slider--itemImg snipcss-a6AP5">
  <div className="hpClcn__slider--itemDesc">
    <span className="hpClcn__slider--itemDescTop">Top 8</span>
    <p className="latoBold font16 lineHeight22 whiteText">
Pilgrim Destination
    </p>
  </div>
  <img
    src="
    https://hblimg.mmtcdn.com/content/hubble/img/collections/m_pilgrimage44_p_540_417.jpg?im=Resize=(400,462)" /></div>



    </Slider>
  </div>
  )
}

export default SimpleSlider2