const mongoose = require("mongoose");

const UserModel = new mongoose.Schema({
    fisrt_name : String,
    last_name: String,
    photo: String,
    login: String,
    password: String,
    birthday: {
        type: Date
    },
    rooms: parseInt('String'),
    devices: parseInt('String')
});

module.exports = mongoose.model("source", UserModel);