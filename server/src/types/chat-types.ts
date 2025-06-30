import { Types } from "mongoose";

export interface ChatAttributes {
    sender_id: Types.ObjectId;
    receiver_id: Types.ObjectId;
    chat_type: string;
    room_id: string; 
}