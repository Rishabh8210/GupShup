import type { Message } from "./sender-message"

export const ReceiverMessage = ({message}: Message ) => {
    return (
        <div className="py-2 px-4 h-fit w-fit max-w-[80%] bg-blue-300/15 rounded-2xl">
            <p className="break-words text-white">{message}</p>
        </div>
    )
}