
// CRUD operations over kyc which is available in data.js and imported using require wuth alias name cluster to kyc

const cluster=require('./data')

const view=()=>{
    cluster.map((val,ind)=>{
        console.log(val)
    })
}

const openAccount=(name,balance,numb)=>{
    cluster.push({"acc_number":numb,"acc_balance":balance,"acc_holder":name})
    console.log(name+" has opened the account")
}

const withdraw=(numb,desired)=>{
    for(var obj of cluster){
        if(obj.acc_number===numb){
            if(desired<=obj.acc_balance){
                obj.acc_balance-=desired
                console.log(desired+" amount has debited by "+obj.acc_holder)
            }
            else{
                console.log(acc_number+" has insufficient balance")
            }
            return
        }
    }
    console.log("invalid "+numb)
}

view()
openAccount('MAnikandan','900',1232123)
withdraw(13245432,300)
view()

