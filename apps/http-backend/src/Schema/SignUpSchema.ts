import {z} from 'zod'

const SignUpPayload = z.object({
  email:z.string().email().min(1).max(255),
  password:z.string().min(8).max(255),
  name:z.string().min(1).max(255),
})

export default SignUpPayload

