import { Loader2 } from "lucide-react"
export const LoaderButton = () => {
    return (
        <button
            className="py-2 flex px-5 h-10 w-32 rounded-full items-center justify-center gap-1.5 bg-orange-500 font-semibold border border-black hover:bg-blue-500 duration-800 cursor-pointer relative group overflow-hidden"
        >
            <Loader2 className="animate-spin transition-all" color="#FFFFFF" size={20} strokeWidth={3} />
        </button>
    )
}
