import { MoveLeft, X } from "lucide-react";
import { Navigate, useNavigate } from "react-router";

const StatusView = () => {
    const token = localStorage.getItem("token");
    const navigate = useNavigate();

    if (!token) {
        return <Navigate to={'/login'} replace />
    }

    console.log("Render Status View");
    return (
        <div className='h-screen max-h-screen overflow-hidden w-full flex justify-center items-center bg-[url("/call-screen.png")] bg-cover bg-center bg-no-repeat relative'>
            <div className="absolute h-full w-full top-0 left-0 bg-black/40 backdrop-blur-3xl"></div>
            <div className="h-14 w-full flex items-center justify-between px-7 absolute z-11 top-0 left-0">
                <MoveLeft className="p-2 rounded-full hover:bg-white/10 cursor-pointer" size={38} color = "#FFFFFF" strokeWidth={2.5} onClick={() => {navigate('/status')}}/>
                <X className="p-2 rounded-full hover:bg-white/10 cursor-pointer" size={38} color = "#FFFFFF" strokeWidth={2.5} onClick={() => {navigate('/status')}}/>
            </div>
            <div className="h-screen w-full md:max-w-[25rem] z-10 p-4 select-none">
                <img src="/call-screen.png" className="h-full w-full object-center object-contain opacity-80" alt="#STATUS"/>
            </div>
        </div>
    )
}

export default StatusView