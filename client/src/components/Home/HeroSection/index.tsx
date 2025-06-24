import { GroupChats } from "./group-chats"
import { HeroMain } from "./hero-main"
import { PrivacyMatters } from "./privacy-matters"
import { SayWhatYouFeel } from "./say-what-you-fell"
import { StayUptoDate } from "./stay-uptodate"
import { VideoVoiceCall } from "./voice-video-call"

export const HeroSection = () => {
    return (
        <div className="w-full h-fit flex flex-col justify-center items-center gap-10 rounded-3xl ">
            <HeroMain />
            <VideoVoiceCall />
            <div className="bg-[#010030] flex justify-center items-center w-full">
                <PrivacyMatters />
            </div>
            <GroupChats />
            <div className="bg-[#010030] flex justify-center items-center w-full">
                <StayUptoDate />
            </div>
            <div className="w-full h-fit bg-[#010030]">
                <SayWhatYouFeel />
            </div>
        </div>
    )
}
