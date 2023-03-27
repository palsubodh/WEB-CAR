import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './mycar.css'

const Mycar = () => {
  const navigate = useNavigate()
    const [data,setData]= useState([])
    const username = localStorage.getItem("username")
      const getdata = ()=>{
          fetch(`http://localhost:5000/getcarbyuser/${username}`)
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
    <div id='mycontainer' >
        {data.map((element)=>(
          <div id='mycontainer2' onClick={()=>handleClick(element._id)} key={element._id}>
            <img src={element.image}></img>
            <h3>{element.carname}</h3>
            <h4>{element.brandname}</h4>
            <h5>{element.km}</h5>
            <button>Editcar</button>
          </div>

        ))}
    </div>
  )
}

export default Mycar