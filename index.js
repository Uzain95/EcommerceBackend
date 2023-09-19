const express = require("express");
const app = express();

app.get("",(req,resp)=>{
    resp.send("Running...");
})

app.listen(5000);