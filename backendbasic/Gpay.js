let profile={
    "upi_id":"razaksrmd@okaxis",
    "upi_pin":112233,
    "acc_number":76567876567,
    "acc_balance":23499.4
}

const transfer=(to_UpiId,to_amount,pin_to_process)=>{
    if(to_amount<=profile.acc_balance){
        if(profile.upi_pin==pin_to_process){
            profile.acc_balance-=to_amount
            console.log(to_amount+" has transferred to "+to_UpiId)
        }
        else{
            console.log("Invalid UPI pin")
        }
    }
    else{
        console.log("insufficient balance in "+profile.acc_number)
    }
}

// transfer('sabari@okkvb',2000,987654)
// transfer('sabari@okkvb',200000,112233)
transfer('sabari@okkvb',2000,112233)