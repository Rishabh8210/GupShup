import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Error from './pages/Error'
// import Profile from './pages/Profile'
import Chat from './pages/Chat'
import { ChatScreen } from './components/Chat/chat-screen'
import { ChatHome } from './components/Chat/chat-home'
import NewChat from './pages/New Chat'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        {/* <Route path='/profile' element={<Profile />} /> */}
        <Route path="/chat" element={<Chat />}>
          <Route index element={<ChatHome />} />       
          <Route path=":roomId" element={<ChatScreen />} /> 
        </Route>
        <Route path='/new-chat' element={<NewChat />} />
        <Route path='*' element={<Error />} />
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