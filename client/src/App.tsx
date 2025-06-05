import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Error from './pages/Error'
import Profile from './pages/Profile'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='*' element = {<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App




// / -> Marketing Page
// /login -> Login page
// /chat -> 
// /chat/:chat-id
// /profile
// /setting (optional)