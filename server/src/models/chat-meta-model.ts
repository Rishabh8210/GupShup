import { Schema, model } from 'mongoose'
import { ChatMetaAttributes } from '../types/chat-types';

export interface ChatMetaDocument extends ChatMetaAttributes, Document {}
const chatMetaSchema = new Schema<ChatMetaDocument>({
    chat_id: {
        type: Schema.Types.ObjectId,
        ref: 'Chat',
        required: true
    },

    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },

    status: {
        type: String,
        required: true,
        enum: ['Online', 'Offline']
    },
}, { timestamps: true });

const ChatMeta = model<ChatMetaDocument>('ChatMeta', chatMetaSchema);

export default ChatMeta;