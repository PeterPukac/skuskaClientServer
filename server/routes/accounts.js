const express = require('express');
const fs = require('fs');
const jsonFile = require('../db.json');
const arrayCustomers = jsonFile;
const router = express.Router();

router.get("/", (req,res)=>{
    console.log('get request has come');  
    res.json(arrayCustomers);
});

router.post("/add",(req,res)=>{
    let lastID = arrayCustomers[arrayCustomers.length-1].id;
    lastID++;
    const postData = req.body;
    const newCustomer = {
        "name":postData.name,
        "password":postData.password,
        "group":postData.group,
        "text":postData.text,
        "id":lastID
        };
    arrayCustomers.push(newCustomer);
    console.log(arrayCustomers);
    fs.writeFile('./db.json',JSON.stringify(arrayCustomers),(err)=>{
    }); 
    res.send("Account has been added.")            
})

module.exports = router;