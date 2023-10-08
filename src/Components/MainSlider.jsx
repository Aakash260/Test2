import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const MainSlider=()=> {
    const settings = {
         
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 10000,
        cssEase: "linear"
      };
  return (
     
          <div className=" ">
        
        <div className=" main_crousal">
            <Slider {...settings} className="">
              <div className="">
          <img className="h-57 w-[80%] mx-auto pt-4 " src="https://www.prathamonline.com/updatedbanners/law.png" alt="" />
              </div>
              <div>
              <img className="h-57 w-[80%] mx-auto pt-4 " src="https://www.prathamonline.com/images/clat/1.jpg" alt="" />
              </div>
              <div>
              <img className="h-57 w-[80%] mx-auto pt-4 " src="https://www.prathamonline.com/images/clat/2.jpg" alt="" />
              </div>
              <div>
              <img className="h-57 w-[80%] mx-auto pt-4 " src="https://www.prathamonline.com/images/clat/3.jpg" alt="" />
              </div>
              <div>
              <img className="h-57 w-[80%] mx-auto pt-4 " src="https://www.prathamonline.com/images/clat/4.jpg" alt="" />
              </div>
              <div>
              <img className="h-57 w-[80%] mx-auto pt-4 " src="https://www.prathamonline.com/images/clat/5.jpg" alt="" />
              </div>
              
            </Slider>
        </div>
      </div>
    
  )
}

export default MainSlider