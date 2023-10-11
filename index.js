const express=require('express')

const app=express()
app.get('/',(req,res)=>{
    res.send('Docker Study')
});
app.listen(8080,()=>console.log('server is Running'))