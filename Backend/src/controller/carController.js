const uploadFile = require("./aws");
const carModel = require("../Model/carModel");

const createCar = async (req, res) => {
  try {
    let data = req.body;
    let files = req.files;
    let userId = req.params.UserId;
    data.userId = userId;
    if (files) {
      let uploadedFileURL = await uploadFile(files[0]);
      data.image = uploadedFileURL;
    }
    let store = await carModel.create(data);
    res.status(201).send({ status: true, data: store });
  } catch (err) {
    res.status(500).send({ status: false, message: err.message });
  }
};

const getAllCar = async (req, res) => {
  try {
    let data = req.params.userId;

    let finddata = await carModel.find({ userId: { $nin: [data] } });

    res.status(200).send({ status: true, data: finddata });
  } catch (err) {
    res.status(500).send({ status: false, message: err.message });
  }
};

const getuserCar = async (req, res) => {
  try {
    let data = req.params.userId;

    let finddata = await carModel.find({ userId: data });

    res.status(200).send({ status: true, data: finddata });
  } catch (err) {
    res.status(500).send({ status: false, message: err.message });
  }
};

const updateCar = async (req, res) => {
  try {
    let carId = req.params.carId;
    let data = req.body;
    let updateData = await carModel.findOneAndUpdate({ _id: carId }, data);
    res.status(200).send({ status: true, data: updateData });
  } catch (err) {
    res.status(500).send({ status: false, message: err.message });
  }
};

const cardetails = async (req, res) => {
  try {
    let carId = req.params.carId;
    let data = await carModel.findById(carId);
    res.status(200).send({ status: true, data: data });
  } catch (err) {
    res.status(500).send({ status: false, message: err.message });
  }
};
module.exports = { createCar, getAllCar, getuserCar, updateCar, cardetails };
