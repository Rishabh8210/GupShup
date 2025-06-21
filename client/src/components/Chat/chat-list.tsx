import { chatHistory } from "../../constant/dummy-chathistory"
import { ChatUserCart } from "./chat-user-cart"

export const ChatList = () => {
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