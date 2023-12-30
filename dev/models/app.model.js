const mongoose = require('mongoose');

const appSchema = new mongoose.Schema({
    name: {type: String, required: true, unique: true},
    projectLink: {type: String, required: true},
    description: {type: String, required: true, unique: true},
},{
    timestamp:true,
})

const Apps = mongoose.model("Apps",appSchema);

module.exports = {Apps};