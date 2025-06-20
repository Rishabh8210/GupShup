import { DownloadButton } from "../ui/download-button"
import { Lock } from "lucide-react"
export const ChatHome = () => {
    return (
        <div className="text-white hidden lg:flex lg:flex-1 px-9 w-full justify-center items-center h-screen relative">
            <div className="flex flex-col justify-center items-center gap-4">
                <img
                    className="w-full max-w-[22rem] p-4"
                    src="/chat-home.svg"
                    alt="Gupshup application logo"
                />
                <h1 className="text-4xl font-bold">Download Gupshup</h1>
                <p className="text-center">
                    Make calls, share your screen, and get a faster experience when you use the Gupshup app.
                </p>
                <DownloadButton />
            </div>

            <div className="absolute bottom-4 left-0 right-0 flex justify-center text-sm text-zinc-100 px-4">
                <Lock />
                <p className="mx-2">Your personal messages are end-to-end encrypted.</p>
            </div>
        </div>



    )
}