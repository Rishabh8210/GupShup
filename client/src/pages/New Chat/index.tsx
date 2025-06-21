import { ChatSideNav } from "../../components/Chat/large-sidenav"
import { AllConnectedUsers } from "../../components/NewChat/all-connected-users"
import { NewChatHome } from "../../components/NewChat/new-chat-home"

const NewChat = () => {

    return (
        <div className="h-screen max-h-screen overflow-hidden w-full flex bg-[#020015]">
            <ChatSideNav />
            <AllConnectedUsers />
            <NewChatHome />
        </div>
    )
}

export default NewChat