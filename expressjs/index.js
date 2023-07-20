const fs=require('fs');
const express=require('express');
const path=require('path');
const server=express();


const insta =fs.readFileSync('index.html','utf-8');
const apple=fs.readFileSync('apple.html','utf-8');
// const auth=(req,res,next)=>{
//     console.log(req.query);
//     if(req.query.password){
//         //res.send("autenticate");
//         next();
//     }else {
//         res.send('404 error');
//     }
// }
server.get('/insta',(req,res)=>{
   res.send(insta);
});
server.get('/insta/profile',(req,res)=>{
    res.send(apple);
})
server.listen(399);
