  import { Routes, Route } from 'react-router'

import './App.css'
import Footer from './components/footer/Footer.jsx'
import Header from './components/header/Header.jsx'
import Home from './components/home/Home.jsx'
import About from './components/about/About.jsx'
import Login from './components/login/Login.jsx'

function App() {

  return (
    <div className="app-container">
    <Header />
    
 
    <div className="app-content">
      <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/login' element={<Login/>}></Route>


      </Routes>
    </div>

    <Footer />
  </div>
  )
}

export default App
