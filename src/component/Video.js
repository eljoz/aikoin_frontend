import React, { Component } from 'react'
import video from '../video/video.mp4'
import "./Video.css"

export class Video extends Component {
    render() {
        return (
            <div className="video-tag">
                <video autoplay="true" loop="true" controls="controls" >
                <source src={video} type="video/mp4"/>

                </video>
            </div>
        )
    }
}

export default Video
