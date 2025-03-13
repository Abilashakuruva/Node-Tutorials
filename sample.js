/*console.log("Hello world!")

function addnum(a,b){
    console.log(a+b)
}
addnum(150,250)*/
/*
const os= require('os')
const path=require('path')
/*
console.log(os.type())
console.log(os.version())
console.log(os.freemem())
console.log(os.cpus())*/

/*__dirname
//__filename
console.log(__dirname)
console.log(__filename)

console.log(path.dirname(__filename))
console.log(path.basename(__filename))
console.log(path.extname(__filename))
console.log(path.parse(__filename))*/

// const fs=require('fs')

// fs.readFile('demo.txt','utf8',(err,data)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log(data)
// })

// fs.writeFile('example.html','utf8',(err)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log('File Created successfully')
// })

// const contentSample="My name is Abilasha, I am creating dynamic content"

// fs.writeFile('example.html',contentSample,(err)=>{
//     if(err){
//         console.log(err)

//     }else{
//         console.log("file content is success")

//     }
// })


// fs.rename('example.html','newChangedFile.js',(err)=>{
//     if(err){
//         console.log(err)

//     }else{
//         console.log("modified success")

//     }
// })
/*
fs.unlink('newChangedFile.js',(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log('file deleted success')
    }

})*/

const http=require('http')
const { addnum,subtractnum,dividenum,multiplynum }=require('./demomodule')

/*
const myServer=http.createServer((req,res)=>{
    res.write("Welcome to Shanvi")
    res.end()

})

myServer.listen(5500)*/

console.log(addnum(10,11))
console.log(subtractnum(10,5))
console.log(dividenum(10,2))
console.log(multiplynum(10,5))
