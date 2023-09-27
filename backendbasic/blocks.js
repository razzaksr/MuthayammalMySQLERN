/*
function fun_name(parameters){
    // logic/body of the function
}
*/

let machineBalance=98394;

function calculateLoan(principle, tenuer){
    principle+=(principle*0.076)
    return principle/tenuer
}
var EMI=calculateLoan(500000,36)
console.log(EMI+" is installement whcih have to pay")

function withdraw(myWish){
    if(myWish<=machineBalance){
        machineBalance-=myWish;
        console.log(myWish+" has dispensed to the user");
    }
    else{
        console.log(myWish+" can't debit since insufficient amount ");
    }
}

// withdraw(120000)