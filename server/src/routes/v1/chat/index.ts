import { Router } from 'express'
import { UserService } from '../../../services/user-service';
import { customRequest, requestHeadersValidator } from '../../../middlewares/auth-validator';
import { ChatController } from '../../../controllers/chat-controller';

const router = Router()
const chatController = ChatController.getInstance()

router.get('/', requestHeadersValidator, chatController.getAllUsers);

export default router;