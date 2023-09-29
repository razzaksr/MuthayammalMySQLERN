/*
File Processing using JS: 

fs>> file system

writeFile, readFile, appendFile, isFile, isDirectory, unlink

*/

const file=require('fs')

// create and write file 
// writeFile(file_location,content,unicode,callback_function)
// const myText='MySQL Express React Node are current project execution'
// file.writeFile('mern.doc',myText,'utf8',(err,result)=>{
//     if(err){
//         console.error(err)
//         return
//     }
//     console.log(myText+" content has written")
// })


// append file 
// const myNewContent="Database design is over and LLD in the process to complete"
// file.appendFile('mern.doc',myNewContent,'utf8',(err,res)=>{
//     if(err){
//         console.error(err)
//         return
//     }
//     console.log("Content has appended")
// })


// read the file
// readFile(file_name_location,unicode,callback_function)
// file.readFile('D:/Course backups/Java/Dhanasekaran/greet.java','utf-8',(err,data)=>{
//     if(err){
//         console.error(err)
//         return
//     }
//     console.log("Content are below readed from file")
//     console.log(data)
// })

// file information
// file.stat('D:/Course backups/Java/Dhanasekaran/greet.java',(err,status)=>{
// file.stat('D:/Course backups/Java/Dhanasekaran',(err,status)=>{
//     if(err){
//         console.error(err)
//         return
//     }
//     console.log("The date of the file creation "+status.ctime)
//     console.log("The date of the file modified "+status.mtime)
//     console.log("Is mentioned URL referes the FILE "+status.isFile())
//     console.log("Is mentioned URL referes the Folder "+status.isDirectory())
// })


// deleting a file
// unlink
file.unlink('mern.doc',(err,status)=>{
    if(err){
        console.error(err.message)
        return
    }
    console.log('File has deleted')
})