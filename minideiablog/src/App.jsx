import './App.css'
import { BrowserRouter, Routes, Route, Navigate, Form } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import { onAuthStateChanged } from 'firebase/auth'
import { useAuthentication } from './hooks/useAuthentication'

import NavBar from './componentes/NavBar'
import Footer from './componentes/Footer'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import CreatePost from './pages/CreatePost/CreatePost'
import Register from './pages/Register/Register'
import About from './pages/About/About'
import Dashboard from './pages/Dashboard/Dashboard'
import loading from '/loading.gif'
import { useEffect, useState } from 'react'

function App() {
  const [ user, setUser ] = useState(undefined)
  const { auth } = useAuthentication()

  const loadingUser = user === undefined

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      setUser(user)
    })
  }, [auth])

  if (loadingUser) {
    return <div className='container load'><img src={loading} width='120px' height='120px' alt='Loading Gif IdeiaBlog' /></div>
  }
  return (
    <>
      <AuthProvider value={{ user }}>
        <div>
          <BrowserRouter>
            <NavBar />
            <div className='container'>
              <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/login' element={<Login />}></Route>
                <Route path='/register' element={<Register />}></Route>
                <Route path='/post/create' element={<CreatePost />}></Route>
                <Route path='/about' element={<About />}></Route>
                <Route path='/dashboard' element={<Dashboard />}></Route>
              </Routes>
            </div>
            <Footer />
          </BrowserRouter>
        </div>
      </AuthProvider>
    </>
  )
}

export default App