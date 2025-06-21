import { chatHistory } from "../../constant/dummy-chathistory"
import { UserCart } from "../Common/user-cart"


export const NewChatList = () => {
    return (
        <div className="h-fit overflow-y-auto overflow-x-hidden hide-scrollbar py-1">
            {
                chatHistory.map((history, ind) => {
                    return (
                        <UserCart key={ind} history={history} />
                    )
                })
            }
        </div>
    )
}