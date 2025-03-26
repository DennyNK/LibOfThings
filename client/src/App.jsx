import { Routes, Route } from 'react-router'

import './App.css'
import Footer from './components/footer/Footer.jsx'
import Header from './components/header/Header.jsx'
import Home from './components/home/Home.jsx'
import About from './components/about/About.jsx'
import Login from './components/login/Login.jsx'
import Register from './components/register/register.jsx'
import AddThings from './components/addThings/AddThings.jsx'
import Catalog from './components/catalog/Catalog.jsx'
import Search from './components/search/Search.jsx'
import { UserProvider } from './providers/UserProvider.jsx'
import Logout from './components/logout/Logout.jsx'
import AuthGuard from './components/guards/AuthGuard.jsx'
import ThingDetails from './components/thing-details/ThingDetails.jsx'
import ThingEdit from './components/thing-edit/ThingEdit.jsx'
import Profile from './components/profile/Profile.jsx'
import LoggedInGuard from './components/guards/LoggedInGuard.jsx'


function App() {

  return (
    <UserProvider>
    <div className="app-container">
    <Header />
    
 
    <div className="app-content">
      <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/catalog' element={<Catalog/>}></Route>
      <Route path='/search' element={<Search/>}></Route>
      <Route element={<AuthGuard />}>
        <Route path='/add' element={<AddThings/>}></Route>
        <Route path='/catalog/:thingId/details' element={<ThingDetails />}></Route>
        <Route path='/catalog/:thingId/edit' element={<ThingEdit />}></Route>
        <Route path='/profile' element={<Profile/>}></Route>
        <Route path='/logout' element={<Logout />} />
      </Route>
      <Route element={<LoggedInGuard/>}>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
      </Route>



      </Routes>
    </div>

    <Footer />
  </div>
  </UserProvider>
  )
}

export default App
