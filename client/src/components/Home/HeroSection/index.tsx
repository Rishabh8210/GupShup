import { DownloadButton } from "../../ui/download-button"

export const HeroSection = () => {
    return (
        <>
            <div className="min-h-132 lg:h-[55rem] w-full px-5 py-7 flex flex-col lg:flex-row-reverse gap-9 relative">
                <div className="min-h-48 px-5 w-1/2 flex gap-5 flex-col items-start lg:items-end z-10">
                    <div className="pt-24 w-full lg:w-[28rem] flex flex-col items-start gap-3">
                        <img className="h-10 hidden md:flex" src="/received-message.svg" alt="#MSG" />
                        <img className="h-24 hidden md:flex" src="/summer.png" alt="" />
                    </div>
                    <div className="hidden w-[28rem] lg:flex flex-col items-end gap-3 justify-end">
                        <img className="h-10" src="/sended-message.svg" alt="#MSG" />
                        <img className="h-24" src="/crocodile.png" alt="" />
                    </div>
                    <div className="hidden lg:w-[28rem] lg:flex flex-col items-start gap-3">
                        <img className="h-48" src="/image-message.svg" alt="" />
                    </div>
                </div>
                <div className="h-full w-1/2 z-10 lg:px-28 pt-48">
                    <div className="p-5 flex flex-col gap-5 z-10 md:w-80 text-white">
                        <h1 className="text-5xl md:text-6xl md:leading-18 font-semibold font-mono">Message privately</h1>
                        <p className="font-medium">Simple, reliable, private messaging and calling for free*, available all over the world.</p>
                    </div>
                    <div className="px-5 pb-7 z-10">
                        <DownloadButton />
                    </div>
                </div>
                <div className="absolute h-full w-full top-0 left-0 pt-5 px-3">
                    <img className="h-full w-full object-cover rounded-3xl" src="/hero-section.jpg" alt="#LOGO" />
                </div>
            </div>
            <p className="text-right text-[13px] py-1 px-3">*Data charges apply. Contact your provider for details.</p>
        </>
    )
}
