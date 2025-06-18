import { z } from 'zod'

export const otpSchema = z.object({
    body: z.object({
        email: z.string().email(),
        email_type: z.string()
    })
})

export type otpInput = z.infer<typeof otpSchema>['body'];