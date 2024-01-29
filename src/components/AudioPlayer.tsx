import React, { useEffect, useState } from "react";

const AudioPlayer: React.FC = () => {
    const songUrl = 'src/assets/songs/Rich_Girl_Hall_and_Oates.mp3';

    const [currentSong, setCurrentSong] = useState(new Audio(songUrl));
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        isPlaying ? currentSong.play() : currentSong.pause();

        return () => {
            currentSong.pause();
            currentSong.currentTime = 0;
        }
    }, [isPlaying, currentSong])

    const togglePlayPause = () => {
        if (currentSong.src != songUrl){
            setCurrentSong(new Audio(songUrl));
        }
        setIsPlaying(!isPlaying);
    }
    
    return (
        <div>
            <button onClick={togglePlayPause}>
                {isPlaying ? "pause" : "play"}
            </button>
        </div>
    )
}

export default AudioPlayer;