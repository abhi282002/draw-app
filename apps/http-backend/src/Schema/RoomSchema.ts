import {z} from 'zod'


const RoomPayload = z.object({
  slug: z.string().min(4).max(255),
})

export default RoomPayload
