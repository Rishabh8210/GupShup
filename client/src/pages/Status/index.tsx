import { ChatSideNav } from "../../components/Chat/large-sidenav";
import { Navigate } from "react-router"
import { StatusList } from "../../components/Status/status-list";
import { StatusHome } from "../../components/Status/status-home";

const Status = () => {
    const token = localStorage.getItem("token");
    
    if (!token) {
        return <Navigate to={'/login'} replace />
    }

    return (
        <div className="h-screen max-h-screen overflow-hidden w-full flex bg-[#020015]">
            <ChatSideNav />
            <StatusList />
            <StatusHome />
        </div>
    )
}

export default Status