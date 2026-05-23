import {Route, Routes} from 'react-router-dom'

import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import Profile from './components/Profile.jsx'
import Project from './components/Project.jsx'
import Card from './components/Card.jsx'
import CursorDiv from './components/CursorDiv.jsx'



function App() {
  
  return (
    <>
    <CursorDiv/>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/projects' element={<Project/>}></Route>
      <Route path='/profiles' element={<Profile/>}></Route>
      <Route path='/card' element={<Card/>}></Route>
    </Routes>
      
    </>
  )
}


export default App
