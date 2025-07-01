import { Types } from "mongoose";

export interface ChatAttributes {
    chat_type: string;
    room_id: string; 
    isGroup: boolean;
    name?: string;
    avatar_url?: string;
    description?: string;
    created_by?: Types.ObjectId;
    chating_with?: Types.ObjectId; 
}

export interface ChatMetaAttributes {
    chat_id: Types.ObjectId;
    user_id: Types.ObjectId;
    status: string;
}

export interface MessageAttributes {
    sender_id: Types.ObjectId;
    chat_id: Types.ObjectId,
    content: string,
    attachments?: string[]
}