import { Schema, model, Document } from 'mongoose'
import { MessageAttributes } from '../types/chat-types'

export interface MessageDocument extends MessageAttributes, Document {}

const messageSchema = new Schema<MessageDocument>({
    chat_id: {
        type: Schema.Types.ObjectId,
        ref: 'Chat',
        required: true
    },

    sender_id: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },

    content: {
        type: String,
        required: true,
        trim: true
    },

    attachments: {
        type: [ String ],
    }
})

const Message = model<MessageDocument>('Message', messageSchema);