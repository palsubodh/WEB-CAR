const userModel = require('../Model/userModel')
const jwt = require("jsonwebtoken")

const createauther = async function (req, res) {
    try { 
      let data = req.body;
      const { fname, lname, city, email,password } = data;
      if(Object.keys(data).length==0)  return res.status(400).send({status:false,msg:"request body is Empty"})
      if (!fname)  return res.status(400).send({ status: false, msg: "fname is required" });
      if (!lname)  return res.status(400).send({ status: false, msg: "lname is required" });
      if (!city)  return res.status(400).send({ status: false, msg: "city is required" });
      if (!email)  return res.status(400).send({ status: false, msg: "email is required" });
      if (!password)  return res.status(400).send({ status: false, msg: "password is required" });
      let uniqueEmail= await userModel.findOne({email:email})
      if(uniqueEmail)  return res.status(400).send({status:false,message:"email is already exist"})
  
      let savedData = await userModel.create(data);
      return res.status(201).send({status:true,data: savedData });
    } catch (error) {
      return res.status(500).send({ status: false, msg: error.message });
    }
  };


const login = async function(req,res){

    try{
        const{email,password}=req.body
        const fetchdata = await userModel.findOne({email:email,password:password})
        if(fetchdata==null) return res.status(401).send({status:false,msg:"Doesn't match the email and password"})
        const mytoken = jwt.sign({email:email,id:fetchdata._id},"Subodh@123")
        res.status(200).send({status:true,token:mytoken,data:fetchdata})
    }
    catch(err)
    {
        res.status(500).send({status:false,msg:err.message})
    }
}


module.exports ={createauther,login}