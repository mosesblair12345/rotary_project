const express= require("express");
const app=express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.post("/ussd",(req,res)=>{
    const {
        sessionId = req.body.SESSION_ID || req.body['session-id'] || req.body.session_id || req.body.session || req.body.sessionId,
        serviceCode = req.body.SERVICE_CODE || req.body.ORIG || req.body['service-code'] || req.body.service_code || req.body.serviceCode,
        phoneNumber = req.body.DEST || req.body.MSISDN || req.body.msisdn || req.body.phoneNumber,
        text = req.body.USSD_PARAMS || req.body.USSD_STRING || req.body['ussd-string'] || req.body.ussd_string || req.body.text
    }=req.body

   let response = "";

   if(text == ''){ 
    // Welcome console
    response = `CON Welcome to Rotary District 9212

    To register enter your Full Name`;  

    res.set('Content-Type: text/plain');
    res.send(response)
   }
   else if (/^[A-Za-z\s]+$/.test(text)) {
    // Club letter selection console
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
    else if(text.split("*").length === 2){
        
        const splitText = text.split("*")[1];
    // Club selection console
    if (splitText === "1") {
    response = `CON Select Club Name
        1. Athi River
        2. Bahari-Mombasa
        3. Bamburi-Mombasa
        4. Bungoma
        5. Bungoma Magharibi
        6. Bungoma-Elgon
        7. Busia
        8. Diani
        
        `
    res.set('Content-Type: text/plain');
    res.send(response);
  } 
  else if (splitText === "2") {
    response = `CON Select Club Name
        1. E-Club of 9212, Safari
        2. E-Club of Rift Valley
        3. Eldama Ravine
        4. Eldoret-Uasin Gishu
        5. Emali
        6. Embakasi
        7. Embu
        8. Enkare-Narok 
        9. Gachie
        10. Gilgil
        11. Hurlingham-Nairobi 
    `
    res.set('Content-Type: text/plain');
    res.send(response);
  } 
  else if (splitText === "3") {
    response = `CON Select Club Name
        1. Isiolo
        2. Jabali
        3. Kaimosi
        4. Kakamega
        5. Karatina
        6. Karen-Nairobi
        7. Karura-Nairobi
        8. Kericho
        9. Kiambu
        10. Kikuyu
        11. Kilifi
        12. Kilindini, Mombasa
        13. Kirinyaga
        14. Kiserian
        15. Kisii-Central
        16. Kisumu
        17. Kisumu Central
        18. Kisumu Mashariki
        19. Kisumu Winam
        20. Kitale
        21. Kitengela
        22. Kitui
        23. Kwale   
    `
    res.set('Content-Type: text/plain');
    res.send(response);
  }
  else if (splitText === "4"){
    response= `CON Select Club Name
        1. Laikipia Highlanders
        2. Lalibela
        3. Lamu
        4. Lavington Eco
        5. Lavington Jioni
        6. Lavington, Nairobi
        7. Limuru
        `
        res.set('Content-Type: text/plain');
        res.send(response);
  }
  else if (splitText === "5"){
    response= `CON Select Club Name
        1. Maasai Mara-Narok
        2. Machakos
        3. Malindi
        4. Maralal
        5. Marsabit Central
        6. Maseno
        7. Mbita Mfangano Island
        8. Meru
        9. Milimani
        10. Mombasa
        11. Mombasa Central
        12. Mombasa Downtown
        13. Mombasa North Coast
        14. Mombasa Nyali
        15. Mtwapa
        16. Munuki
        17. Murang'a
        18. Muthaiga
        19. Mwatate
        20. Mwea
    `
    res.set('Content-Type: text/plain');
    res.send(response);
  }
  else if (splitText === "6"){
    response= `CON Select Club Name
        1. Nairobi
        2. Nairobi Celebrate
        3. Nairobi Gigiri
        4. Nairobi Industrial Are
        5. Nairobi Kilimani Alfajiri
        6. Nairobi Madaraka
        7. Nairobi Magharibi
        8. Nairobi Mashariki
        9. Nairobi Nabo
        10. Nairobi Ngong Road
        11. Nairobi North
        12. Nairobi Parklands
        13. Nairobi Peponi
        14. Nairobi Ridgeways
        15. Nairobi Samawati
        16. Nairobi Thika Road
        17. Nairobi Upper Hill
        18. Nairobi-Connect
        19. Nairobi-East
        20. Nairobi-Karengata
        21. Nairobi-Langata
        22. Nairobi-Muthaiga North
        23. Nairobi-South
        24. Nairobi-Utumishi
        25. Naivasha
        26. Nakuru
        27. Nakuru-The Great Rift Valley
        28. Nanyuki
        29. Ngong Hills
        30. Nithi
        31. Nkubu
        32. Nyeri
    `
    res.set('Content-Type: text/plain');
    res.send(response);
    }
    else if (splitText === "7"){
        response= `CON Select Club Name
            1. Ongata Rongai
            2. Ongata Rongai East
            3. Qarsa
            4. Ruiru
            5. Sagam
            6. Siaya
            7. Stoni Athi
            8. Suna Migori
            9. Syokimau
            `
            res.set('Content-Type: text/plain');
            res.send(response);
        }
    else if (splitText === "8"){
        response= `CON Select Club Name
            1. Taveta
            2. Thika
            3. Thika West
            4. Voi
            5. Watamu
            6. Westlands-Nairobi
        `
        res.set('Content-Type: text/plain');
        res.send(response);
    }
    else if (
        splitText !== "1" || 
        splitText !== "2" || 
        splitText !== "3" || 
        splitText !== "4" || 
        splitText !== "5" || 
        splitText !== "6" || 
        splitText !== "7" || 
        splitText !== "8"){
        response= `END Invalid input. Please enter a valid selection.`
        res.set('Content-Type: text/plain');
        res.send(response);
    }

   }
   else if(text.split("*").length === 3){
    const parts = text.split("*");
    const splitText2 = parts.slice(1).join("*");
        if(
        splitText2.startsWith("1*") || 
        splitText2.startsWith("2*") || 
        splitText2.startsWith("3*") || 
        splitText2.startsWith("4*") || 
        splitText2.startsWith("5*") || 
        splitText2.startsWith("6*") || 
        splitText2.startsWith("7*") || 
        splitText2.startsWith("8*")) {
            let maxOption;
            const subMenuOption = parseInt(splitText2.split('*')[1]);

            if(splitText2.startsWith("1*")){
                maxOption=8;
            }
            if(splitText2.startsWith("2*")){
                maxOption=11;
            }
            if(splitText2.startsWith("3*")){
                maxOption=23;
            }
            if(splitText2.startsWith("4*")){
                maxOption=7;
            }
            if(splitText2.startsWith("5*")){
                maxOption=20;
            }
            if(splitText2.startsWith("6*")){
                maxOption=32;
            }
            if(splitText2.startsWith("7*")){
                maxOption=9;
            }
            if(splitText2.startsWith("8*")){
                maxOption=6;
            }

            if(subMenuOption >= 1 && subMenuOption <= maxOption){
                // Member id console
                response = `CON Enter Membership ID`
                res.set('Content-Type: text/plain');
                res.send(response);
            }
            else{
                response = `END Invalid input. Please enter a valid selection.`
                res.set('Content-Type: text/plain');
                res.send(response);
            }
        }   
    }
else if (text.split('*').length === 4) { 
            // Type of fund console
            response = `CON Select Fund
            1. Annual Fund
            2. End Polio Fund
            3. Endowment Fund`;
            res.set('Content-Type: text/plain');
            res.send(response);
     }
else if(text.split("*").length === 5){
        const lastDigit = parseInt(text.split('*').pop())
        if (lastDigit === 1 || lastDigit === 2 || lastDigit === 3){
            // Ammount selection console
            response = `CON Select Amount
            1. 400
            2. 1000
            3. 5000
            4. 10,000
            5. 100,000
            6. 150,000`;
            res.set('Content-Type: text/plain');
            res.send(response);
    }else{
        response = `END Invalid input. Please enter a valid selection.`
        res.set('Content-Type: text/plain');
        res.send(response);
    }

}
else if (text.split("*").length === 6){
    const lastDigit = parseInt(text.split('*').pop());
    
    if(lastDigit === 1){
        response = `END Your selection was Ksh 400. Thank you.`
        res.set('Content-Type: text/plain');
        res.send(response);
    }
    else if (lastDigit === 2){
        response = `END Your selection was Ksh 1000. Thank you.`
        res.set('Content-Type: text/plain');
        res.send(response);
    }
    else if (lastDigit === 3){
        response = `END Your selection was Ksh 5000. Thank you.`
    }
    else if (lastDigit === 4){
        response = `END Your selection was Ksh 10,000. Thank you.`
        res.set('Content-Type: text/plain');
        res.send(response);
    }
    else if (lastDigit === 5){
        response = `END Your selection was Ksh 100,000. Thank you.`
        res.set('Content-Type: text/plain');
        res.send(response);
    }
    else if (lastDigit === 6){
        response = `END Your selectionwas Ksh 150,000. Thank you.`
        res.set('Content-Type: text/plain');
        res.send(response);
    }
    else{
        response = `END Invalid input. Please enter a valid selection.`
        res.set('Content-Type: text/plain');
        res.send(response);
    }
}
else{
    response = `END Invalid input. Please enter a valid selection.`
    res.set('Content-Type: text/plain');
    res.send(response);
   }
})

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})