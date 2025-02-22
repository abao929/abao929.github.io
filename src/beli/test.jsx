import React, { useState } from 'react'

export const Clock = () => {
  const increment = () => setCount(count + 1)
  const [count, setCount] = useState(0)
  return (
    <div>
      <button onClick={increment}></button>
      <h2>current count: {count}</h2>
    </div>
  )
}
