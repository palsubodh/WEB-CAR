const express = require('express')
const router = express.Router()
const carController =  require('../controller/carController')
const userController = require('../controller/userController')


router.post("/register",userController.createauther)
router.post("/login",userController.login)


router.post("/createcar/:UserId",carController.createCar)
router.get("/getcars/:userId",carController.getAllCar)
router.get("/getcarbyuser/:userId",carController.getuserCar)
router.put("/updatecar/:carId",carController.updateCar)
router.get("/cardetails/:carId",carController.cardetails)




module.exports = router