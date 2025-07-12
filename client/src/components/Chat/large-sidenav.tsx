import { ArchiveX, PhoneCall, Settings } from "lucide-react"
import { CircleFadingPlus } from "lucide-react"
import { MessageSquareText } from "lucide-react"
import { useLocation, useNavigate } from "react-router"
export const ChatSideNav = () => {
    const {pathname} = useLocation();
    const navigate = useNavigate();

    return (
        <div className="h-full w-16 bg-[#000428] hidden shrink-0 sm:flex flex-col justify-between p-2 border-r border-[#2f2f64]">
            <div className="h-fit w-full flex flex-col items-center pt-2 gap-2.5">
                <button className={`h-fit p-2 ${pathname === '/chat' ? 'bg-blue-300/15' : 'hover:bg-blue-300/15'} cursor-pointer rounded-full w-fit flex justify-center items-center relative`} onClick={() => navigate('/chat')}>
                    <MessageSquareText size={24} color="#FFFFFF" strokeWidth={2} />
                    <span className="h-5 w-5 flex justify-center items-center rounded-full bg-orange-500 absolute top-0 right-0 text-xs font-semibold leading-2">99</span>
                </button>
                <button className={`h-fit p-2 ${pathname === '/status' ? 'bg-blue-300/15' : 'hover:bg-blue-300/15'} cursor-pointer rounded-full w-fit flex justify-center items-center relative`} onClick={() => navigate('/status')}>
                    <CircleFadingPlus size={24} color="#FFFFFF" strokeWidth={2} />
                    <span className="h-2 w-2 flex justify-center items-center rounded-full bg-orange-500 absolute top-0 right-0 text-xs font-semibold leading-2"></span>
                </button>
                <button className={`h-fit p-2 ${pathname === '/calls' ? 'bg-blue-300/15' : 'hover:bg-blue-300/15'} cursor-pointer rounded-full w-fit flex justify-center items-center relative`} onClick={() => navigate('/calls')}>
                    <PhoneCall size={24} color="#FFFFFF" strokeWidth={2} />
                </button>
                <button className={`h-fit p-2 ${pathname === '/archives' ? 'bg-blue-300/15' : 'hover:bg-blue-300/15'} cursor-pointer rounded-full w-fit flex justify-center items-center relative`} onClick={() => navigate('/archives')}>
                    <ArchiveX size={24} color="#FFFFFF" strokeWidth={2} />
                </button>
                <span className="w-9 my-1 border-b border-white/80"></span>
                <button className={`h-fit p-2 ${pathname === '/ai' ? 'bg-blue-300/15' : 'hover:bg-blue-300/15'} cursor-pointer rounded-full w-fit flex justify-center items-center relative`}>
                    <img className="h-6" src="/stars.png" alt="#AI-ICON" />
                </button>
            </div>
            <div className="h-fit w-full flex flex-col items-center gap-1.5 py-3">
                <button className="h-fit p-2 hover:bg-blue-300/15 cursor-pointer rounded-full w-fit flex justify-center items-center">
                    <Settings size={24} color="#FFFFFF" strokeWidth={2} />
                </button>
                <button className="h-10 w-10 hover:bg-blue-300/15 cursor-pointer rounded-full flex justify-center items-center">
                    <img className="h-7 w-7 object-cover rounded-full" src="/hero-section.jpg" alt="#AI-ICON" />
                </button>
            </div>
        </div>
    )
}