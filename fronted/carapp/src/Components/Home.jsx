import React, { useEffect, useState ,} from 'react'
import { useNavigate } from 'react-router-dom'
import './home.css'

const Home = () => {
  const navigate = useNavigate()
  const [data,setData]= useState([])
  const username = localStorage.getItem("username")
    const getdata = ()=>{
        fetch(`http://localhost:5000/getcars/${username}`)
        .then((response)=>response.json())
        .then((response)=>setData(response.data))
        .catch((err)=>console.log(err))
    }
    useEffect(() => {
        getdata()
      
    }, [])
     
    const handleClick = (id)=>{
      navigate(`/cardetails/${id}`)
    }
  return (
    <div id='containerhome' >
        {data.map((element)=>(
          
          <div id='containerhome2' onClick={()=>handleClick(element._id)} key={element._id}>
            <img src={element.image}></img>
            <h3>{element.carname}</h3>
            <h4>{element.brandname}</h4>
            <h5>{element.km}</h5>
            
          
          </div>
        
        ))}
    </div>
  )
}

export default Home