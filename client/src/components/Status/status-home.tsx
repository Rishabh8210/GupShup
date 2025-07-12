import { CircleFadingPlus } from "lucide-react"

export const StatusHome = () => {
    return (
        <div className="text-white hidden lg:flex lg:flex-1 px-9 w-full justify-center items-center h-screen relative select-none">
            <div className="flex flex-col justify-center items-center gap-4">
                <CircleFadingPlus size={80} />
                <h1 className="text-4xl font-bold">Share status updates</h1>
                <p className="text-center">
                    Share photos, videos and text that disappear after 24 hours.
                </p>
            </div>

            <div className="absolute bottom-4 left-0 right-0 flex justify-center text-sm text-zinc-100 px-4">
                <p className="mx-2">Your status updates are end-to-end encrypted.</p>
            </div>
        </div>
    )
}
