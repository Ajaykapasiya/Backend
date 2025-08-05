import express from "express"

const app = express()

app.get("/" , (req,res) => {
    res.send("Hello ajay")
})

const PORT = 3001;

app.listen(PORT , ()=>{
    console.log(`Port is activated on ${PORT}`);
    
})