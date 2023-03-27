import React from 'react'
import './Navbar.css'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate()

     function handlehome (){
        navigate('/')
    }
    function handlelogin (){
        navigate('/login')

    }
    function handleregister (){
        navigate('/register')

    }
    function handlemyCar (){
      navigate('/Mycar')

  }
  function handlelogout (){
    localStorage.removeItem("username")
    navigate('/login')
}

function handlelcreatecar (){
  navigate('/createcar')
}
  return (
    

<div id="navbar">
      <button onClick={handlehome}>Home</button>
        <button onClick={handlelogin}>Login</button>
        <button onClick={handleregister}>Register</button>
        <button onClick={handlemyCar}>Mycar</button>
        <button onClick={handlelogout}>Logout</button>
        <button onClick={handlelcreatecar}>CreateCar</button>
</div>
  )
}

export default Navbar