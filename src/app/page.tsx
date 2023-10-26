import { Clock } from "@/components/Clock";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center py-20">
      <h1 className="text-3xl drop-shadow-md">
        <span className="font-extrabold tracking-wider">POMO</span>BANGET
      </h1>
      <h1 className="text-sm font-bold opacity-60">
        by HTTR
      </h1>
      <Clock/>
    </div>

  )
}
