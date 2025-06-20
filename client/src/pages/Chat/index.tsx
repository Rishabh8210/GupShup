import { ChatHistory } from "../../components/Chat/chat-history"
import { ChatSideNav } from "../../components/Chat/large-sidenav"
import { Outlet } from "react-router"

const Chat = () => {
    return (
        <div className="h-screen max-h-screen overflow-hidden w-full flex bg-[#020015]">
            <ChatSideNav />
            
            <ChatHistory />

            <Outlet />
            {/* <ChatHome /> */}
        </div>
    )
}

export default Chat