import { useEffect, useRef } from 'react'
import { io, Socket } from 'socket.io-client'

export const useSocket = () => {
  const socketRef = useRef<Socket>()

  useEffect(() => {
    // Initialize socket connection
    socketRef.current = io({
      path: '/api/socket',
    })

    // Cleanup on unmount
    return () => {
      if (socketRef.current) {
        socketRef.current.disconnect()
      }
    }
  }, [])

  return socketRef.current
}
