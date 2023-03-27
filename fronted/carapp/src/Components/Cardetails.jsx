import React, { useEffect, useState } from 'react'
import { useNavigate, useParams, } from 'react-router-dom'

const Cardetails = () => {
  const navigate = useNavigate()
  
  const {id} = useParams()
  console.log(id)
  const [element,setData]= useState([])
  const getdata = ()=>{
    fetch(`http://localhost:5000/cardetails/${id}`)
    .then((response)=>response.json())
    .then((response)=>setData(response.data))
    .catch((err)=>console.log(err))
}

// const handleEdit=()=>{
//   fetch(`http://localhost:5000/updatecar/${id}`)
//   .then((response)=>response.json())
//   .then((response)=>setData(response.data))
//   .catch((err)=>console.log(err))
// }

function handleEdit (id){
  navigate(`/updatecar/${id}`)

}

useEffect(() => {
    getdata()
    
}, [])

  return (
    <div>
     
          <div >
            <img src={element.image} style={{height:"600px"}}></img>
            <h3>{element.carname}</h3>
            <h4>{element.brandname}</h4>
            <h5>{element.km}</h5>
            <button onClick={()=>handleEdit(element._id)}>Editcar</button>
          </div>
      
    </div>
  )
}

export default Cardetails