import { ChatHome } from "../../components/Chat/chat-home"
import { ChatMenu } from "../../components/Chat/chat-userlist"
import { ChatSideNav } from "../../components/Chat/large-sidenav"

const Chat = () => {
    return (
        <div className="h-screen max-h-screen overflow-hidden w-full flex bg-[#020015]">
            <ChatSideNav />
            <ChatMenu />
            <ChatHome />
        </div>
    )
}

export default Chat