import { ChatHistory } from "../../components/Chat/chat-history"
import { StatusSideNav } from "../../components/Status/large-sidenav"
import { Navigate, Outlet } from "react-router"
import { StatusPage } from "../../components/Status/status-user-cart";

const Chat = () => {
    const token = localStorage.getItem("token");
    
    if (!token) {
        return <Navigate to={'/login'} replace />
    }

    return (
        <div className="h-screen max-h-screen overflow-hidden w-full flex bg-[#020015]">
            <StatusSideNav />
            
            
            <StatusPage />

        </div>
    )
}

export default Chat