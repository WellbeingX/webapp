import React, { Component } from 'react'
import Slider from 'react-slick'
import ImageGuardian from '../../assets/images/home/the_guardian_logo.png';
import ImageZinc from '../../assets/images/home/zinc.png';
import {Image} from 'semantic-ui-react'

export default class AutoPlayMethods extends Component {
  constructor(props) {
    super(props)
    this.play = this.play.bind(this)
    this.pause = this.pause.bind(this)
  }
  play() {
    this.slider.slickPlay()
  }
  pause() {
    this.slider.slickPause()
  }
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000
    };
    return (
      <div>
        <Slider ref={slider => this.slider = slider} {...settings}>
          <div>
            <h3 style={{opacity:.6, fontSize:'.5em', textAlign:'center', textTransform:'uppercase', width:200, margin:'auto', marginTop:20, marginBottom:20 }}>As featured in </h3>
            <Image src={ImageGuardian} centered style={{ width:120, height:50,marginBottom:20}}/>

          </div>
          <div>
            <h3 style={{opacity:.6, fontSize:'.5em', textAlign:'center', textTransform:'uppercase', width:200, margin:'auto', marginTop:20, marginBottom:20 }}>A Zinc company</h3>
            <Image src={ImageZinc} centered style={{ width:60, height:40,marginBottom:20}}/>

          </div>
        </Slider>
      </div>
    );
  }
}
