import { useNavigate, useParams } from "react-router"
import { EllipsisVertical, Mic, MoveLeft, PhoneOutgoing, Plus, SendHorizontal, Sticker } from "lucide-react"
import { dummyMessages } from "../../constant/dummy-chathistory";
import { SenderMessage, type Message } from "./sender-message";
import { ReceiverMessage } from "./receiver-message";
import { useState } from "react";
import { useChatScroll } from "../../hooks/useChatScroll";

export const ChatScreen = () => {
    const { roomId } = useParams()
    const navigate = useNavigate();
    const [allMessages, setAllMessages] = useState<Message[]>(dummyMessages);
    const [message, setMessage] = useState('');
    const ref = useChatScroll(allMessages);

    function handleSendMessage() {
        if (!message) {
            return;
        }

        setAllMessages([...allMessages, { message, sender: "1", receiver: '2' }]);
        setMessage('');
    }

    return (
        <div className="bg-[#020015] fixed top-0 flex left-0 sm:left-16 lg:left-0 lg:flex flex-col lg:flex-1 w-full sm:max-w-[calc(100vw-4rem)] lg:max-w-full h-screen lg:relative overflow-hidden z-50">
            <div className="w-full h-fit shrink-0 p-3 flex justify-between border-b border-blue-300/15">
                <div className="h-fit w-fit flex gap-3">
                    <button className="h-full lg:hidden w-fit flex justify-center items-center" onClick={() => navigate('/chat')}>
                        <MoveLeft className="p-2 rounded-full cursor-pointer hover:bg-blue-300/15" size={40} strokeWidth={2} color="#FFFFFF" />
                    </button>
                    <span className="h-fit w-fit flex">
                        <img className="h-12 w-12 object-cover rounded-full" src={'/hero-section.jpg'} alt="#PFP" />
                    </span>
                    <span className="flex flex-col gap-0.5">
                        <h1 className="text-white font-semibold text-lg">{roomId}</h1>
                        <p className="text-[#b3b3e9ca] text-[13px] font-semibold leading-2">Message Yourself</p>
                    </span>
                </div>
                <div className="h-fit w-fit flex gap-2">
                    <button className="h-10 w-10 rounded-full p-2 cursor-pointer hover:bg-blue-300/15 flex justify-center items-center transition-all">
                        <PhoneOutgoing onClick={() => handleSendMessage()} size={24} strokeWidth={1.5} color="#FFFFFF" /> 
                    </button>
                    <button className="h-full w-fit flex justify-center items-center transition-all">
                        <EllipsisVertical onClick={() => handleSendMessage()} className="p-2 rounded-full cursor-pointer hover:bg-blue-300/15" size={40} strokeWidth={2} color="#FFFFFF" /> 
                    </button>
                </div>
            </div>
            <div ref={ref} className="w-full flex flex-col flex-1 overflow-y-auto py-3 px-5 gap-5 overflow-x-hidden hide-scrollbar bg-[#000428]">
                {
                    allMessages.map((msg, ind) => {
                        if (msg.sender === "1") {
                            return <SenderMessage key={ind} {...msg} />
                        }
                        return <ReceiverMessage key={ind} {...msg} />
                    })
                }
            </div>
            <div className="h-18 w-full border shrink-0 px-3 py-2 bg-[#000428] flex items-center">
                <div className="h-full w-full flex px-2 border rounded-full bg-[#020015]/90 justify-between items-center">
                    <div className="h-fit w-full flex gap-1">
                        <Plus className="p-2 rounded-full cursor-pointer hover:bg-blue-300/15" size={40} strokeWidth={2} color="#FFFFFF" />
                        <Sticker className="p-2 rounded-full cursor-pointer hover:bg-blue-300/15" size={40} strokeWidth={2} color="#FFFFFF" />
                        <input
                            type="text"
                            className="h-full w-[90%] p-2 text-white focus:outline-0"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            name="send-message"
                            placeholder="Type a message"
                        />
                    </div>
                    <button className="h-full w-fit flex justify-center items-center transition-all">
                        {message ? <SendHorizontal onClick={() => handleSendMessage()} className="p-2 rounded-full cursor-pointer hover:bg-blue-300/15" size={40} strokeWidth={2} color="#FFFFFF" /> : <Mic className="p-2 rounded-full cursor-pointer hover:bg-blue-300/15" size={40} strokeWidth={2} color="#FFFFFF" />}
                    </button>
                </div>
            </div>
        </div>
    )
}