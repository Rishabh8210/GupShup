import { MessageSquarePlus } from "lucide-react"
import { EllipsisVertical } from "lucide-react"
import { Search } from "lucide-react"

import { chatHistory } from "../../constant/dummy-chathistory"
import { ChatUserCart } from "./chat-user-cart"


export const ChatHistory = () => {
    return (
        <div className="h-full w-full sm:flex-1 lg:max-w-120 lg:border-r shrink-0 border-[#2f2f64] flex flex-col gap-3 px-3 lg:px-5 pt-2 overflow-hidden">
            <div className="w-full h-fit flex items-center justify-between">
                <h1 className="text-white text-2xl font-semibold">GupShup</h1>
                <span className="flex gap-5 items-center">
                    <span className="cursor-pointer p-2 rounded-full  hover:bg-blue-300/15">
                        <MessageSquarePlus size={24} color="#FFFFFF" strokeWidth={2} />
                    </span>
                    <span className="cursor-pointer p-2 rounded-full hover:bg-blue-300/15">
                        <EllipsisVertical size={24} color="#FFFFFF" strokeWidth={2} />
                    </span>
                </span>
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
                <button className="border border-[#2f2f64] bg-orange-500/60 rounded-2xl px-3 py-1 transition cursor-pointer">
                    <p className="text-white text-center">All</p>
                </button>
                <button className="border border-[#2f2f64] hover:bg-blue-300/15 rounded-2xl px-3 py-1 transition cursor-pointer">
                    <p className="text-white text-center">Unread</p>
                </button>
                <button className="border border-[#2f2f64] hover:bg-blue-300/15 rounded-2xl px-3 py-1 transition cursor-pointer">
                    <p className="text-white text-center">Favorites</p>
                </button>
                <button className="border border-[#2f2f64] hover:bg-blue-300/15 rounded-2xl px-3 py-1 transition cursor-pointer">
                    <p className="text-white text-center">Groups</p>
                </button>
            </div>
            <div className="h-fit overflow-y-auto overflow-x-hidden hide-scrollbar py-1">
            {
                chatHistory.map((history, ind) => {
                    return (
                        <ChatUserCart key={ind} history = {history} />
                    )
                })
            }

            </div>
            {/* <ChatUserCart /> */}
        </div>
    )
}