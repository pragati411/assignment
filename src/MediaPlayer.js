import React, { useEffect, useRef, useState } from 'react';

import { Play, Pause } from 'react-feather';

import VisuallyHidden from './VisuallyHidden'

function MediaPlayer({ src }) {
  

  const [isPlaying, setIsPlaying] = useState(false)
  const soundRef = useRef();
  useEffect(()=> {
    if(isPlaying){
      soundRef.current.play()
    }
    else{
      soundRef.current.pause()
    }
  }, [isPlaying])
  

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };
  document.addEventListener('keydown', (e) => {
    if (e.key === 32) { this.ref.player.pause(); }
  })
  return (
    <div className="wrapper">
      <div className="media-player">
        <img
          alt=""
          src="https://sandpack-bundler.vercel.app/img/take-it-easy.png"
        />
        <div className="summary">
          <h2>Take It Easy</h2>
          <p>Bvrnout ft. Mia Vaile</p>
        </div>
        <button onClick={togglePlayPause}>     {isPlaying ? <Pause /> : <Play />}
          
          <VisuallyHidden>Toggle playing</VisuallyHidden>
        </button>

        <audio src={src}  ref={soundRef}/>
      </div>
    </div>
  );
}

export default MediaPlayer;