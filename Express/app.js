// Create server

import express from "express"
//import {PORT} from './env.js'

const app = express()

app.get("/" , (req,res) => {
   //console.log("Directory:", import.meta.dirname);
   //console.log("File URL:", import.meta.url);

   const __filename = new URL(import.meta.url)
    
    
    res.send("Hello ajay")
})

// app.get("/about-page" , (req,res) => {
//     res.send("Hello about page")
// })

const PORT = process.env.PORT||3000;

app.listen(PORT , ()=>{
    console.log(`Port is activated on ${PORT}`);
    
})