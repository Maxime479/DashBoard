
const mongoose = require("mongoose");



var ObjectID = require('mongodb').ObjectID;


// objId = new ObjectID(idString);

const DeviceModel = new mongoose.Schema({
    _id: ObjectID,
    name : String,
    room: String,
    type: String,
    icon: String,
    data: parseInt('String'),
    unit:String,
    stored_data:[{
        time: Date,
        data: parseInt('String')
}],
    state: Boolean
});

module.exports = mongoose.model("devices", DeviceModel);