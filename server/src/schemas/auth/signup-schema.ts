import { z } from 'zod'

export const signupUserSchema = z.object({
    body: z.object({
        name: z.string().optional(),
        email: z.string().email(),
        email_type: z.string(),
        password: z.string().min(6),
        phone_number: z.string().optional(),
        country_code: z.number().optional(),
        bio: z.string().optional(),
        profile_pic: z.string().optional()
    })
})

export type SignupUserInput = z.infer<typeof signupUserSchema>['body'];