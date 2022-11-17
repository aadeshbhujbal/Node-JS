const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userDetails = new Schema({
    username: {
    type: String,
    required: true,
    },
    password: {
    type: String,
    required: true,
    },
    country: {
        type: String,
        required: true,
        default: 'IN',
    },
    age: {
        type: Number,
        required: true,
    },
    coins: {
        type: Number,
        required: true,
    },
    gems: { 
        type: Number,
        required: true,
    },
    game_level: {
        type: Number,
        required: true,
    },
    purchaser: {
        type: Boolean,
    },
})
const userData=mongoose.model("userData",userDetails);
module.exports = userData;

