import React, { useRef, useState } from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import { meal } from '../../constants/index'
import './Intro.css';

function Intro() {
  
  const [playVideo, setPlayVideo] = useState(false);
  const videoRef = useRef();
  
  function handleVideo() {
    setPlayVideo(prev => !prev)  
    playVideo ?
      videoRef.current.pause() :
      videoRef.current.play()
  }
  
  return (
    <div className="app__video">
      <video
        src={ meal }
        type='video/mp4'
        ref={videoRef}
        loop
        controls={false}
        muted
      />
      <div className="app__video-overlay flex__center" style={{ cursor: 'pointer' }} onClick={() => handleVideo()}>
        <div
          className="app__video-overlay_circle flex__center" 
        >
          {
            playVideo ?
              <BsPauseFill
                color='#FFF' 
                fontSize={30}
              /> :
              <BsFillPlayFill
                color='#FFF'
                fontSize={30}
              />
          }
          
        </div>
      </div>
    </div>
  )
}

export default Intro;
