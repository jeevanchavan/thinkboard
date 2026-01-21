import express from 'express'

const app = express()

app.get('/',(req,res)=>{
    res.send('this is home route');
})

app.listen(3000, ()=>{
    console.log("server is started at port 3000");
    
})