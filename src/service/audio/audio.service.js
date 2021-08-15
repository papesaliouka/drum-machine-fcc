export const audios = [
    {
        src:'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
        name: 'Heater 1',
        letter: 'Q'
    },
    {
        src:'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
        name: 'Heater 2',
        letter: 'W'
    },
    {
        src:'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
        name: 'Heater 3',
        letter:'E'
    },
    {
        src:'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
        name: 'Heater 4',
        letter: 'A'
    },
    {
        src:'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
        name: 'Clap',
        letter: 'S'
    },
    {
        src:'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
        name: 'Dsc Oh',
        letter: 'D'
    },
    {
        src:'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
        name: 'Kick n Hat',
        letter:'Z'
    },
    {
        src:'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
        name: 'Rp4 KICK 1',
        letter:'X'
    },
    {
        src:'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
        name: 'Cev H2',
        letter:'C'
    }
];

export const chooseAudioByLetter=(letter)=>{
    return audios.filter((audio)=> audio.letter===letter);
}