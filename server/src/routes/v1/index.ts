import { Router } from "express";
import authRoutes from './auth'
import chatRoutes from './chat'
import userRoutes from './user'
const router = Router()

router.use('/auth', authRoutes);
router.use('/chats', chatRoutes);
router.use('/users', userRoutes);

export default router;