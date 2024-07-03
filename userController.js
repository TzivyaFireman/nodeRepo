

const express = require('express');
const router = express.Router()
const categories = require('../data/allProducts.json')
const Product = require('../models/product');
const fs = require('fs');
const fsPromises = fs.promises;
const productService = require('../services/productsService');
const { ProductModel } = require('../services/dbConnection');
const mongoose = require('mongoose');




const addUser = async (req, res, next) => {
    try {
        const reqName = req.params.categoryName;
        let newProduct = new Product(req.body.id, req.body.productName, z, req.body.area, req.body.phoneNumber);
        newProduct.save(req.params.categoryName);
        res.send("user added successfully");
    }
    catch (err) {
        next(err);
    }
}


const updateUser = async (req, res) => {
    const reqName = req.params.categoryName;
    const products = await productService.getByCategoryName(reqName);
    res.send(products);
}


const getUser = (req, res) => {
    const reqId = Number(req.params.id);
    const reqName = req.params.categoryName;
    const index = categories.indexOf(categories.find(c => c.categoryName === reqName));
    const product = categories[index].products.find(p => p.id === reqId);
    res.send(product);
}



const deleteUser = async (req, res, next) => {
    const products = await ProductModel.findOne({ categoryName: req.params.categoryName }).select({ _id: 0, products: 1 }).exec();
    const index = products.products.findIndex(p => p.id == req.params.id)
    products.products[index] = req.body;
    await ProductModel.updateOne({ categoryName: req.params.categoryName }, products);
    res.send("user updated!");
}






module.exports = {
    addUser,
    getUser,
    deleteUser,
    updateUser,
    
};


