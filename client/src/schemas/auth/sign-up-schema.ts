import { z } from 'zod'

export const signupSchema = z.object({
    email_type: z.string(),
    email: z.string().email(),
    password: z.string().min(3).max(12),
})

export type signupInput = z.infer<typeof signupSchema>;