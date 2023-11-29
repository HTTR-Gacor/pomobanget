'use client'

import { Clock } from "@/components/Clock";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from "react";


export default function Break() {
  const [isStarted, setIsStarted] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [timeLeft, setTimeLeft] = useState(300)
  const [mode] = useState('break')
  const router = useRouter()
  const [audio] = React.useState<HTMLAudioElement | null>(typeof Audio !== 'undefined' ? new Audio('/sounds/work-finished.mp3') : null)

  useEffect(() => {
    if (timeLeft == 0) {
      setIsStarted(false)
      router.push('/')
      audio?.play()
    }
  }, [timeLeft, router])

  return (
    <div className={`${isStarted && !isPaused ? 'bg-warnahajik' : 'bg-[#4682B4]'} flex flex-col justify-center items-center py-20 h-screen transition-all duration-500`}>
        <Link href="/" className="px-8 py-4 my-3 drop-shadow-xl rounded-xl bg-primary text-secondary font-bold text-xl md:text-3xl">
        Work
      </Link>
      <h1 className="text-xl md:text-3xl drop-shadow-md text-secondary">
        <span className="font-extrabold tracking-wider">POMO</span>BANGET (Break dulu bos)
      </h1>
      <h1 className="text-sm font-bold opacity-60 text-secondary">
        by HTTR
      </h1>
      <Clock isStarted={isStarted} setIsStarted={setIsStarted} 
      isPaused={isPaused} setIsPaused={setIsPaused}
      timeLeft={timeLeft} setTimeLeft={setTimeLeft} mode={mode}
      isDark/>
    </div>
  )
}
