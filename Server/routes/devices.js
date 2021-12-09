const express = require("express");
const router = express.Router();
const Device = require("../models/device");
const User = require("../models/user");

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
    type: req.body.type,
    icon: req.body.icon,
    data: req.body.data,
    unit:req.body.unit,
    stored_data: req.body.stored_data,
    state: req.body.state
  });

  try{
    const savedDevices = await device.save();
    const PushData = await device.stored_data.push(donne);
    res.json(savedDevices);
    res.json(PushData);
  }catch (err){
    res.json({message: err});
  }
});

router.get('/:deviceID', async (req, res) => {

  try {
    const device = await Device.findById(req.params.deviceID);

    res.json(device);
  }catch (err) {
    res.json({message:err});
  }
});

router.delete('/:deviceID', async (req, res) => {
  try {
    const removeDevice = await Device.remove({_id: req.params.deviceID});
    res.json(removeDevice);
  }catch (err) {
    res.json({message:err});
  }
});

router.put('/:deviceID', async (req, res) => {
  try {
    const updatedDevice = await Device.updateOne(
        {_id: req.params.deviceID},
        {$set: {state: req.body.state}}
    );
    res.json(updatedDevice);
  }catch (err) {
    res.json({message:err});
  }
});

// router.put('/state', async (req,res) =>{
//
//
//   const id = req.body.id;
//   const state = req.body.state;
//
//   console.log("Data get");
//   console.log(id);
//   console.log(state);
//   console.log("Data get");
//
//
//   // try{
//
//     const device = await Device.find({_id: id});
//
//     console.log("Found");
//     console.log(device);
//     console.log("Found");
//
//
//     device.state = state;
//     console.log("mark1");
//
//     console.log("Modified");
//     console.log(device);
//     console.log("Modified");
//
//
//
//     Device.updateOne({_id: req.params.id}, device).then(
//         () => {
//           res.status(201).json({
//             message: 'Device updated successfully!'
//           });
//         }
//     ).catch(
//         (error) => {
//           res.status(400).json({
//             error: error
//           });
//         }
//     );
//
//
//
//   //   res.status(200).json({
//   //     message: "state updated successfully",
//   //   });
//   // }catch (err){
//   //   res.status(400).json({message: err});
//   //   console.log("Change State Error")
//   // }
// });

module.exports = router;




