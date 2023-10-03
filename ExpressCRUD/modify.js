const express=require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql2')

const dataBase = mysql.createConnection({
    host:"localhost",
    database:"muthayammal",
    user:"root",
    password:"Razak@123"
})
dataBase.connect(()=>{
    console.log("Database connected successfully!!!!!!!!!!!!!")
})
const myRoute=express.Router()
myRoute.use(bodyParser.urlencoded({extended:true}))
myRoute.use(bodyParser.json())

// Put mapping:update
myRoute.put('/change/:number',async(req,res)=>{
    const{acc_holder,acc_bal}=req.body
    const sql="update customers set acc_holder=?, acc_bal=? where acc_number=?"
    dataBase.query(sql,[acc_holder,acc_bal,req.params.number],(err,ack)=>{
        if(err){
            res.status(500).json({error:err.message})
            return
        }
        res.status(200).json({message:"Updated"})
    })
})

// delete by key
myRoute.delete('/delkey/:key',async(req,res)=>{
    const sql="delete from customers where acc_number=?"
    dataBase.query(sql,[req.params.key],(err,ack)=>{
        if(err){
            res.status(500).json({error:err.message})
            return
        }
        if(ack.affectedRows==0){
            res.status(404).json({message:"Records not available to delete"})
            return
        }
        res.status(201).json({message:"Records deleted"})
    })
})

myRoute.delete('/close/:min',async(req,res)=>{
    const sql="delete from customers where acc_bal<?"
    dataBase.query(sql,[req.params.min],(err,ack)=>{
        if(err){
            res.status(500).json({error:err.message})
            return
        }
        if(ack.affectedRows==0){
            res.status(404).json({message:"Records not available to delete"})
            return
        }
        res.status(201).json({message:"Records deleted"})
    })
})

module.exports=myRoute