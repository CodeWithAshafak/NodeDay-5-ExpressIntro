const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("<h1>Welcome This is my first app</h1>");
});
app.get("/about", (req, res) => {
  res.send("<h1>this is my about page</h1>");
});
app.get("/gallery", (req, res) => {
  res.send("<h1>this is my gallery page</h1>");
});
app.get("/photo/image", (req, res) => {
  res.send("<h1>this is the image page </h1>");
});

app.listen(9000, () => {
  console.log("server runs on 9000 port");
});
