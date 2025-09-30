import { useState } from 'react'
import './App.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom'

// Import components
import SignUp from './components/SignUp'
import Navbar from './components/Navbar.jsx'
import Login from './components/Login'
import Homepage from './components/Homepage.jsx'
import Detail from './components/Detail'
import Booking from './components/Booking'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/homepage/details/:id" element={<Detail />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
    </BrowserRouter>
   
  )
}

export default App
