const mongoose = require('mongoose');

const prsn = new mongoose.Schema({
    id:String,
    name:String,
    age:String,
    role:String,
});

module.exports = mongoose.model("Person", prsn);