import React, { Component } from 'react'
import { Carousel } from 'antd'
import 'antd/lib/carousel/style/css'
import './heroStyle.css'

class hero extends Component {
  render() {
    return (
      <Carousel autoplay>
        <div className='hero-item' style={{ background: 'url(https://picsum.photos/500/110/?gravity=center&image=0)' }}></div>
        <div className='hero-item' style={{ background: 'url(https://picsum.photos/500/110/?gravity=center&image=1)' }}></div>
        <div className='hero-item' style={{ background: 'url(https://picsum.photos/500/110/?gravity=center&image=2)' }}></div>
        <div className='hero-item' style={{ background: 'url(https://picsum.photos/500/110/?gravity=center&image=3)' }}></div>
        <div className='hero-item' style={{ background: 'url(https://picsum.photos/500/110/?gravity=center&image=4)' }}></div>
      </Carousel>
    )
  }
}

export default hero