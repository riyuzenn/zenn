import { useEffect, useState } from "react";
import { useDate } from "../lib/useDate";
import { FiSkipBack, FiSkipForward, FiPlay, FiPause } from "react-icons/fi";
import Marquee from "react-fast-marquee";
export default function Footer() {
    const { date, time, wish } = useDate();

    return (
        <div className="relative h-10 py-3 border-dashed border-t-[1px] border-white/20 ">
            <div className="absolute left-0">
              <div className="flex space-x-5">
                <button className="hover:bg-white/76 hover:text-black"><FiSkipBack size={13} /></button>
                <button className="hover:bg-white/76 hover:text-black"><FiPlay size={13} /></button>
                <button className="hover:bg-white/76 hover:text-black"><FiSkipForward size={13} /></button>
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
                <p><a>en</a></p> 
                <p>|</p>
                <p><a>es</a></p>
                <p>|</p>
                <p><a>jp</a></p>
                <p>|</p>
                </div>
                <p>{`${date} - ${time}`}</p>
              </div>
            </div>
        </div>
    )
}