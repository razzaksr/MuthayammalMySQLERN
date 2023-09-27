// arrow functions
/*
const/let fun_name=()=>{
    // logic of the function
}
*/

let profile={
    "name":"Razak Mohamed",
    "qualification":"BE",
    "aadhaar":8767867767676,
    "pan":"ABSCDE9823E"
}

const update=(key,value)=>{
    if(profile[key]){
        profile[key]=value
        console.log(key+" has updated with "+value+" in profile")
    }
    else{
        console.log("invalid field "+key)
    }
}

update("aadhaar",656765676233)
update('pan',"ABDVD2343G")
update("qualification","ME")

console.log(profile)