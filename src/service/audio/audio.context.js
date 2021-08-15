import React, {createContext} from 'react';
import { chooseAudioByLetter } from './audio.service';

export const AudioContext = createContext();

export const AudioContextProvider =({children})=>{
    const chooseAudio = chooseAudioByLetter;
    return(
        <AudioContext.Provider value={{chooseAudio}}>
            {children}
        </AudioContext.Provider>
    );
}