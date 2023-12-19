import React from 'react'

import Slider from "react-slick";
 import "slick-carousel/slick/slick.css"; 
  import "slick-carousel/slick/slick-theme.css";
 
function SimpleSlider3() {
  const settings = {


    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1
  };
  return (
    <div className='carosol' >
    <h2>Handpicked Collections for You</h2>
    <Slider {...settings}>
    <div
  data-cy="dealCarousel8"
  className="slideItem dealCarouselItem snipcss-eA55t"
>
  <div className="makeFlex perfectCenter dealImgWrap appendRight10">
    <img
      data-cy="dealCarouselImg8"
      className="dealCarouselImg"
      alt=""
      src="https://tripmoneycmsimgak.mmtcdn.com/img/Acko_1_a95a85f8c1.png"
      height="68px"
      width="68px"
    />
  </div>
  <div className="slideDesc">
    <p data-cy="dealCarouselMsg8" className="font16 lineHeight18">
      Insurance made easy – Acko
    </p>
  </div>
</div>


    </Slider>
  </div>
  )
}

export default SimpleSlider3