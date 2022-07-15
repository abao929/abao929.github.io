export {}

declare global {
  interface Project {
    title: string
    number: number
    img: string
    year: string
    description: string
    link: string
  }

  interface Position {
    x: number
    y: number
  }

  interface Font {
    weight: number
    size: string
    family: string
  }
}
