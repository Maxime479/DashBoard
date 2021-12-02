const mongoose = require("mongoose");

const UserModel = new mongoose.Schema({
    fisrt_name : String,
    last_name: String,
    photo: String,
    login: String,
    password: String,
    birthday: parseInt('String'),
    rooms: parseInt('String'),
    devices: parseInt('String')
});


const User = mongoose.model("User", UserModel);


module.exports = User;