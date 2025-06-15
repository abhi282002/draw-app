import { getServerSession } from 'next-auth/next'

import { authOptions } from './auth'

export const getServerSideSession = async () => {
  return await getServerSession(authOptions)
}
