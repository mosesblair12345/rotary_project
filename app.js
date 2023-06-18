const express= require("express");
const app=express();
const port = 3000;

app.use(express.json());

app.post("/ussd",(req,res)=>{
    const {
    sessionId,
    serviceCode,
    phoneNumber,
    text
    }=req.body;
    console.log(req.body);
   let response = "";

   if(text === ""){ 
    response = `CON Welcome to Rotary district 9212

    To register enter your Full Name`;  

    res.set('Content-Type: text/plain');
    res.send(response)
   }
   if (/^[A-Za-z\s]+$/.test(text)) {
    response = `CON Select Club Name
        1. A-D
        2. E-H
        3. I-K
        4. L
        5. M
        6. N
        7. O-S
        8. T-Z
        
   `;
    res.set('Content-Type: text/plain');
    res.send(response);
  }
})

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})