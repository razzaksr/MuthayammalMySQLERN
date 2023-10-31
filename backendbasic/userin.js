const prompt=require('prompt-sync')()

const userName=prompt("enter username?")

console.log(`User name is ${userName}`)

const userContact=parseInt(prompt("enter the contact?"))

console.log(`User contact is ${userContact+2}`)