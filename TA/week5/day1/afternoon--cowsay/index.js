const express = require("express");
const cowsay = require("cowsay")
const app = express();
const PORT = 3001

app.get("/hello", (req,res) => {
  res.send("Hello")
})

app.get("/cowsay", (req,res) => {
  console.log(cowsay.say({
    text: "Hello there!",
    e: "^^",
  }))
  res.send("cow sent")
})



app.listen(PORT, console.log(`Listening on port ${PORT}`))