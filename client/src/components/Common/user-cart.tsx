import { useNavigate } from "react-router";

interface ChatHistoryy {
    name: string;
    src: string;
    lastMessage: string;
    lastMessageTime: string;
    status: string;
}

export const UserCart = ({ history }: {history: any}) => {
    const navigate = useNavigate();

    return (
        <div className="flex items-center justify-between px-2 py-3 rounded-2xl hover:bg-blue-300/15 cursor-pointer group" onClick={() => navigate(`/chat/${history.name}`)} onDoubleClick={() => navigate('/chat')}>
            <div className="w-12 h-12 overflow-hidden rounded-full shrink-0">
                <img src={history.src || "/hero-section.jpg"} alt="#PFP" className="h-full w-full object-cover object-cente" />
            </div>
            <div className="flex flex-1 flex-col px-4 overflow-hidden">
                <h2 className="text-white font-semibold">{(history.name.length > 30) ? history.name.substring(0,27) + '...' : history.name}</h2>
                <p className="text-white/40 font-semibold text-sm ">{(history.bio.length > 30) ? history.bio.substring(0,27) + '...' : history.bio}</p>
            </div>
        </div>
    )
}
