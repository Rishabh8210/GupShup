import { Router } from 'express'
import v1ApiRoutes from './v1'
const router = Router()

router.use('/v1', v1ApiRoutes)

router.get('/hello', (req, res) => {
    res.status(200).json({message: "Hello World"})
})

export default router