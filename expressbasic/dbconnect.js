const refExp=require("express")
const refMysql=require("mysql2")

const app=refExp()
const dbase=refMysql.createConnection({
    "host":"localhost",
    "user":"root",
    "password":"Razak@123",
    "port":3306,
    "database":"muthayammal"
})

dbase.connect(()=>{
    console.log("Database connected")
})

app.listen(9090,()=>{
    console.log("app is running!!!!11")
})

app.get('/fetch',async(req,res)=>{
    const sql="select * from customers"
    dbase.query(sql,(err,records)=>{
        if(err){
            res.status(404).json({"error":err.message})
            return
        }
        if(records.length==0){
            res.json(201).json({"message":"no records found"})
            return
        }
        res.status(200).json({records})
    })
})