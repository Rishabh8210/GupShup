import { EllipsisVertical, MoveLeft, Search } from "lucide-react"
import { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router"
import { NewChatList } from "./new-chat-list";
import axios from "axios";

export const AllConnectedUsers = () => {
    const navigate = useNavigate();
    const [openOption, setOption] = useState(false)
    const [search, setSearch] = useState(false);
    const [inputSearch, setInputSearch] = useState('');


    const [allUsers, setAllUsers] = useState<any[]>([]);

    const token = localStorage.getItem('token');
    if (!token) {
        return <Navigate to={'/login'} replace />
    }

    useEffect(() => {
        if (!token) {
            return;
        }

        const fetchAllUsers = async () => {
            console.log(token);
            try {
                const response = await axios.get('http://localhost:3000/api/v1/chats', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })

                console.log("Backend Response", response.data.data);

                if (response.data) {
                    setAllUsers(response.data.data);
                }

            } catch (error) {
                console.log("Failed to fetch data");
            }
        }

        fetchAllUsers();
    }, [])

    return (
        <div className="h-full w-full sm:flex-1 lg:max-w-120 lg:border-r shrink-0 border-[#2f2f64] flex flex-col gap-3 px-3 lg:px-5 pt-2 overflow-hidden relative">
            <div className="h-16 flex justify-between items-center border-b border-[#000428] shrink-0 relative">
                <div className="flex items-center justify-center gap-2">
                    <span className="h-10 w-10 cursor-pointer p-2 rounded-full  hover:bg-blue-300/15" onClick={() => navigate('/chat')}>
                        <MoveLeft className="h-full w-full" color="#FFFFFF" strokeWidth={2} />
                    </span>
                    <span className="text-white">
                        <h1 className="font-semibold">Select users</h1>
                        <span className="flex gap-2 items-center">
                            <p className="text-[13px]">{allUsers.length} users available</p>
                            <span className="h-2 w-2 bg-green-600 rounded-full"></span>
                        </span>
                    </span>
                </div>
                <div className="flex items-center gap-2 relative">
                    <span className="h-10 w-10 cursor-pointer p-2 rounded-full  hover:bg-blue-300/15" onClick={() => setSearch(!search)}>
                        <Search className="h-full w-full" color="#FFFFFF" strokeWidth={2} />
                    </span>
                    <span className={`h-10 w-10 cursor-pointer p-2 rounded-full  hover:bg-blue-300/15 ${openOption ? 'bg-blue-300/15' : ''}`} onClick={() => setOption(!openOption)}>
                        <EllipsisVertical className="h-full w-full" color="#FFFFFF" strokeWidth={2} />
                    </span>
                    {openOption &&
                        <div className="absolute top-11 right-1 bg-[#191e4b] h-fit w-48 rounded-lg p-2 flex flex-col gap-1 z-20">
                            <Link to={'/invite-friends'} className="text-base font-semibold block p-2 rounded-lg text-white h-fit w-full hover:bg-blue-300/15">Invite a friend</Link>
                            <button className="text-base text-left cursor-pointer font-semibold block p-2 rounded-lg text-white h-fit w-full hover:bg-blue-300/15">Refresh</button>
                            <Link to={'/help'} className="text-base font-semibold block p-2 rounded-lg text-white h-fit w-full hover:bg-blue-300/15">Help</Link>
                            <span className="h-0.5 w-full bg-[#2f2f64]"></span>
                            <Link to={'/login'} className="text-base font-semibold block p-2 rounded-lg text-white h-fit w-full hover:bg-blue-300/15">Logout</Link>
                        </div>
                    }
                </div>
                {
                    search &&
                    <div className="absolute h-fit w-full flex items-center bg-[#020015] transition-all">
                        <div className="h-fit w-full flex items-center p-2 pr-10 gap-2 rounded-full z-50 bg-blue-300/15">
                            <button onClick={() => setSearch(!search)}><MoveLeft className="h-10 w-10 p-2 rounded-full hover:bg-blue-300/15 cursor-pointer" color="#FFFFFF" /></button>
                            <input
                                type="text"
                                placeholder="Search..."
                                className="focus:outline-0 w-full border-b border-blue-600 text-white text-base"
                                name="search"
                                value={inputSearch}
                                onChange={(e) => setInputSearch(e.target.value)}
                            />
                        </div>
                    </div>
                }
            </div>
            <div className="h-fit flex-1 shrink-0 overflow-x-hidden overflow-y-auto hide-scrollbar">
                <p className="text-white text-sm pl-2 font-semibold">Contacts on GupShup</p>
                <NewChatList allUsers={allUsers} />
            </div>
        </div>
    )
}
