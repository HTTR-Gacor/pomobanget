'use client'

import { add, sub, differenceInMinutes, differenceInSeconds} from "date-fns";
import { useEffect, useState, useMemo } from "react";
import {IoMdRefresh} from "react-icons/io"
// Incoming Analog & Digital clock version
// https://dev.to/yuridevat/how-to-create-a-timer-with-react-7b9
const SECOND = 1_000;
const MINUTE = SECOND * 60;

interface ClockProps {
  isStarted: boolean;
  setIsStarted: (isStarted: boolean) => void;

  isPaused: boolean;
  setIsPaused: (isPaused: boolean) => void;

  timeLeft: number;
  setTimeLeft: (timeLeft: number) => void;

  isDark?: boolean;

  mode: string;
}



export const Clock:React.FC<ClockProps> = ({isStarted, setIsStarted, isPaused, setIsPaused, timeLeft, setTimeLeft, isDark, mode}) => {
  // const [isStarted, setIsStarted] = useState(false)
  // const [isPaused, setIsPaused] = useState(false)
  // const [timeLeft, setTimeLeft] = useState(1500)

  function start() {
    setIsStarted(true)
  }

  function pause() {
    setIsPaused(!isPaused)
  }

  function reset() {
    setTimeLeft(1500)
    setIsStarted(false)
    setIsPaused(false)
  }

  function resetBreak() {
    setTimeLeft(300)
    setIsStarted(false)
    setIsPaused(false)
  }

  const minutes = useMemo(() => {
    return (Math.floor(timeLeft / 60)).toLocaleString('en-US', {
      minimumIntegerDigits: 2
    })
  }, [timeLeft])

  const seconds = useMemo(() => {
    return (timeLeft % 60).toLocaleString('en-US', {
      minimumIntegerDigits: 2
    })
  }, [timeLeft])

  useEffect(() => {
    if (isStarted && !isPaused) {
      const interval = setInterval(() => {
        setTimeLeft(timeLeft - 1)
      }, 1000);
        
      return () => clearInterval(interval);
    }
    console.log('jalan')
  }, [timeLeft, isStarted, isPaused]);

  return (
    <div className="flex flex-col items-center">
      <div className="bg-white/25 shadow-xl relative opacity-80 py-2 px-16 rounded-2xl my-10">
        <button onClick={ () => {
          if (mode === 'break'){
            resetBreak()
          } else if (mode === 'work'){
            reset()
          }
        }
          } className="absolute right-5 top-4">
          <IoMdRefresh size={19} />
        </button>
        <p className={`${isDark && 'text-secondary'} text-[8rem] font-bold`}>
          {minutes}:{seconds}
        </p>
      </div>
      <button onClick={() => {
        !isStarted ? start() : pause()
      }} className="bg-primary shadow-xl opacity-80 py-5 px-10 w-1/3 rounded-2xl my-3">
        <p className="text-[2rem] font-bold text-secondary">
          {!isStarted || isPaused ? 'Start' : 'Pause'}
        </p>
      </button>
    </div>
  )
}