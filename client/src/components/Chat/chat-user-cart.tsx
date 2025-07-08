import { Check, CheckCheck, ChevronDown } from "lucide-react"
import { useNavigate } from "react-router";

interface ChatHistoryy {
    name: string;
    src: string;
    lastMessage: string;
    lastMessageTime: string;
    status: string;
}

export const ChatUserCart = ({ history }: {history: any}) => {
    const navigate = useNavigate();
    // console.log("User Details: ", history);
    return (
        <div className="flex items-center justify-between px-2 py-5 rounded-2xl hover:bg-blue-300/15 cursor-pointer group" onClick={() => navigate(`/chat/${history?._id}`)} onDoubleClick={() => navigate('/chat')}>
            <div className="w-12 h-12 overflow-hidden rounded-full shrink-0">
                <img src={"/hero-section.jpg"} alt="#PFP" className="h-full w-full object-cover object-center" />
            </div>
            <div className="flex flex-1 flex-col px-4 overflow-hidden">
                <div className="flex justify-between items-center w-full">
                    <h2 className="text-white font-semibold">{(history?.name.length > 30) ? history?.name.substring(0,27) + '...' : history?.name}</h2>
                    <span className="text-sm text-zinc-400 whitespace-nowrap">{history?.updatedAt.split('T')[0]}</span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="flex items-center justify-center gap-1">
                        {history.status === 'seen' && <CheckCheck size={18} color="orange" strokeWidth={2} />}
                        {history.status === 'delivered' && <CheckCheck size={18} className="text-blue-300/35" strokeWidth={2} />}
                        {history.status === 'sent' && <Check size={18} className="text-blue-300/35" strokeWidth={2} />}
                        <p className="text-sm text-zinc-400 flex items-center gap-1">{(history?.bio.length > 40) ? history?.bio.substring(0,37) + '...' : history?.bio}</p>
                    </span>

                    <span className="w-4 h-4 text-zinc-100/50 ml-2 cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        <ChevronDown />
                    </span>
                </div>
            </div>
        </div>
    )
}
