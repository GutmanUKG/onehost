import {Component} from "react";
import Slider from 'react-slick'
import s from './slider_banner.module.scss'
function SliderBanner(props){
    let options = {
        dots:false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:true,
        autoPlay:true
    }
    let data = props.dataSlide

    let renderSlider = data.map((item)=>{
            return(
                <div>
                    <div className={s.item}>
                        <img src={item.img.vps_icon} alt=""/>
                        <div className={s.content}>
                            <h2>
                                {item.title}
                            </h2>
                            {item.text}
                            <a href="#" className={s.btn}></a>
                        </div>
                    </div>
                </div>
            )
            })

    return(
      <div className={s.wrapper_slider}>
          <Slider {...options}>

              {renderSlider}

          </Slider>
      </div>
    )
}
export default SliderBanner