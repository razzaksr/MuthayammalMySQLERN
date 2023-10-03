const express = require('express')
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
const application=express()
application.use(bodyParser.urlencoded({extended:true}))
application.use(bodyParser.json())

application.listen(2020,(err)=>{
    console.log("Webservice running successfully")
})


// CRUD operations:

application.post('/new',async(req,res)=>{    
    // destructure follows order of parameters
    const{acc_number,acc_holder,acc_bal}=req.body

    const sql="insert into customers values(?,?,?)"
    dataBase.query(sql,[acc_number,acc_holder,acc_bal],(err,ack)=>{
        if(err){
            res.status(500).json({error:err.message})
            return
        }
        res.status(200).json({message:"Customer has added"})
    })
})

// Read operation display all customers: get
application.get('/list',async(req,res)=>{
    const sql="select * from customers"
    dataBase.query(sql,(err,records)=>{
        if(err){
            res.status(500).json({error:err.message})
            return
        }
        if(records.length==0){
            res.status(404).json({message:"No Customers are available"})
            return
        }
        res.status(200).json(records)
    })
})

// Read operation: read by primary key
application.get('/find/:key',async(req,res)=>{
    const sql="select * from customers where acc_number=?"
    dataBase.query(sql,[req.params.key],(err,records)=>{
        if(err){
            res.status(500).json({error:err.message})
            return
        }
        if(records.length==0){
            res.status(404).json({message:"No Customers are available"})
            return
        }
        res.status(200).json(records[0])
    })
})

// Read operation: read by condition
application.get('/balance/:amount',async(req,res)=>{
    const sql="select * from customers where acc_bal>?"
    dataBase.query(sql,[req.params.amount],(err,records)=>{
        if(err){
            res.status(500).json({error:err.message})
            return
        }
        if(records.length==0){
            res.status(404).json({message:"No Customers are available"})
            return
        }
        res.status(200).json(records)
    })
})

// Read operation: read by multiple condition
application.get('/cash/:amount1/:amount2',async(req,res)=>{
    const sql='select * from customers where acc_bal between ? and ?'
    dataBase.query(sql,[req.params.amount1,req.params.amount2],(err,records)=>{
        if(err){
            res.status(500).json({error:err.message})
            return
        }
        if(records.length==0){
            res.status(404).json({message:"No Customers are available"})
            return
        }
        res.status(200).json(records)
    })
})