
import { NextPageContext } from "next";
import { useDate } from "../lib/useDate";
import AudioPlayer from "./audio/player";

export default function Footer({ data }: any) {
    const { date, time, wish } = useDate();
    console.log(data)
    return (
        <div className="relative h-10 py-3 border-dashed border-t-[1px] border-white/20 mb-10 ">
            <div className="absolute left-0">
              <div className="flex space-x-5">
                <AudioPlayer />
                
              </div>
            </div>
            <div className="absolute right-0">
              <div className="flex space-x-3">
                <div className="flex space-x-1"> 
                <p>|</p>
                </div>
                <p>{`${date} - ${time}`}</p>
              </div>
            </div>
        </div>
    )
}
