import { Router } from "express";
import { requestHeadersValidator } from "../../../middlewares/auth-validator";
import { UserController } from "../../../controllers/user-controller";

const router = Router()
const userController = UserController.getInstance();

router.get('/:id', requestHeadersValidator, userController.getUserById);

export default router