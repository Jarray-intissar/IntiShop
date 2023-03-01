const express =require('express');
const Contact = require('../models/contact');
const contactRouter =express.Router()

// ADD A NEW USER TO THE DATABASE 
contactRouter.post('/add',async(req,res)=>{
    try {
        const newContact = new Contact(req.body)
        let result = await newContact.save()
        res.send({contact:result, msg:'contact added successfully'})
    } catch (error) {
        console.log(error)
    }
})
// RETURN ALL USERS
contactRouter.get("/",async(req,res)=>{
    try{
        let result = await Contact.find();
        res.send({contacts:result,msg:'all contacts'});
    }catch(error){
    console.log(error);
    }
    })
    // RETURN USER BY ID
    contactRouter.get("/:id",async(req,res)=>{
        try{
            let result = await Contact.findById({_id:req.params.id});
            res.send({contact:result,msg:'contact'});
        }catch(error){
        console.log(error);
        }
    })
    // REMOVE A USER BY ID 
    contactRouter.delete("/:id",async(req,res)=>{
        try{
            let result = await Contact.findByIdAndDelete({_id:req.params.id});
            res.send({msg:'contact deleted'});
        }catch(error){
        console.log(error);
        }
    })
    //EDIT A USER BY ID  
    contactRouter.put("/:id",async(req,res)=>{
        try{
            let result = await Contact.findByIdAndUpdate(
                {_id:req.params.id},
                {$set:{...req.body}});
            res.send({msg:'contact updated'});
        }catch(error){
        console.log(error);
        }
    })
module.exports=contactRouter;