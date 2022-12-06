const express = require('express');
const Drugs = require('../models/drug');
const router = express.Router();

//save drug
router.post('/drug/save', (req,res) =>{

    let newDrug = new Drugs(req.body);

    newDrug.save((err) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Drug Added Successfully"
        });
    });
});

//get drug
router.get('/drug',(req,res) =>{
    Drugs.find().exec((err,drug) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingPosts:drug
        });
    });
});

//get a spesific drug
router.get('/drug/:id',(req,res) =>{
    let drugid =req.params.id;

    Drugs.findById(drugid,(err,drug) =>{
        if(err){
            return res.status(400).json({success:false, err});
        }

        return res.status(200).json({
            success:true,
            drug
        });

    });
});

//update drug
router.put('/drug/updatedrug/:id',(req,res)=>{
    Drugs.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,drug)=>{
            if(err){
                return res.status(400).json({error:err});
            }
            
            return res.status(200).json({
                success:"Drug Details Update Succesfully"
            });
        }
    )
});

//delete drug
router.delete('/drug/deletedrug/:id',(req,res) =>{
    Drugs.findByIdAndRemove(req.params.id).exec((err,deletedrug) =>{
        
        if(err) return res.status(400).json({
            message:"Delete unsuccesfull",err
        });

        return res.json({
            message:"Delete Succesfull",deletedrug
        });

    });
});

module.exports = router;