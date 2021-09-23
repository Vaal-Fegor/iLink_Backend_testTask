const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    id: mongoose.ObjectId,
    name: {
        type: String
    },
    password: {
        type: String
    },
    email: {
        type: String
    },
    deleted: {
        type: Boolean,
        default: false
    },
    deletedAt: {
        type: Date,
        //default: " "
    }
} , {timestamps: true})


const user = mongoose.model('user', userSchema)
module.exports = user


