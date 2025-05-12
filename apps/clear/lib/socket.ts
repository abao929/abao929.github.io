import { Server } from 'socket.io'
import { Server as NetServer } from 'http'
import { PrismaClient } from '../src/generated/prisma'

const prisma = new PrismaClient()

export const initSocket = (server: NetServer) => {
  const io = new Server(server, {
    cors: {
      origin: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
      methods: ['GET', 'POST'],
    },
  })

  io.on('connection', (socket) => {
    console.log('User connected:', socket.id)

    socket.on('join_room', async ({ userId }: { userId: string }) => {
      console.log(`User ${userId} connected`)

      // Fetch user's messages
      const messages = await prisma.message.findMany({
        where: { userId },
        orderBy: { createdAt: 'asc' },
      })

      socket.emit('room_messages', messages)
    })

    socket.on(
      'send_message',
      async ({ content, userId }: { content: string; userId: string }) => {
        try {
          // Save message to database
          const message = await prisma.message.create({
            data: {
              content,
              userId,
            },
          })

          // Broadcast message to all users
          io.emit('new_message', message)
        } catch (error) {
          console.error('Error sending message:', error)
        }
      }
    )

    socket.on('disconnect', () => {
      console.log('User disconnected:', socket.id)
    })
  })

  return io
}
