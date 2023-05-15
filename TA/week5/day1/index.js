const express = require('express')
const app = express()
const PORT = 3000;

app.get("/hello", (req, res) => {
  res.send("Hello DC Students")
})

app.get("/get_students", (req, res) => {
  const students = [
    {name: "daniel",},
    {name: "kim",},
    {name: "ashley",},
    {name: "dustin",},
    {name: "justin",},
    {name: "max",},
    {name: "cameron",},
  ]
  // convert data to json and send it back
	res.json(students);
});

// write a GET route that returns an array of objects containing the names of your family members
app.get("/family_members", (req,res) => {
  const family = [
    {name: "dad"},
    {name: "mom"},
    {name: "mo"},
    {name: "mab"},
    {name: "pupper dog"}
  ]
  res.json(family)
})
// write a PUT request that returns ("you did a put command ")
app.put("/put_request", (req, res) => {
  res.send("You made a PUT request")
})

// write a delete request
app.delete("/delete_request", (req, res) => {
  res.send("You made a DELETE request")
})
// write a route that return the sum of 2 + 2 in the res.send() (post request)
app.post("/post_request", (req, res) => {
  res.send(`${2+2}`)
})



app.listen(PORT, console.log(`Listening on port ${PORT}`))