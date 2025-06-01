import {z} from 'zod'

export const SignInPayload = z.object({
  email:z.string().email().min(1).max(255),
  password:z.string().min(8).max(255),
})

export type SignInProps = z.infer<typeof SignInPayload>



export const SignUpPayload = z.object({
  email:z.string().email().min(1).max(255),
  password:z.string().min(8).max(255),
  name:z.string().min(1).max(255).optional(),
})


export type SignUpProps = z.infer<typeof SignUpPayload>
