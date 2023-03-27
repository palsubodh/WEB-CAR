import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import './createcar.css'

const UpdateCar = () => {
  const [data,setData] = useState({})
  const [carname, setCarname] = useState("");
  const [brandname, setBrandname] = useState("");
  const [km, setKM] = useState("");
  const [files, setFiles] = useState("");
  const {id} = useParams()
 // console.log(id)
   
  const displayImage = (e) => {
    e.preventDefault();
    setFiles(e.target.files[0]);
  };

  let config = {
    headers: {
      "content-type": "multipart/form-data",
    },
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    if (carname === "" || brandname === "" || km === "") {
      window.alert("fill all the details");
    } else {
      let userDetails = {
        carname: carname,
        brandname: brandname,
        km: km,
        image: files,
      };

      axios
        .put(`http://localhost:5000/updatecar/${id}`, userDetails, config)
        .then((res) => setData(res.data.data))
        .catch((err) => console.log(err));
    }
  };
  return (
    <div>
      <form id="form2" onSubmit={handlesubmit}>
        <h2>Update Car Details</h2>
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
          onChange={(e) => {
            displayImage(e);
          }}
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

export default UpdateCar;
