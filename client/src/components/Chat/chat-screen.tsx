import { useParams } from "react-router"
import { Mic, Plus, Sticker } from "lucide-react"

export const ChatScreen = () => {
    const { roomId } = useParams()
    return (
        <div className="absolute top-0 left-0 lg:flex flex-col lg:flex-1 w-full h-screen lg:relative overflow-hidden">
            <div className="w-full h-fit shrink-0 p-3 flex gap-3 border-b border-blue-300/15">
                <span className="h-fit w-fit flex">
                    <img className="h-13 w-13 object-cover rounded-full" src={'/hero-section.jpg'} alt="#PFP" />
                </span>
                <span className="flex flex-col gap-0.5">
                    <h1 className="text-white font-semibold text-lg">{roomId}</h1>
                    <p className="text-[#b3b3e9ca] text-[13px] font-semibold leading-2">Message Yourself</p>
                </span>
            </div>
            <div className="w-full flex-1 overflow-y-auto px-3 overflow-x-hidden hide-scrollbar bg-[#000428]">
                {
                    
                }
            </div>
            <div className="h-18 w-full border shrink-0 px-3 py-2 bg-[#000428] flex items-center">
                <span className="h-full w-full flex px-2 border rounded-full bg-[#020015]/90 justify-between items-center">
                    <span className="h-fit w-full flex gap-1">
                        <Plus className="p-2 rounded-full cursor-pointer hover:bg-blue-300/15" size={40} strokeWidth={2} color="#FFFFFF" />
                        <Sticker className="p-2 rounded-full cursor-pointer hover:bg-blue-300/15" size={40} strokeWidth={2} color="#FFFFFF" />
                        <input
                            type="text"
                            className="h-full w-[90%] p-2 text-white focus:outline-0"
                            // value={}
                            // onChange={(e) => }
                            name="send-message"
                            placeholder="Type a message"
                        />
                    </span>
                    <span className="h-full w-fit flex justify-center items-center">
                        <Mic className="p-2 rounded-full cursor-pointer hover:bg-blue-300/15" size={40} strokeWidth={2} color="#FFFFFF" />
                    </span>
                </span>
            </div>
        </div>
    )
}