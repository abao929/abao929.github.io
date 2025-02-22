import { useState, useEffect } from 'react'
// so i need to have fake data
// uh landing is just like my visited and rankings
// idk this seems to fit the mobile format well

export const Landing = () => {
  const [data, setData] = useState([])
  const getData = () => {
    fetch(`beli.json`).then((response) => {
      return response.json()
    })
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div>
      <div>Made</div>
      <div>Want to make</div>
      <div>create entry</div>
    </div>
  )
}
