const express = require("express");
const router = express.Router();
const Device = require("../models/device");
const User = require("../models/user");

router.get('/', async (req, res) => {
    try {
        const device = await Device.find();

        res.json(device);
    } catch (error) {
        res.status(400).json({
            message:"/!\\ ERROR, can't get the devices informations/!\\" ,
            error
        });
    }
});

router.post('/', async (req, res) => {
    const device = new Device({
        name: req.body.name,
        room: req.body.room,
        type: req.body.type,
        icon: req.body.icon,
        data: req.body.data,
        unit: req.body.unit,
        stored_data: req.body.stored_data,
        state: req.body.state
    });

    try {
        const savedDevices = await device.save();
        const PushData = await device.stored_data.push();

        res.status(200).json({
            message: "Device added to BDD",
            savedDevices, PushData
        });
    } catch (error) {
        res.status(400).json({
            message:"/!\\ ERROR /!\\" ,
            error
        });
    }
});

router.get('/:deviceID', async (req, res) => {

    try {
        const device = await Device.findById(req.params.deviceID);

        res.status(200).json({device});
    } catch (error) {
        res.status(400).json({
            message:"/!\\ ERROR /!\\" ,
            error
        });
    }
});

router.delete('/:deviceID', async (req, res) => {
    try {
        const removeDevice = await Device.remove({_id: req.params.deviceID});
        res.status(200).json(removeDevice);
    } catch (error) {
        res.status(400).json({
            message:"/!\\ ERROR /!\\" ,
            error
        });
    }
});

router.put('/:deviceID', async (req, res) => {
    try {
        const updatedDevice = await Device.updateOne(
            {_id: req.params.deviceID},
            {
                $set: {
                    name: req.body.name,
                    room: req.body.room,
                    type: req.body.type,
                    icon: req.body.icon,
                    data: req.body.data,
                    unit: req.body.unit,
                    stored_data: req.body.stored_data,
                    state: req.body.state
                }
            }
        );
        res.status(200).json(updatedDevice);
    } catch (error) {
        res.status(400).json({
            message:"/!\\ ERROR /!\\" ,
            error
        });
    }
});

module.exports = router;




