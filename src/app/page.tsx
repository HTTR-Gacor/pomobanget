'use client'

import { Clock } from "@/components/Clock";
import { useEffect, useState, useMemo } from "react";


export default function Home() {
  const [isStarted, setIsStarted] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  return (
    <div className={`${isStarted && !isPaused ? 'bg-warnatrias' : 'bg-secondary'} flex flex-col justify-center items-center py-20 h-screen transition-all duration-500`}>
      <h1 className="text-3xl drop-shadow-md">
        <span className="font-extrabold tracking-wider">POMO</span>BANGET
      </h1>
      <h1 className="text-sm font-bold opacity-60">
        by HTTR
      </h1>
      <Clock isStarted={isStarted} setIsStarted={setIsStarted} isPaused={isPaused} setIsPaused={setIsPaused}/>
    </div>

  )
}
