import { CheckCheck } from "lucide-react"
import { ChevronDown } from "lucide-react"

export const UserList = () => {
    return(
<div className="flex items-center justify-between px-4 py-5 hover:bg-zinc-800 cursor-pointer group">
            <div className="flex-shrink-0">
                <img src="./hero-section.jpg" alt="#user profile photo" className="w-12 h-12 rounded-full object-cover"/>
            </div>
            <div className="flex flex-1 flex-col px-4 overflow-hidden">
                <div className="flex justify-between items-center w-full">
                <h2 className="text-white font-semibold">Sourav</h2>
                <span className="text-sm text-zinc-400 whitespace-nowrap">17/08/2025</span>
            </div>
            <div className="flex justify-between items-center">
                <p className="text-sm text-zinc-400 flex items-center gap:1">
                    <span className="pr-1"><CheckCheck size={18} color="orange" strokeWidth={2} /></span>
                    <span className="text-zinc-100/50">hii bro</span>
                </p>
                <span className="w-4 h-4 text-zinc-100/50 ml-2 cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <ChevronDown />
                </span>
            </div>
            </div>
        </div>
        )
    }