const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.get('/', async (req, res) =>{
  try{
    const user = await User.find();
    res.json(user);
  }catch (e) {
    res.json({message: e});
  }
});

router.post('/', async (req,res) =>{
  const user = new User({
    fisrt_name : req.body.fisrt_name,
    last_name: req.body.last_name,
    photo: req.body.photo,
    login: req.body.login,
    password: req.body.password,
    birthday: req.body.birthday,
    rooms: req.body.rooms,
    devices: req.body.devices
  });

  try{
    const savedUser = await user.save();
       res.json(savedUser);
  }catch (err){
    res.json({message: err});
  }
});

module.exports = router;




