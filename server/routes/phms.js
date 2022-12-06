const express = require('express');
const Phms = require('../models/phm');
const router = express.Router();

//save drug
router.post('/phm/save', (req,res) =>{

    let newPhm = new Phms(req.body);

    newPhm.save((err) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Pharmacy Added Successfully"
        });
    });
});

//get drug
router.get('/phm',(req,res) =>{
    Phms.find().exec((err,phm) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingPosts:phm
        });
    });
});

//get a spesific drug
router.get('/phm/:id',(req,res) =>{
    let phmid =req.params.id;

    Phms.findById(phmid,(err,phm) =>{
        if(err){
            return res.status(400).json({success:false, err});
        }

        return res.status(200).json({
            success:true,
            phm
        });

    });
});

//update drug
router.put('/phm/updatephm/:id',(req,res)=>{
    Phms.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,phm)=>{
            if(err){
                return res.status(400).json({error:err});
            }
            
            return res.status(200).json({
                success:"Pharmacy Details Update Succesfully"
            });
        }
    )
});

//delete drug
router.delete('/phm/deletephm/:id',(req,res) =>{
    Phms.findByIdAndRemove(req.params.id).exec((err,deletephm) =>{
        
        if(err) return res.status(400).json({
            message:"Delete unsuccesfull",err
        });

        return res.json({
            message:"Delete Succesfull",deletephm
        });

    });
});

module.exports = router;