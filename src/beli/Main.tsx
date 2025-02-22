import { ThemeProvider } from 'styled-components'
import { Routes, Route } from 'react-router-dom'
import { Landing } from './Landing'

const Theme = {
  color: {
    primary: '#000',
  },
}

export const Main = () => {
  return (
    <ThemeProvider theme={Theme}>
      <Routes>
        <Route path='/' element={<Landing />} />
      </Routes>
    </ThemeProvider>
  )
}
