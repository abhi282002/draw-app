import {z} from 'zod'

const SignInPayload = z.object({
  email:z.string().email().min(1).max(255),
  password:z.string().min(8).max(255),
})

export default SignInPayload

