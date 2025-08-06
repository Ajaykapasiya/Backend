// Create server

import express from "express";

const app = express();

app.get("/", (req, res) => {
  //    console.log("Directory:", __dirname);
  //    console.log("File URL:", __filename);
  //console.log("Directory:" , import.meta.dirname);
  //console.log("File url:", import.meta.url);
  

  const __filename = new URL(import.meta.url);
  console.log(__filename);
  

  res.send("Hello ajay");
});

// app.get("/about-page" , (req,res) => {
//     res.send("Hello about page")
// })

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Port is activated on ${PORT}`);
});
