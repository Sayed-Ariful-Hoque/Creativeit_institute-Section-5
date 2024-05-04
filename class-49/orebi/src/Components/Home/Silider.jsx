import React, { useState } from 'react'
import Imges from '../../Layer/Imges'
import Silider1 from "/src/assets/Home/Silider/silider-1.png"
import Slider from '@ant-design/react-slick';
import "slick-carousel/slick/slick.css";

const Silider = () => {

  let [doteActive, setDoteActive] = useState(0)

  var settings = {
    dots: true,
    arrows: false ,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (prev, next) => {
      setDoteActive(next)
    },

    appendDots: dots => (
      <div
        style={{
          position: "absolute",
          left: "10%",
          top: "50%",
          transform: "translateY(-50%)"
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),

    customPaging: i => (
      <div
        style={
         i === doteActive ? {
          padding: "9px 12px 9px 0 ",
          borderRight: "2px solid",
          borderColor: "#262626",
         } : {
          padding: "9px 12px 9px 0 ",
          borderRight: "2px white solid",
          color: "transparent"
         }
        }
      >
        0{i + 1}
      </div>
    )



  };

  return (
    <div>
      <Slider {...settings}>
        <div>
        <Imges src={Silider1} className="w-full" />
        </div>
        <div>
        <Imges src={Silider1} className="w-full" />
        </div>
        <div>
        <Imges src={Silider1} className="w-full" />
        </div>
        
      </Slider>

    </div>
  )
}

export default Silider