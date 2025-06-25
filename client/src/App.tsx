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
import { SocketProvider } from './context/socket-context'
import { Analytics } from '@vercel/analytics/react'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          {/* <Route path='/profile' element={<Profile />} /> */}
          <Route
            path="/chat"
            element={
              <SocketProvider>
                <Chat />
              </SocketProvider>
            }>
            <Route index element={<ChatHome />} />
            <Route path=":roomId" element={<ChatScreen />} />
          </Route>
          <Route path='/new-chat' element={<NewChat />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>
      <Analytics />
    </>
  )
}

export default App




// / -> Marketing Page
// /login -> Login page
// /chat -> 
// /chat/:chat-id
// /profile
// /setting (optional)