import React from 'react'

import Slider from "react-slick";
 import "slick-carousel/slick/slick.css"; 
  import "slick-carousel/slick/slick-theme.css";
 
function SimpleSlider() {
  const settings = {


    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1
  };
  return (
    <div className='carosol' style={{marginTop:'50px',backgroundColor:'white'}}>
    <h2> Unlock Lesser-Known Wonders of India

</h2>
    <Slider {...settings}>
    
      <div className="tpDest__slider--itemImg snipcss-a6AP5">
  <div className="tpDest__slider--itemDesc">
    <p className="latoBold font16 lineHeight22 whiteText">
      Queen of Satpura Pachmarhi
    </p>
  </div>
  <img
    src="https://hblimg.mmtcdn.com//content/hubble/img/narkanda/mmt/destination/m_Narkanda_l_372_902.jpg?im=Resize=(400,462)"
    alt="Queen of Satpura Pachmarhi"
   
  />
</div>

     
      
<div className="tpDest__slider--itemImg snipcss-a6AP5">
  <div className="tpDest__slider--itemDesc">
    <p className="latoBold font16 lineHeight22 whiteText">
      Queen of Satpura Pachmarhi
    </p>
  </div>
  <img src='https://hblimg.mmtcdn.com//content/hubble/img/yercaud/mmt/destination/m_destination-yercaud-landscape_l_400_640.jpg?im=Resize=(400,462)' alt="Description"/>

</div>
      
<div className="tpDest__slider--itemImg snipcss-a6AP5">
  <div className="tpDest__slider--itemDesc">
    <p className="latoBold font16 lineHeight22 whiteText">
      Queen of Satpura Pachmarhi
    </p>
  </div>
        <img src='https://hblimg.mmtcdn.com//content/hubble/img/dooars/mmt/destination/m_Dooars_l_457_685.jpg?im=Resize=(400,462)' alt="Description"/> 
      </div>
      <div className="tpDest__slider--itemImg snipcss-a6AP5">
  <div className="tpDest__slider--itemDesc">
    <p className="latoBold font16 lineHeight22 whiteText">
      Queen of Satpura Pachmarhi
    </p>
  </div>
        <img src='https://hblimg.mmtcdn.com//content/hubble/img/saputara/mmt/destination/m_destination-saputara-landscape_l_400_640.jpg?im=Resize=(400,462)' alt="Description"/>
      </div>
      <div className="tpDest__slider--itemImg snipcss-a6AP5">
  <div className="tpDest__slider--itemDesc">
    <p className="latoBold font16 lineHeight22 whiteText">
      Queen of Satpura Pachmarhi
    </p>
  </div>
      <img src='https://hblimg.mmtcdn.com//content/hubble/img/dhanaulti/mmt/destination/m_Destination_Dhanaulti_l_534_801.jpg?im=Resize=(400,462)' alt="Description"/>
      </div>
      <div className="tpDest__slider--itemImg snipcss-a6AP5">
  <div className="tpDest__slider--itemDesc">
    <p className="latoBold font16 lineHeight22 whiteText">
      Queen of Satpura Pachmarhi
    </p>
  </div>
      <img src='https://hblimg.mmtcdn.com//content/hubble/img/mandarmani/mmt/destination/m_destination-mandarmoni-landscape_l_400_640.jpg?im=Resize=(400,462)' alt="Description"/>
      </div>
      <div className="tpDest__slider--itemImg snipcss-a6AP5">
  <div className="tpDest__slider--itemDesc">
    <p className="latoBold font16 lineHeight22 whiteText">
      Queen of Satpura Pachmarhi
    </p>
  </div>
      <img src='https://hblimg.mmtcdn.com//content/hubble/img/malvan/mmt/destination/m_Malvan_l_636_847.jpg?im=Resize=(400,462)' alt="Description"/>
      </div>
      <div className="tpDest__slider--itemImg snipcss-a6AP5">
  <div className="tpDest__slider--itemDesc">
    <p className="latoBold font16 lineHeight22 whiteText">
      Queen of Satpura Pachmarhi
    </p>
  </div>
      <img src='https://hblimg.mmtcdn.com//content/hubble/img/yelagiri/mmt/destination/m_destination_yelagiri_landscape_l_340_544.jpg?im=Resize=(400,462)' alt="Description"/>
      </div>
      <div className="tpDest__slider--itemImg snipcss-a6AP5">
  <div className="tpDest__slider--itemDesc">
    <p className="latoBold font16 lineHeight22 whiteText">
      Queen of Satpura Pachmarhi
    </p>
  </div>
      <img src='https://hblimg.mmtcdn.com//content/hubble/img/araku/mmt/destination/m_destination_Araku%20Valley_landscape_l_400_640.jpg?im=Resize=(400,462)' alt="Description"/>
      </div>
      <div className="tpDest__slider--itemImg snipcss-a6AP5">
  <div className="tpDest__slider--itemDesc">
    <p className="latoBold font16 lineHeight22 whiteText">
      Queen of Satpura Pachmarhi
    </p>
  </div>
      <img src='https://hblimg.mmtcdn.com//content/hubble/img/sasan/mmt/destination/m_destination_sasan_gir_l_400_640.jpg?im=Resize=(400,462)' alt="Description"/>
      </div>
      <div className="tpDest__slider--itemImg snipcss-a6AP5">
  <div className="tpDest__slider--itemDesc">
    <p className="latoBold font16 lineHeight22 whiteText">
      Queen of Satpura Pachmarhi
    </p>
  </div>
      <img src='https://hblimg.mmtcdn.com//content/hubble/img/udupi/mmt/destination/m_destination-udupi-landscape_l_400_640.jpg?im=Resize=(400,462)' alt="Description"/>
      </div>
    </Slider>
  </div>
  )
}

export default SimpleSlider