import React, { useEffect, useState } from 'react'
// import Cancion from 
import {AiOutlinePlayCircle,AiOutlinePauseCircle} from 'react-icons/ai'
import {MdOutlineRestartAlt} from 'react-icons/md'


export default function Sound({size=50,sizeRestart=20,left=0}) {
    const [audio, setaudio] = useState()
    const [isPlaying, setIsPlaying] = useState(false)

    useEffect(() => {
        const audio = new Audio('/cancion.mp3');
        // audio.autoplay=true
        setaudio(audio)

    
      return () => {
        
      }
    }, [])
    

  return (
    <div style={{
        display:'block',
        marginLeft:left,
        zIndex:20}}>
    
    {!isPlaying?
      <button
        onClick={() => {
            setIsPlaying(!isPlaying)
            audio.play();
        }}
      >
        <AiOutlinePlayCircle size={size}/>
      </button>
:
    


      <button onClick={() => {
          setIsPlaying(!isPlaying)
          audio.pause()
          console.log('duration',audio.duration)
          }}>
              <AiOutlinePauseCircle size={size}/>
          </button>

    }

    {isPlaying&&
      <button 
      style={{position:'absolute',display:'flex'}}
      onClick={() => {
          audio.loop = false
          
          audio.load()
          audio.play()
          }}>
              <MdOutlineRestartAlt size={sizeRestart}/>
          </button>}

    <div>


    </div>
    </div>
  )
}
