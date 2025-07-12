import { Plus } from "lucide-react"

export const AddStatus = () => {
    return (
        <div className="h-20 shrink-0 w-full flex gap-3 items-center cursor-pointer">
            <div className="w-12 h-12 rounded-full shrink-0 relative">
                <img src={"/hero-section.jpg"} alt="#PFP" className="h-full rounded-full w-full object-cover object-center" />
                <span className="absolute overflow-hidden -bottom-0.5 -right-0.5 h-5 w-5 items-center justify-center bg-orange-500 border-2 border-[#020015] rounded-full flex">
                    <Plus size={14} strokeWidth={2.5}/>
                </span>
            </div>
            <div className="h-fit w-fit flex flex-col text-white">
                <h3 className="font-semibold text-sm">My Status</h3>
                <p className="text-xs">Click to add status update</p>
            </div>
        </div>
    )
}
