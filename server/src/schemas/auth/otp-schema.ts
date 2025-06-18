import { z } from 'zod'

export const otpSchema = z.object({
    body: z.object({
        email: z.string().email(),
        email_type: z.string()
    })
})

export type otpInput = z.infer<typeof otpSchema>['body'];

export const validOtpSchema = z.object({
    body: z.object({
        email: z.string().email(),
        entered_otp: z.string().length(8)
    })
})

export type validOtpInput = z.infer<typeof validOtpSchema>['body'];