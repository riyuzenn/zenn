
import { useDate } from "../lib/useDate";
import Marquee from "react-fast-marquee";
import AudioController from "./audio/controller";
export default function Footer() {
    const { date, time, wish } = useDate();
    
    function next() {

    }
    function prev() {

    }
    function play() {

    }
    return (
        <div className="relative h-10 py-3 border-dashed border-t-[1px] border-white/20 ">
            <div className="absolute left-0">
              <div className="flex space-x-5">
                <AudioController 
                  onNextClick={next} 
                  onPrevClick={prev} 
                  onPlayPauseClick={play}  
                />
                <div className="w-[50%]">
                  <Marquee gradient={false}>
                    <p>null</p>
                  </Marquee>
                </div>
                
              </div>
            </div>
            <div className="absolute right-0">
              <div className="flex space-x-3">
                <div className="flex space-x-1">
                <p><a></a></p> 
                <p>|</p>
                </div>
                <p>{`${date} - ${time}`}</p>
              </div>
            </div>
        </div>
    )
}