
import Marquee from "react-fast-marquee";
import { 
    FiSkipBack, 
    FiSkipForward, 
    FiPlay, 
    FiPause 
} from "react-icons/fi";
import track from './data'
import { useState, useEffect, useRef } from "react";
import Router from "next/router";

interface ITrackData {
    title?: string,
    src?: string
}

export default function AudioPlayer() {
    const [playing, setPlaying] = useState(false);
    const [index, setIndex] = useState(0);
    
    const { title, src } = track[index]
    const isReady = useRef(false);
    const audioRef = useRef<HTMLAudioElement | undefined>(
        typeof Audio !== 'undefined' ? new Audio(src) : undefined
    )
    
   
    function next () {
        if (index < track.length - 1) {
            setIndex(index + 1);
        } else { 
            setIndex(0);
        }
    
    }
    function prev () {
        if (index - 1 < 0) {
            setIndex(track.length - 1);
        } else {
            setIndex(index - 1);
        }
       
    }
    function play () {
        if (playing) setPlaying(false);
        else setPlaying(true);
    }
    // Handle setup when changing tracks
    useEffect(() => {
        audioRef.current?.pause();
        audioRef.current = new Audio(src);
    
        if (isReady.current && playing) {
            audioRef.current.play();
            setPlaying(true);
        } else {
            // Set the isReady ref as true for the next pass
            isReady.current = true;
        }
    }, [index]);

    useEffect(() => {

        Router.events.on('beforeHistoryChange', (route: string) => {
            audioRef.current?.pause();
            setPlaying(false);
            return true;
        })
    
        if (playing) {            
            audioRef.current?.play();

        } else {
            audioRef.current?.pause();
        }
    }, [playing])

    

    return (
        <>
            <div className="flex space-x-5">
                <button className="hover:bg-white/76 hover:text-black" onClick={prev}>
                    <FiSkipBack size={13} />
                </button>
                <button className="hover:bg-white/76 hover:text-black" onClick={play}>
                    {playing ? <FiPause size={13} /> : <FiPlay size={13} />}
                </button>
                <button className="hover:bg-white/76 hover:text-black" onClick={next}>
                    <FiSkipForward size={13} />
                </button>
            </div>
            <div className="max-w-[45%]">
                <Marquee gradient={false}>
                <p>{playing ? title : 'null'}</p>
                </Marquee>
            </div>
        </>
    )
}