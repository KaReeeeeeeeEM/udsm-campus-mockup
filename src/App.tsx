import { useState } from 'react'
import NavBar from './components/Navbar'
import BottomNav from './components/BottomNavigation'

function App() {
  const [] = useState(0)

  return (
    <div className='bg-black h-screen w-full'>
     <NavBar />
     <BottomNav className="fixed bottom-0 w-full left-0 text-white" />
    </div>
  )
}

export default App
