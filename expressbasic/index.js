const express=require('express')

const app=express()

// get(url,async(request,response)=>{})
app.get('',async(req,res)=>{
    // res.send("<h1>My Express server working perfectly</h1><h2>This is first URL</h2>")
    res.send("My Express server working perfectly This is first URL")
})

app.get('/mec',async(req,res)=>{
    res.send("Full stack development, DevOps Engineer")
})

app.get('/cse',async(req,res)=>{
    res.send("Current Event is MERN Stack")
})

app.get('/myData/:hai',async(req,res)=>{
    res.send(`Received data is ${req.params.hai}`)
})

app.get('/d2r/:dollar',async(req,res)=>{
    // conversion of passed dollar value to int
    const doll = parseInt(req.params.dollar)
    let rupees=doll*83.55;
    res.send(`The Ruppes respective to ${req.params.dollar} is ${rupees}`)
})

app.listen(1234,()=>{
    console.log("express running!!!!!!!!!!!")
})