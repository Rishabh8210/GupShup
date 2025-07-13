export const StatusCart = ({ chat, viewed }: any) => {
    return (
        <div className="h-18 px-2 w-full flex gap-3 items-center cursor-pointer hover:bg-blue-300/10 shrink-0 rounded-2xl">
            <div className={`w-12 h-12 rounded-full shrink-0 ${viewed ? 'border-2 border-orange-500': ''}`}>
                <img src={"/hero-section.jpg"} alt="#PFP" className="h-full rounded-full w-full object-cover object-center" />
            </div>
            <div className="h-fit w-fit flex flex-col text-white">
                <h3 className="font-semibold text-sm">{chat?.name}</h3>
                <p className="text-xs">{chat?.lastMessageTime}</p>
            </div>
        </div>
    )
}
