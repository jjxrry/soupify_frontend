import React, { useEffect, useState } from "react";

const AudioPlayer: React.FC = () => {
    // const songUrl = 'src/assets/songs/Rich_Girl_Hall_and_Oates.mp3';
    const songList = [
        {url: 'src/assets/songs/Rich_Girl_Hall_and_Oates.mp3', title: 'Rich Girl', artist: 'Hall and Oates'},
        {url: 'src/assets/songs/Crying_in_a_Loop_Mateus_Asato.mp3', title: 'Crying in a Loop', artist: 'Mateus Asato'},
        {url: 'src/assets/songs/Higgs_Frank_Ocean.mp3', title: 'Higgs', artist: 'Frank Ocean'},
        {url: 'src/assets/songs/Blonde_Compilation_Frank_Ocean.mp3', title: 'Blonde Compilation', artist: 'Frank Ocean'}
    ]

    
    const [currentSong, setCurrentSong] = useState(new Audio(songList[0].url));
    const [currentInfo, setCurrentInfo] = useState(songList[0]);
    const [isPlaying, setIsPlaying] = useState(false);
    
    const getRandomIndex = () => Math.floor(Math.random() * songList.length)

    useEffect(() => {
        isPlaying ? currentSong.play() : currentSong.pause();

        return () => {
            currentSong.pause();
            // currentSong.currentTime = 0;
        }
    }, [isPlaying, currentSong])

    const loadRandom = () => {
        const random = getRandomIndex()
        const songUrl = songList[random];
        setCurrentInfo(songUrl);

        if (currentSong.src != songUrl.url){
            setCurrentSong(new Audio(songUrl.url));
        }
        setIsPlaying(true);
    }

    const togglePlayPause = () => {
        setIsPlaying(!isPlaying);
    }
    
    return (
        <div>
            <button onClick={togglePlayPause}>
                {isPlaying ? "Pause" : "Play"}
            </button>
            <button onClick={loadRandom}>
                Shuffle
            </button>
            <p>Title: {currentInfo.title}</p>
            <p>Artist: {currentInfo.artist}</p>
        </div>
    )
}

export default AudioPlayer;