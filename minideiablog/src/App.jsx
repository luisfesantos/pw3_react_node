import './App.css'
import { BrowserRouter, Routes, Navigate, Form, Route } from 'react-router-dom'
import NavBar from './componentes/NavBar'
import Footer from './componentes/Footer'
import Login from './pages/Login/Login'
import Home from './pages/Home/Home'
import CreatePost from './pages/CreatePost/CreatePost'

function App() {

  return (
    <>
      <div>
        <BrowserRouter>
          <NavBar />
          <div className='container'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/post/create" element={<CreatePost />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
