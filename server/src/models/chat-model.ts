import mongoose, { Document, Mongoose, Schema, model, mongo } from "mongoose";
import { ChatAttributes } from "../types/chat-types";
import User from "./user-model";

// chat_type: string;
//     room_id: string; 
//     isGroup: boolean;
//     name?: string;
//     avatar_url?: string;
//     description?: string;
//     created_by?: Types.ObjectId;
//     chating_with?: Types.ObjectId; 

export interface ChatDocument extends ChatAttributes, Document {}
const chatSchema = new Schema<ChatDocument>({

    chat_type: {
        type: String,
        enum: ['Private', 'Group'],
        required: true
    },

    room_id: {
        type: String,
        required: true
    },

    isGroup: {
        type: Boolean,
        required: true,
        default: false
    },

    name: {
        type: String,
    },

    avatar_url: {
        type: String,
    },

    description: {
        type: String,
    },

    created_by: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },

    chating_with: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    }
}, { timestamps: true });

const Chat = model<ChatDocument>('Chat', chatSchema);
export default Chat