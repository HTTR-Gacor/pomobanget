import {IoMdRefresh} from "react-icons/io"

export const Clock = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-white/25 shadow-xl relative opacity-80 py-2 px-16 rounded-2xl my-10">
        <button className="absolute right-5 top-4">
          <IoMdRefresh size={19} />
        </button>
        <p className="text-[8rem] font-bold">
          25:00
        </p>
      </div>
      <button className="bg-primary shadow-xl opacity-80 py-5 px-10 w-1/3 rounded-2xl my-3">
        <p className="text-[2rem] font-bold text-secondary">
          Start
        </p>
      </button>
    </div>
  )
}