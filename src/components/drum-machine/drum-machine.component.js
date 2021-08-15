import DrumPad from '../drum-pad/drum-pad.component';
import './drum-machine.styles.css';
import {useState} from 'react';


const clicable = ['Q','W','E','A','S','D','Z','X','C'];


const DrumMachine = ()=>{
    const [playing, setPlaying] = useState(null);
    return(
        <div id='drum-machine'>
            <div id='display' className="display">{playing}</div>
            <div  className='pad'>
            {clicable.map((letter)=> <DrumPad setPlaying={setPlaying} letter={letter} key={letter}/> )}
            </div>
        </div>
    );
}

export default DrumMachine;