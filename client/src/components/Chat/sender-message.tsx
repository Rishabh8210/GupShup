export interface Message{
    message: string;
    sender: string;
    receiver: string;
}

export const SenderMessage = ({message}: Message ) => {
    return (
        <div className="h-fit w-full flex justify-end items-center">
            <div className="py-2 px-4 h-fit w-fit max-w-[80%] bg-orange-600/45 rounded-2xl">
                <p className="break-words text-white">{message}</p>
            </div>
        </div>
    )
}