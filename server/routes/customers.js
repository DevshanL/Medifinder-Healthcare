const express = require('express');

const Customers = require('../models/customer');

const router = express.Router();

//save customer
router.post('/customer/save', (req,res) =>{

    let newCustomer = new Customers(req.body);

    newCustomer.save((err) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Customer Added Successfully"
        });
    });
});

//get customer
router.get('/customer',(req,res) =>{
    Customers.find().exec((err,customer) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingPosts:customer
        });
    });
});

//get a spesific customer
router.get('/customer/:id',(req,res) =>{
    let customerid =req.params.id;

    Customer.findById(customerid,(err,customer) =>{
        if(err){
            return res.status(400).json({success:false, err});
        }

        return res.status(200).json({
            success:true,
            customer
        });

    });
});

//update customer
router.put('/customer/updatecustomer/:id',(req,res)=>{
    Customer.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,customer)=>{
            if(err){
                return res.status(400).json({error:err});
            }
            
            return res.status(200).json({
                success:"Customer Details Update Succesfully"
            });
        }
    )
});

//delete customer
router.delete('/customer/deletecustomer/:id',(req,res) =>{
    Customers.findByIdAndRemove(req.params.id).exec((err,deletecustomer) =>{
        
        if(err) return res.status(400).json({
            message:"Delete unsuccesfull",err
        });

        return res.json({
            message:"Delete Succesfull",deletecustomer
        });

    });
});

module.exports = router;