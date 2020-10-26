import React from "react";
import ReactAudioPlayer from 'react-audio-player';
import m from './Music.module.css'

const Music = (props) => {
    return (
        <div className={m.musicPlayer}>
        <ReactAudioPlayer
            src=""
            autoPlay
            controls
            controlsList
        /></div>

    )
}

export default Music;