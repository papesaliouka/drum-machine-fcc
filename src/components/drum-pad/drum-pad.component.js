import {useContext, useRef, useEffect} from 'react';
import './drum-pad.styles.css';
import { AudioContext } from '../../service/audio/audio.context';

const DrumPad = ({letter='A', setPlaying})=>{
    const {chooseAudio} = useContext(AudioContext);
    let [{src,name}] = chooseAudio(letter);
    const audioRef = useRef(null);
    const playAudio = ()=> {audioRef.current.play(); setPlaying(name)};
    const handleKeyPress = (e)=>{
        if(e.key===letter.toLowerCase()){
           return playAudio()
        }
    }
    useEffect(()=>{
        document.addEventListener('keypress', (e)=> handleKeyPress(e))
    },[])

    return(
        <div className='drum-pad' id={letter} onClick={()=>playAudio()} >
            <audio className='clip' id={letter} src={src} ref={audioRef}></audio>
            <button>{letter}</button>
        </div>
    );
}

export default DrumPad;