import './App.css'
import Navbar from './components/NavigationBar';
import LandingPage from './pages/LandingPage'

function App() {

  return (
    <div className='w-full'>
      <div className='w-full bg-[#f7f7f7] sticky top-0 z-100'>
        <Navbar />
      </div>
      <div className='wrapper' >

        <LandingPage />
      </div>
    </div>

  )
}

export default App
