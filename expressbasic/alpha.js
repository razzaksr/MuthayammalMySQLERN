const exp=require('express')

const obj=exp()

obj.listen(1122,()=>{
    console.log("My web application will be running here!!!!!!!!!!!!")
})

obj.get('/make',async(req,res)=>{
    res.send("Hi this is first GET mapping")
})

// term/11/12
obj.get('/term/:num1/:num2',async(req,res)=>{
    let number1 = parseInt(req.params.num1)
    let number2 = parseInt(req.params.num2)
    res.status(200).json({"message":number1*number2})
})