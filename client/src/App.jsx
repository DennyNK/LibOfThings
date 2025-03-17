
import './App.css'
import Footer from './components/footer/Footer.jsx'
import Header from './components/header/Header.jsx'
import { Routes, Route } from 'react-router'
import Home from './components/home/Home.jsx'

function App() {

  return (
    <div className="app-container">
    <Header />
    
 
    <div className="app-content">
      <Routes>
      <Route path='/' element={<Home/>}></Route>
      </Routes>
    </div>

    <Footer />
  </div>
  )
}

export default App
