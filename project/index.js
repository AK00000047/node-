const fs=require('fs');
const express=require('express');
const index=fs.readFileSync('index.html','utf-8');
const server=express();
const data=JSON.parse(fs.readFileSync('data.json','utf-8'));
const products=data.products[0];
server.get('/product',(req,res)=>{
    let modified=index.replace('**title**',products.title);
    modified=index.replace('**url**',products.thumbnail);
//    modified=index.replace('**rating**',products.rating);
//    modified=index.replace('**price**',products.price);
   res.send(modified);
}).listen(400);