'use client'

import { add, sub, differenceInMinutes, differenceInSeconds} from "date-fns";
import { useEffect, useState, useMemo } from "react";
import {IoMdRefresh} from "react-icons/io"
// Incoming Analog & Digital clock version
// https://dev.to/yuridevat/how-to-create-a-timer-with-react-7b9
const SECOND = 1_000;
const MINUTE = SECOND * 60;



export const Clock = () => {
  const [deadline, setDeadline] = useState(add(new Date(), { minutes: 25 }))
  const [now, setNow] = useState(1500)
  const [isStarted, setIsStarted] = useState(false)


  function start() {
    setIsStarted(true)
    setDeadline(add(new Date(), { minutes: 25, seconds: 1 }))
  }

  const minutes = useMemo(() => {
    return (Math.floor(now / 60)).toLocaleString('en-US', {
      minimumIntegerDigits: 2
    })
  }, [now])

  const seconds = useMemo(() => {
    return (now % 60).toLocaleString('en-US', {
      minimumIntegerDigits: 2
    })
  }, [now])

  useEffect(() => {
    if (isStarted) {
      const interval = setInterval(
        () => {
          setNow(differenceInSeconds(deadline, new Date()))
        },
        1000,
        );
        
        return () => clearInterval(interval);
      }
  }, [deadline]);

  return (
    <div className="flex flex-col items-center">
      <div className="bg-white/25 shadow-xl relative opacity-80 py-2 px-16 rounded-2xl my-10">
        <button className="absolute right-5 top-4">
          <IoMdRefresh size={19} />
        </button>
        <p className="text-[8rem] font-bold">
          {minutes}:{seconds}
        </p>
      </div>
      <button onClick={start} className="bg-primary shadow-xl opacity-80 py-5 px-10 w-1/3 rounded-2xl my-3">
        <p className="text-[2rem] font-bold text-secondary">
          Start
        </p>
      </button>
    </div>
  )
}