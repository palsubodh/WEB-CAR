import React ,{useState}from 'react'
import './login.css'
import { useNavigate } from 'react-router-dom'

const Login = () => {
 const navigate = useNavigate()
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  
  
  const handlesubmit = (e) => {
      e.preventDefault()
      if ( email === "" || password === "" ) {
        window.alert("fill all the details")
      }
      else{
          let userDetails={
              email:email,
              password:password,
      
          }
          //console.log(userDetails)
  
      fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userDetails)
      })
        .then((res) => res.json())
        .then((res) => {
        console.log(res.data)
        if (res.token) {
          localStorage.setItem("psc_app_token", res.token)
          localStorage.setItem("username", res.data._id)
          navigate('/')
         
      }
        
      })
        .catch((err) => console.log(err))}
        
    }


return (
  <div>
      <form id='form2' onSubmit={handlesubmit}>
          <h2>Login</h2>
          <label>Email</label> <br/>
          <input id='email' type='email' placeholder='Enter your Email'   onChange={(e)=>setEmail(e.target.value)} /> <br/>
          <label>Password</label> <br/>
          <input id='pass'  type="password" placeholder='Enter your Password' onChange={(e)=>setPassword(e.target.value)}/>
          <input type='submit' value={"Login"}/>
      </form>
  </div>
)
}

export default Login