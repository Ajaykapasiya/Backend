// Create server

import express from "express"

const app = express()

app.get("/" , (req,res) => {
    res.send("Hello ajay")
})

app.get("/about-page" , (req,res) => {
    res.send("Hello about page")
})

const PORT = process.env.PORT;

app.listen(PORT , ()=>{
    console.log(`Port is activated on ${PORT}`);
    
})