import { MessageSquarePlus, ScanQrCode } from "lucide-react"
import { EllipsisVertical } from "lucide-react"
import { Search } from "lucide-react"

import { Link, useNavigate } from "react-router"
import { useState } from "react"
import { ChatList } from "./chat-list"


export const ChatHistory = () => {
    const navigate = useNavigate()
    const [openOption, setOption] = useState(false)
    return (
        <div className="h-full w-full sm:flex-1 lg:max-w-120 lg:border-r shrink-0 border-[#2f2f64] flex flex-col gap-3 px-3 lg:px-5 pt-2 overflow-hidden relative">
            <div className="w-full h-fit flex items-center justify-between">
                <h1 className="text-white text-2xl font-semibold">GupShup</h1>
                <div className="flex gap-1 items-center relative">
                    <span className="cursor-pointer p-2 rounded-full  hover:bg-blue-300/15">
                        <ScanQrCode size={24} color="#FFFFFF" strokeWidth={2} />
                    </span>
                    <span className={`cursor-pointer p-2 rounded-full hover:bg-blue-300/15 ${openOption ? 'bg-blue-300/15': ''}`} onClick={() => setOption(!openOption)}>
                        <EllipsisVertical size={24} color="#FFFFFF" strokeWidth={2} />
                    </span>
                    {openOption &&
                    <div className="absolute top-11 right-1 bg-[#191e4b] h-fit w-48 rounded-lg p-2 flex flex-col gap-1 z-20">
                        <Link to={'/new-chat'} className="text-base font-semibold block p-2 rounded-lg text-white h-fit w-full hover:bg-blue-300/15">New chat</Link>
                        <Link to={'/starred-message'} className="text-base font-semibold block p-2 rounded-lg text-white h-fit w-full hover:bg-blue-300/15">Starred</Link>
                        <Link to={'/setting'} className="text-base font-semibold block p-2 rounded-lg text-white h-fit w-full hover:bg-blue-300/15">Setting</Link>
                        <span className="h-0.5 w-full bg-[#2f2f64]"></span>
                        <Link to={'/login'} className="text-base font-semibold block p-2 rounded-lg text-white h-fit w-full hover:bg-blue-300/15">Logout</Link>
                        {/* <Link to={'/read-all'} className="text-base font-semibold block p-2 rounded-lg text-white h-fit w-full hover:bg-blue-300/15">New chat</Link> */}
                    </div>}
                </div>
            </div>
            <div className="w-full px-3 border border-transparent hover:border-zinc-200 rounded-3xl flex items-center bg-blue-300/15 transition">
                <Search size={24} color="#FFFFFF" strokeWidth={2} />

                <input
                    placeholder="Search or start a new chat"
                    className="flex-1 text-zinc-200 px-4 py-2 bg-transparent outline-none"
                    type="text"
                />
            </div>


            <div className="flex overflow-x-scroll overflow-y-hidden hide-scrollbar py-2 px-1 gap-2 shrink-0">
                <button className="border border-blue-300/15 bg-orange-500/60 rounded-2xl px-3 py-1 transition cursor-pointer">
                    <p className="text-orange-100/90 text-center">All</p>
                </button>
                <button className="border  border-blue-300/15 hover:bg-orange-500/60 rounded-2xl px-3 py-1 transition cursor-pointer">
                    <p className="text-orange-100/90 text-center">Unread</p>
                </button>
                <button className="border  border-blue-300/15 hover:bg-orange-500/60 rounded-2xl px-3 py-1 transition cursor-pointer">
                    <p className="text-orange-100/90 text-center">Favorites</p>
                </button>
                <button className="border border-blue-300/15 hover:bg-orange-500/60 rounded-2xl px-3 py-1 transition cursor-pointer">
                    <p className="text-orange-100/90 text-center">Groups</p>
                </button>
            </div>
            <ChatList />
            <span className="absolute bottom-6 h-14 w-14 flex justify-center items-center right-6 bg-orange-600 cursor-pointer p-2 rounded-full  hover:bg-orange-500 transition-all" onClick={() => navigate('/new-chat')}>
                <MessageSquarePlus size={24} color="#FFFFFF" strokeWidth={2} />
            </span>
        </div>
    )
}