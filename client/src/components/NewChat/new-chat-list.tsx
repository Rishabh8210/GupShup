import { UserCart } from "../Common/user-cart"


export const NewChatList = ({ allUsers }: { allUsers: any[]}) => {

    return (
        <div className="h-fit overflow-y-auto overflow-x-hidden hide-scrollbar py-1">
            {
                allUsers && allUsers.length !== 0 && allUsers.map((history, ind) => {
                    return (
                        <UserCart key={ind} history={history} />
                    )
                })
            }
        </div>
    )
}