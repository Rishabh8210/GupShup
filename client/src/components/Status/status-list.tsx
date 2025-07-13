import { EllipsisVertical, PlusCircle } from "lucide-react"
import { AddStatus } from "./add-status"
import { chatHistory } from "../../constant/dummy-chathistory"
import { StatusCart } from "./status-cart"

export const StatusList = () => {
  return (
    <div className="h-full w-full sm:flex-1 lg:max-w-120 lg:border-r shrink-0 border-[#2f2f64] flex flex-col gap-3 px-3 lg:px-5 pt-2 overflow-hidden relative">
        <div className="h-16 w-full flex justify-between items-center border-b border-[#000428] shrink-0 relative">
            <h1 className="text-2xl text-white font-semibold">Status</h1>
            <div className="h-full w-fit flex gap-3 items-center">
                <PlusCircle className="hover:bg-blue-300/10 rounded-full p-2 cursor-pointer" size={40} color="#FFFFFF" strokeWidth={2} />
                <EllipsisVertical className="hover:bg-blue-300/10 rounded-full p-2 cursor-pointer" size={40} color="#FFFFFF" strokeWidth={2} />
            </div>
        </div>
        <div className="h-fit flex-1 shrink-0 overflow-x-hidden overflow-y-auto flex flex-col gap-2 hide-scrollbar px-1 md:px-0">
            <AddStatus />
            <p className="text-orange-500 font-semibold">Recent</p>
            {
                chatHistory && chatHistory.map((chat, ind) => {
                    if(ind < 6)
                    return (
                        <StatusCart key={ind} chat={chat} viewed={true} />
                    )
                })
            }

            <p className="text-orange-500 font-semibold py-3">Viewed</p>
            {
                chatHistory && chatHistory.map((chat, ind) => {
                    if(ind > 6)
                    return (
                        <StatusCart key={ind} chat={chat} />
                    )
                })
            }
        </div>
    </div>
  )
}