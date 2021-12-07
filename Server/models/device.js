const mongoose = require("mongoose");

const DeviceModel = new mongoose.Schema({
    name : String,
    room: String,
    state: Boolean,
    type: String,
    icon: String,
    data: parseInt('String'),
    unit:String
});

module.exports = mongoose.model("devices", DeviceModel);