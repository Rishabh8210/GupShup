import { FilterUserDto } from "../dtos/user-dto";
import { UserService } from "../services/user-service"
import { Request, Response } from "express";

export class ChatController {
    private static instance: ChatController
    private userService: UserService

    private constructor(){
        this.userService = UserService.getInstance();
    }

    static getInstance() {
        if(!this.instance){
            this.instance = new ChatController();
        }

        return this.instance;
    }

    getAllUsers = async (req: Request, res: Response) => {
        try {
            const filter: FilterUserDto = {};
            const users = await this.userService.getAllUsers(filter);
            res.status(200).json({
                data: users,
                message: 'Successfully fetch filtered users',
                success: true,
                error: {}
            })
        } catch (error) {
            res.status(500).json({
                data: {},
                message: 'Internal server error',
                success: false,
                error: error
            })
        }
    }
}