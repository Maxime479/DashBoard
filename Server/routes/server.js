const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.get('/', (req, res) =>{
    res.send('we are post');
});

router.post('/', (req,res) =>{
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

    user.save()
        .then(data => {
            res.json(data);
        })
        .catch(err =>{
            res.json({message: err});
        });

});

module.exports = router;




