const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.get('/', async (req, res) => {
    try {
        const user = await User.find();
        res.json(user);
    } catch (e) {
        res.json({message: e});
    }
});

router.post('/', async (req, res) => {
    const user = new User({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        photo: req.body.photo,
        login: req.body.login,
        password: req.body.password,
        birthday: req.body.birthday,
        rooms: req.body.rooms,
        devices: req.body.devices,
        privileges: req.body.privileges
    });

    try {
        const savedUser = await user.save();
        res.json(savedUser);
    } catch (err) {
        res.json({message: err});
    }
});

router.get('/:userID', async (req, res) => {

    try {
        const user = await User.findById(req.params.userID);

        res.json(user);
    }catch (err) {
        res.json({message:err});
    }
});

router.delete('/:userID', async (req, res) => {
    try {
        const removeUser = await User.remove({_id: req.params.userID});
        res.json(removeUser);
    }catch (err) {
        res.json({message:err});
    }
});

router.patch('/:userID', async (req, res) => {
    try {
        const updatedUser = await User.updateOne(
            {_id: req.params.userID},
            {$set: {first_name: req.body.first_name, last_name: req.body.last_name}}
        );
        res.json(updatedUser);
    }catch (err) {
        res.json({message:err});
    }
});

module.exports = router;




