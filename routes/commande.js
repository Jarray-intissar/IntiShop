const express =require('express');
const Commande = require('../Models/commande');

const commandeRouter = express.Router();


// ADD A NEW USER TO THE DATABASE 
commandeRouter.post('/add',async(req,res)=>{
    try {
        const newCommande = new Commande(req.body)
        let result = await newCommande.save()
        res.send({commande:result, msg:'commande added successfully'})
    } catch (error) {
        console.log(error)
    }
})
// RETURN ALL USERS
commandeRouter.get("/",async(req,res)=>{
    try{
        let result = await Commande.find();
        res.send({commandes:result,msg:'all commandes'});
    }catch(error){
    console.log(error);
    }
    })
    // RETURN USER BY ID
    commandeRouter.get("/:id",async(req,res)=>{
        try{
            let result = await Commande.findById({_id:req.params.id});
            res.send({commande:result,msg:'commande'});
        }catch(error){
        console.log(error);
        }
    })
    // REMOVE A USER BY ID 
    commandeRouter.delete("/:id",async(req,res)=>{
        try{
            let result = await Commande.findByIdAndDelete({_id:req.params.id});
            res.send({msg:'commande deleted'});
        }catch(error){
        console.log(error);
        }
    })
    //EDIT A USER BY ID  
    commandeRouter.put("/:id",async(req,res)=>{
        try{
            let result = await Commande.findByIdAndUpdate(
                {_id:req.params.id},
                {$set:{...req.body}});
            res.send({msg:'commande updated'});
        }catch(error){
        console.log(error);
        }
    })
module.exports=commandeRouter;