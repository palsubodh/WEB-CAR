import React, { useState } from 'react'
import './register.css'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const nevigate = useNavigate()
    const [firstname,setfirstName] = useState("")
    const [lastname,setLastname] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [city,setCity] = useState("")
    
    
    const handlesubmit = (e) => {
        e.preventDefault()
        if (firstname === "" || lastname === "" || email === "" || password === "" || city === "") {
          window.alert("fill all the details")
        }
        else{
            let userDetails={
                fname:firstname,
                lname:lastname,
                email:email,
                password:password,
                city:city
        
            }
    
        fetch("http://localhost:5000/register", {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userDetails)
        })
          .then((res) => res.json())
          .then((res) => console.log(res))
          .catch((err) => console.log(err))}
          window.alert("Registration Sucessfull")
        nevigate('/login')
      }

  return (
    <div>
        <form id='form2' onSubmit={handlesubmit}>
            <h2>Create Account</h2>
            <label>Your FirstName </label> <br/>
            <input id='name' type='text' placeholder='Enter your FirstName' onChange={(e)=>setfirstName(e.target.value)}/>
            <br/>
            <label>Your LastName </label> <br/>
            <input id='lname' type='text' placeholder='Enter your LastName' onChange={(e)=>setLastname(e.target.value)}/> <br/>
            <label>Email</label> <br/>
            <input id='email' type='email' placeholder='Enter your Email'   onChange={(e)=>setEmail(e.target.value)} /> <br/>
            <label>Password</label> <br/>
            <input id='pass' type='Password' placeholder='Enter your Password' onChange={(e)=>setPassword(e.target.value)}/> <br/>
            <label>City</label> <br/>
            <input id='city' type='text' placeholder='Enter your city' onChange={(e)=>setCity(e.target.value)}/> <br/>
            <input type='submit' value={"Register"}/>
        </form>
    </div>
  )
}

export default Register