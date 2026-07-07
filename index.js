const express = require('express');
const app = express();

let port =9999;
app.get("/",(req,res)=>{
    res.send("this is nodejs server + docker");
});
app.listen(port,()=>{
    console.log(`server get started on localhost:${port}`);
});