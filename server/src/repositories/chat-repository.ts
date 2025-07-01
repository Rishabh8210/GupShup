import { CreateChatDto, FilterChatDto } from "../dtos/chat-dto";
import { Chat } from "../models";

export class ChatRepository {
    private static instance: ChatRepository;

    private constructor() {}

    static getInstance = () => {
        if(!this.instance){
            this.instance = new ChatRepository();
        }
    }

    create = async (chatData: CreateChatDto) => {
        try {
            const chat = await Chat.create(chatData);
            return chat;
        } catch (error) {
            console.log("Error(ChatRepository): Failed to create chat");
            throw error;
        }
    }

    update = (chatData: FilterChatDto) => {
        try {
            
        } catch (error) {
            
        }
    }

    get = async (id: string) => {
        try {   
            const chat = await Chat.findById(id);
            return chat; 
        } catch (error) {
            console.log("Error(ChatRepository): Failed to get chat");
            throw error;
        }
    }

    getAll = (chatData: FilterChatDto) => {
        try {
            
        } catch (error) {
            
        }
    }

    delete = (chatData: FilterChatDto) => {
        try {
            
        } catch (error) {
            
        }
    }
}