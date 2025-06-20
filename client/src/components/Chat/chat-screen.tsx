import { useParams } from "react-router"

export const ChatScreen = () => {
    const {roomId} = useParams()
    return (
        <div className="text-white hidden lg:flex flex-col lg:flex-1 px-5 w-full h-screen relative">
            <h1>{roomId || 'Not-Found'}</h1>
            <h1>Chat Screen</h1>

        </div>
    )
}