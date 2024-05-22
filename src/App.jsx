import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './components/Sidebar'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
import { Header } from './components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Sidebar />
      <div className='ml-60'>
      <Header />
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default App
