import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'; 
import Home from '../Pages/Home'
import Login from '../components/LoginSignUp/Login'
import SignUp from '../components/LoginSignUp/SignUp';
function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
      </Routes>
    </div>
  )
}

export default AllRoutes
