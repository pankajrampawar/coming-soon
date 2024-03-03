'use client'

import { keaniaOne, happyMonkey } from "./fonts";
import { useEffect, useState } from "react";

export default function Home() {

  const [showRebels, setShowRebels] = useState(false);
  const [showMisfits, setShowMisfits] = useState(false);
  const [showFor, setShowFor] = useState(false)
  const [showVesit, setShowVesit] = useState(false)
  const [showLogo, setShowLogo] = useState(false)
  const [showCS, setShowCS] = useState(false)

  useEffect(()=>{

    const timerForShowFor = setTimeout(() => {
      setShowFor(true)
    }, 200)

    const timerForMisfit = setTimeout(()=>{
      setShowMisfits(true)
    }, 600)

    const timerForRebels = setTimeout(()=>{
      setShowRebels(true)
      setShowMisfits(false)
    }, 1400)

    const timerForShowVesit = setTimeout(()=>{
      setShowRebels(false);
      setShowVesit(true);
    }, 2100)

    const timerForClearAll = setTimeout(()=>{
      setShowVesit(false)
      setShowFor(false)
    }, 3100)

    const timerForShowLogo = setTimeout(() => {
      setShowLogo(true);
    }, 3500)

    const timerForShowCS = setTimeout(()=>{
      setShowCS(true)
    }, 4000)

    return () => {
      clearTimeout(timerForMisfit);
      clearTimeout(timerForRebels);
      clearTimeout(timerForShowFor);
      clearTimeout(timerForShowVesit);
    }
  }, [])

  return (
    <div className="flex flex-col xl:-translate-y-20 overflow-hidden -translate-y-10">
      <div className="sm:min-h-24 bg-black w-full z-30">

      </div>
      <div className="flex gap-2 xl:gap-6">
        <div className={`${keaniaOne.className} sm:min-w-28 relative`}>
          <span className={`absolute ${showFor ? 'bottom-0' : 'bottom-full'} transition-all duration-300  ease-in-out`}>
            FOR
          </span>
          <span className="opacity-0">
            FOR
          </span>

          <span className={`${showLogo ? 'bottom-0 opacity-100' : 'opacity-0 bottom-full'} text-4xl sm:text-6xl transition-all duration-700 ease-in-out absolute left-0 translate-x-1/5 min-w-96`}>
            WhisEve
          </span>
        </div>

        <div className="sm:min-w-52 relative">
          <span className={`absolute ${showMisfits ? 'top-0' : 'top-full'} transition-all duration-400 ease-linear`}>
            Misfits
          </span>

          <span className={`absolute ${showRebels ? 'top-0' : 'top-full'} transition-all duration-400 ease-in-out`}>
            Rebels
          </span>

          <span className={`absolute ${showVesit ? 'top-0' : 'top-full'} transition-all duration-400 ease-in-out`}>
            VESIT
          </span>
        </div>
      </div>

      <div className="w-full min-h-12 bg-black xl:min-h-20 -mt-1 z-30">

      </div>

      <div className={`text-2xl -mt-10 sm:text-3xl text-start ${showCS ? 'opacity-100' : 'opacity-0'} transition-all duration-700 ease-in pl-5 z-50`}>
        coming soon...
      </div>
    </div>
  );
}
