import {Route, Routes } from 'react-router-dom'
import { ThemeProvider } from './components/global/theme-provider'
import Home from './pages/Home'
import SignIn from './pages/auth/SignIn'
import NotFound from './pages/not-found'


function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/signin" element={<SignIn/>} />
      <Route path="/signin" element={<SignIn/>} />
      <Route path="*" element={<NotFound/>} />
      </Routes>
   
  </ThemeProvider>
  )
}

export default App
