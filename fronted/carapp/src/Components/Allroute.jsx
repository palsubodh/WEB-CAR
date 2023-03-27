import React from 'react'
import Home from './Home'
import { Route, Routes } from 'react-router-dom'
import Register from './Register'
import Login from './Login'
import CreateCar from './CreateCar'
import Cardetails from './Cardetails'
import Mycar from './Mycar'
import UpdateCar from './updateCar'




const Allroute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/createcar"  element={<CreateCar/>}/>
        <Route path="/cardetails/:id"  element={<Cardetails/>}/>
        <Route path="/updatecar/:id"  element={<UpdateCar/>}/>
        <Route path="/mycar"  element={<Mycar/>}/> 
      </Routes>
    </div>
  )
}

export default Allroute