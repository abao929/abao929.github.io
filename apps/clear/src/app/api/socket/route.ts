import { Server } from 'socket.io'
import { NextApiRequest, NextApiResponse } from 'next'

const ioHandler = (req: NextApiRequest, res: NextApiResponse) => {
  if (!res.socket.server.io) {
    console.log('New Socket.io server...')
    // adapt Next's net Server to http Server
    const httpServer = res.socket.server as any
    const io = new Server(httpServer, {
      path: '/api/socket',
      addTrailingSlash: false,
    })

    // append Socket.IO server to Next.js socket server
    res.socket.server.io = io

    io.on('connection', (socket) => {
      console.log('Client connected')

      socket.on('join-room', (roomId: string) => {
        socket.join(roomId)
        console.log(`User joined room: ${roomId}`)
      })

      socket.on('typing', (roomId: string, userId: string) => {
        socket.to(roomId).emit('user-typing', userId)
      })

      socket.on(
        'message',
        (message: { roomId: string; content: string; userId: string }) => {
          socket.to(message.roomId).emit('new-message', message)
        }
      )

      socket.on('disconnect', () => {
        console.log('Client disconnected')
      })
    })
  }
  res.end()
}

export const GET = ioHandler
export const POST = ioHandler
