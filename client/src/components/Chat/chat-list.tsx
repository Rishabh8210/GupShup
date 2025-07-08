import { useEffect, useState } from "react"
// import { chatHistory } from "../../constant/dummy-chathistory"
import { ChatUserCart } from "./chat-user-cart"

import { useSocketContext } from "../../context/socket-context";

export const ChatList = () => {
    const [chatHistory, setChatHistory] = useState<any[]>([]);
    const socket = useSocketContext();


    useEffect(() => {
        if(!socket){
            return;
        }
        
        socket.emit('chat-history', {});

        function handleChatHistoryResponse(data: any) {
            console.log(data);
            setChatHistory(data);
        }

        socket.on('chat-history-response', handleChatHistoryResponse)

        return () => {
            socket.off('chat-history-response', handleChatHistoryResponse);
        }
    }, [socket])

    if(!socket){
        return <h1>Loadinggggg</h1>
    }

    return (
        <div className="h-fit overflow-y-auto overflow-x-hidden hide-scrollbar py-1">
            {
                chatHistory.map((history, ind) => {
                    return (
                        <ChatUserCart key={ind} history={history} />
                    )
                })
            }
        </div>
    )
}