import {z} from 'zod';

const registerPayload = z.object({
    firstName: z.string().min(2),
    lastName: z.string().optional(),
    email: z.email(),
    password: z.string().min(6),
})

const loginPayload = z.object({
    email: z.email(),
    password: z.string().min(6),
})

export {registerPayload, loginPayload};