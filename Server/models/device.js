
const mongoose = require("mongoose");

const DeviceModel = new mongoose.Schema({
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