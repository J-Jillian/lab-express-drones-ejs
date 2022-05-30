// Iteration #1

const {model, Schema, default: mongoose} = require ('mongoose');





const dronSchema = new mongoose.Schema({
name: String,
propellers : Number,
maxSpeed: Number
});

const DroneModel = model ("drone", dronSchema);
module.exports = DroneModel;
