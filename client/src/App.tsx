import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Home from './pages/Home'
import Error from './pages/Error'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
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