
import { useState, useRef } from "react";
import { 
    FiSkipBack, 
    FiSkipForward, 
    FiPlay, 
    FiPause 
} from "react-icons/fi";

interface ITrack {
    title: string,
    src: string
}
type AudioParams = {
    onPrevClick: () => void,
    onNextClick: () => void,
    onPlayPauseClick: () => void,
}
const AudioController = ({
    onPrevClick, 
    onNextClick, 
    onPlayPauseClick 
}: AudioParams) => {
    return (
       <div className="">
        <button className="hover:bg-white/76 hover:text-black" onClick={onPrevClick}>
            <FiSkipBack size={13} />
        </button>
        <button className="hover:bg-white/76 hover:text-black" onClick={onPlayPauseClick}>
            <FiPlay size={13} />
        </button>
        <button className="hover:bg-white/76 hover:text-black" onClick={onNextClick}>
            <FiSkipForward size={13} />
        </button>
       </div>
   ) 
}

export default AudioController;