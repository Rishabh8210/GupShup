import mongoose, { Document, Mongoose, Schema, model, mongo } from "mongoose";
import { ChatAttributes } from "../types/chat-types";
import User from "./user-model";

export interface ChatDocument extends ChatAttributes, Document {}
const chatSchema = new Schema<ChatDocument>({
    sender_id: {
        type: Schema.Types.ObjectId,
        ref: User,
        required: true
    },

    receiver_id: {
        type: Schema.Types.ObjectId,
        ref: User,
        required: true,
    },

    chat_type: {
        type: String,
        required: true
    },

    room_id: {
        type: String,
        required: true
    }
})