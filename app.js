const express= require("express");
const app=express();
const port = 3000;

app.use(express.json());

app.post("/rotary",(req,res)=>{
    const {
    sessionId,
    serviceCode, 
    phoneNumber, 
    text ,
    }=req.body;

   let response = "";

   if(text === ""){ 
    response = `CON Welcome to Rotary district 9212`;  
    res.set('Content-Type: text/plain');
    res.send(response)
   }
})

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})