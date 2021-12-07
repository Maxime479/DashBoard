
const mongoose = require("mongoose");



var ObjectID = require('mongodb').ObjectID;


// objId = new ObjectID(idString);

const DeviceModel = new mongoose.Schema({
    _id: ObjectID,
    name : String,
    room: String,
    state: Boolean,
    type: String,
    icon: String,
    data: parseInt('String'),
    unit:String
});

module.exports = mongoose.model("devices", DeviceModel);