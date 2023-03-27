import React, { useState } from "react";
import axios from "axios"
import "./createcar.css"

const CreateCar = () => {
  const [data,setData] = useState({})
  const [carname, setCarname] = useState("");
  const [brandname, setBrandname] = useState("");
  const [km, setKM] = useState("");
  const [imagefile, setImageFile] = useState(null);

  const token = localStorage.getItem("psc_app_token");
  const username = localStorage.getItem("username");


  const displayImage = (e) => {
    e.preventDefault()
    setImageFile(e.target.files[0])

    }


  let config = {
    headers: {
      "authorization":token,
      "content-type": "multipart/form-data",
    },
  };

  const handlesubmit = async (event) => {
    event.preventDefault();

    if (carname === "" || brandname === "" || km === "") {
      window.alert("fill all the details");
    } else {
      let userDetails = {
        carname: carname,
        brandname: brandname,
        km: km,
        image: imagefile,
      };
      console.log(userDetails);

      axios
        .post(
          `http://localhost:5000/createcar/${username}`,
          userDetails,
          config
        )
        .then((res) => setData(res.data.data))
        .catch((err) => console.log(err));
    }
  };
 
  return (
    <div>
      
      <form id="form2" onSubmit={handlesubmit}>
      <h2>Create Your Car</h2>
        <input
        type="text"
          placeholder="Enter your carname"
          onChange={(e) => setCarname(e.target.value)}
        />
        <input
        type="text"
          placeholder="Enter your brandname"
          onChange={(e) => setBrandname(e.target.value)}
        />
        <input
        type="number"
          placeholder="Enter your KM"
          onChange={(e) => setKM(e.target.value)}
        />
        <input
          placeholder="Upload your car picture"
          type="file"
          
          onChange={(e)=>{displayImage(e)}}
         
        />
        <input type="submit" />
      </form>

      <div>
        <img src={data.image} />
        <h3>{data.carname}</h3>
        <h4>{data.brandname}</h4>
        <h5>{km}</h5>
      </div>
    </div>
  );
};

export default CreateCar;
