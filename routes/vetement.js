const express=require("express");
const Vetement = require("../Models/vetement");

const vetementRouter= express.Router();

// post vetement
vetementRouter.post("/add",async(req ,res)=>{
    try {
         let newVetement = new Vetement(req.body);
         let result = await newVetement.save();
         res.send({ vetement :result ,msg : "vetement as added"});     
    } catch (error) {
        console.log(error);
        
    }
});
//// get vetement
vetementRouter.get("/",async(req ,res)=>{
    try {
        
         let result = await Vetement.find();
         res.send({ vetements :result ,msg : "vetement as added"});     
    } catch (error) {
        console.log(error);
        
    }
});
///delete vetement
vetementRouter.delete("/:id",async(req ,res)=>{
    try {
        
         let result = await Vetement.findByIdAndDelete(req.params.id);
         res.send({ msg : "vetement is deleted"});     
    } catch (error) {
        console.log(error);
        
    }
});
///update vetement
vetementRouter.put("/:id",async(req ,res)=>{
    try{ 
        let result= await Vetement.findByIdAndUpdate(
            {_id:req.params.id},
            {$set:{...req.body}});
        res.send({ vetements:result, msg:"vetement is changed "});
    }
    catch (error){
        console.log(error);
    }
});


module.exports= vetementRouter;