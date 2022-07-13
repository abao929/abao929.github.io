import React, { useEffect, useState } from 'react'

import Project from './Project'

const pathToImages = './assets/images/'

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState<Position>({
    x: 0,
    y: 0,
  })

  useEffect(() => {
    const updateMousePosition = (event: { clientX: any; clientY: any }) => {
      setMousePosition({ x: event.clientX, y: event.clientY })
    }
    window.addEventListener('mousemove', updateMousePosition)

    return () => window.removeEventListener('mousemove', updateMousePosition)
  }, [])
  return mousePosition
}

export default function Projects() {
  const [projectData, setProjectData] = useState<Project[]>([])
  const mousePosition = useMousePosition()
  const getProjectData = () => {
    fetch('temp.json')
      .then((response) => {
        return response.json()
      })
      .then((json: Project[]) => {
        json.map((project) => {
          project.img = `${pathToImages}${project.img}`
          return project
        })
        console.log(json)
        setProjectData(json)
      })
  }

  useEffect(() => {
    getProjectData()
  }, [])

  return (
    <div>
      {projectData.map((project, i) => (
        <Project key={i} {...project} {...mousePosition} number={i} />
      ))}
    </div>
  )
}
