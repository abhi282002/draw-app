import type { DefaultSession } from 'next-auth';


declare module 'next-auth/jwt' {
  type JWT = {
    name?: string | null
    email?: string | null
    token?: string | null
    id?: string
  }
}

declare module 'next-auth' {
  interface Session {
    user: {
      id: string
      token: string
    } & DefaultSession['user']
  }
}
