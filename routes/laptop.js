const express=require("express");
const Laptop = require("../Models/laptop");


const laptopRouter=express.Router();

// post laptop
laptopRouter.post("/add",async(req ,res)=>{
    try {
         let newLaptop = new Laptop(req.body);
         let result = await newLaptop.save();
         res.send({ laptop :result ,msg : "laptop as added"});     
    } catch (error) {
        console.log(error);
        
    }
});
//// get laptop
laptopRouter.get("/",async(req ,res)=>{
    try {
        
         let result = await Laptop.find();
         res.send({ laptops :result ,msg : "laptop as added"});     
    } catch (error) {
        console.log(error);
        
    }
});
///delete laptop
laptopRouter.delete("/:id",async(req ,res)=>{
    try {
        
         let result = await Laptop.findByIdAndDelete(req.params.id);
         res.send({ msg : "laptop is deleted"});     
    } catch (error) {
        console.log(error);
        
    }
});
///update laptop
laptopRouter.put("/:id",async(req ,res)=>{
    try{ 
        let result= await Laptop.findByIdAndUpdate(
            {_id:req.params.id},
            {$set:{...req.body}});
        res.send({ Laptops:result, msg:"laptop is changed "});
    }
    catch (error){
        console.log(error);
    }
});

module.exports = laptopRouter;