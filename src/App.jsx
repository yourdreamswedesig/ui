import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './components/NavigationBar';
import LandingPage from './pages/LandingPage'

function App() {

  return (
    <div className='w-full'>
      <Navbar />
      <div className='wrapper' >

        <LandingPage />
      </div>
    </div>

  )
}

export default App
