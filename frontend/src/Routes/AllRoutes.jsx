import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'; 
import Home from '../Pages/Home'
import Login from '../components/LoginSignUp/Login'
import SignUp from '../components/LoginSignUp/SignUp';
import Error from '../Pages/Error';
import UserOnboarding from '../components/LoginSignUp/UserOnboarding';
function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/home' element={<UserOnboarding/>}/>
        <Route path='/*' element={<Error/>}/>
      </Routes>
    </div>
  )
}

export default AllRoutes
