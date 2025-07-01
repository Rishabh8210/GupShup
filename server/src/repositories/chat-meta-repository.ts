import { CreateChatMetaDto } from "../dtos/chat-dto";
import ChatMeta from "../models/chat-meta-model";

export class ChatMetaRepository {
    private static instance: ChatMetaRepository;

    private constructor() {}

    static getInstance = () => {
        if(!this.instance) {
            this.instance = new ChatMetaRepository();
        } 

        return this.instance;
    }

    create = async (chatMetaData: CreateChatMetaDto) => {
        try {
            const chatMeta = await ChatMeta.create(chatMetaData);
            return chatMeta;
        } catch (error) {
            console.log("Error(ChatMetaRepository): Failed to create chat-meta");
            throw error;
        }
    }

    get = async (id: string) => {
        try {
            const chatMeta = await ChatMeta.findById(id);
            return chatMeta;
        } catch (error) {
            console.log("Error(ChatMetaRepository): Failed to get chat-meta");
            throw error;
        }
    }


    getAll = async(userId: string) => {
        try {
            const chatMetas = await ChatMeta.find({user_id: userId});
            return chatMetas;
        } catch (error) {
            console.log("Error(ChatMetaRepository): Failed to get all user chat-meta");
            throw error;
        }
    }
}