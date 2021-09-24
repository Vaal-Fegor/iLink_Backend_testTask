const { response } = require('express')
const user = require('../models/users')

const index = (req, res, next) => {
    user.find()
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message: 'An error occured'
        })
    })
}

const getById = (req, res, next) => {
    let userId = req.body.userId
    user.findById(userId)
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message: 'An error occured'
        })
    })
}

const getByName = (req, res, next) => {
    let username = req.body.username
    console.log(username)
    user.find({'name': username})
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message: 'An error occured'
        })
    })
}

const create = (req, res, next) => {
    let User = new user({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email
    })
    User.save()
    .then(response => {
        res.json({
            message: "User created succesfully"
        })
    })
    .catch(error => {
        res.json({
            message: 'An error occured'
        })
    })
}

const updateById = (req, res, next) => {
    let userId = req.body.userId
    let updatedData = {
        name: req.body.name,
        password: req.body.password,
        email: req.body.email
    }
    user.findByIdAndUpdate(userId, {$set: updatedData})
    .then(() => {
        res.json({
            message: "User updated succesfully"
        })
    })
    .catch(error => {
        res.json({
            message: 'An error occured'
        })
    })
}

const deleteById = (req, res, next) => {
    let userId = req.body.userId
    let deleteData = {
        deleted : true,
        deletedAt : new Date(),
    }
    user.findByIdAndUpdate(userId, {$set: deleteData})
    .then(() => {
        res.json({
            message: "User deleted succesfully"
        })
    })
    .catch(error => {
        res.json({
            message: 'An error occured'
        })
    })
}

module.exports = {
    index, getById, create, updateById, deleteById, getByName
}