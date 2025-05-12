'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import ChatInterface from '../../../components/ChatInterface'
import { getSession } from 'next-auth/react'

interface Session {
  user?: {
    id: string
    name?: string | null
    email?: string | null
    image?: string | null
  }
}

export default function ChatPage() {
  const params = useParams()
  const roomId = params.roomId as string
  const [userId, setUserId] = useState<string | null>(null)

  useEffect(() => {
    const fetchUser = async () => {
      const session = (await getSession()) as Session
      if (session?.user?.id) {
        setUserId(session.user.id)
      }
    }

    fetchUser()
  }, [])

  if (!userId) {
    return <div>Loading...</div>
  }

  return (
    <div className='h-screen flex flex-col'>
      <header className='p-4 border-b'>
        <h1 className='text-xl font-semibold'>Chat Room</h1>
      </header>
      <main className='flex-1'>
        <ChatInterface userId={userId} roomId={roomId} />
      </main>
    </div>
  )
}
