import { ArrowUpRight } from "lucide-react"
import { Link } from "react-router"

export const PrivacyMatters = () => {
  return (
    <div className="h-fit w-full lg:w-[70%] px-5 lg:px-9 py-18 gap-10 flex flex-col md:flex-row md:gap-0">
        <div className="h-fit w-full md:w-1/2 flex justify-center md:justify-start items-center">
            <img className="h-[30rem] shadow-2xl" src="/call-screen.png" alt="#Call-Screen"/>
        </div>
        <div className="flex flex-col w-full gap-5 md:w-1/2 md:py-10 text-white">
            <h1 className="text-3xl md:text-7xl w-20 font-semibold">Speak <span className="text-[#ff6f00]">freely.</span></h1>
            <p className="text-lg md:text-xl leading-5.5">From a group call to classmates to a quick call with mom, feel like you’re in the same room with voice and video calls.</p>
            <Link to={'/calls'} className="text-lg w-fit flex gap-1 border-b-2 border-orange-500">Learn more <ArrowUpRight size={22} /></Link>
        </div>
    </div>
  )
}
