const express = require("express");
const router = express.Router();
const Device = require("../models/device");

router.get('/', async (req, res) =>{
  try{
    const device = await Device.find();
    res.json(device);
  }catch (e) {
    res.json({message: e});
  }
});

router.post('/', async (req,res) =>{
  const device = new Device({
    name : req.body.name,
    room: req.body.room,
    state: req.body.state,
    type: req.body.type,
    icon: req.body.icon,
    data: req.body.data,
    unit:req.body.unit
  });

  try{
    const savedDevices = await device.save();
    res.json(savedDevices);
  }catch (err){
    res.json({message: err});
  }
});

module.exports = router;




