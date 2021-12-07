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




