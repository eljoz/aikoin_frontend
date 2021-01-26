import React from 'react'
import img from '../../src/img/invest.jpg'
// import img2 from '../../src/img/invest4.jpg'
import video from '../video/video.mp4'

import './Carousel.css'


export default function Carousel() {
    return (
        <div>
                <video autoplay="true" loop="true" controls="controls" 
                style={
                    {
                        position: "absolute",
                        width:"100%",
                        left: "50%",
                        height:"100%",
                        objectFit: "cover",
                        transform: "translate(-50%, -50%)",
                        zIndex: "-1"

                    }
                }>
                
                <source src={video} type="video/mp4"/>

                </video>
            </div>
        
    )
}
