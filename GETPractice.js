const express = require("express");
const app = express();
const port = 8080;
app.get("/",(req, res)=>{
  res.send("this is the home page")

});
app.get("/about",(req, res)=>{
  res.send("this is the  about page")

});
app.get("/contact",(req, res)=>{
  res.send("this is contact page")
});
app.listen(port,()=>{
  console.log(`server runs on the ${port}port`);
});