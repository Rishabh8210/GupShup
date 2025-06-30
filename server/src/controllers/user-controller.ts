import { UserService } from "../services/user-service";
import { Request, Response } from "express";

export class UserController {
    private userService: UserService;
    private static instance: UserController;

    private constructor(){
        this.userService = UserService.getInstance();
    }

    static getInstance(){
        if(!this.instance){
            this.instance = new UserController();
        }

        return this.instance;
    }

    getUserById = async(req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const user = await this.userService.getUserById(id);
            res.status(200).json({
                data: user,
                message: 'Successfully fetch user data',
                success: true,
                error: null
            })
        } catch (error) {
            res.status(200).json({
                data: null,
                message: 'Failed to fetch user data',
                success: false,
                error: error
            })
        }
    }
}