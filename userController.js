const express = require('express');
const router = express.Router();
const User = require('../models/userModel');

const addUser = async (req, res, next) => {
    try {
        const newUser = new User(req.body.id, req.body.name, req.body.email, req.body.password);
        await newUser.addUser(newUser); // Assuming addUser function saves the user
        res.send("User added successfully");
    } catch (err) {
        next(err);
    }
}

const updateUser = async (req, res, next) => {
    try {
        const reqId = Number(req.params.id);
        const result = await User.updateUser(reqId, req.body);
        res.send(result);
    } catch (err) {
        next(err);
    }
}

const getUser = async (req, res, next) => {
    try {
        const reqId = Number(req.params.id);
        const user = await User.getUser(reqId);
        res.send(user);
    } catch (err) {
        next(err);
    }
}

const deleteUser = async (req, res, next) => {
    try {
        const reqId = Number(req.params.id);
        await User.deleteUser(reqId);
        res.send("User deleted successfully");
    } catch (err) {
        next(err);
    }
}

module.exports = {
    addUser,
    getUser,
    deleteUser,
    updateUser,
};
