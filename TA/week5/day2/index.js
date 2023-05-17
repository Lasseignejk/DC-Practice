const express = require("express")
const app = express()
const PORT = 3002

// middleware
app.use(express.json())

// routes
app.get("/get_username", (req, res) => {
  function returnStudentObject() {
    const student = {
      name: "Cameron",
      securityClearance: "level 1",
    }
    return student
  }
  const user = returnStudentObject();
  res.send(user.name)
})

app.get("/get_users", (req, res) => {
  console.log("you are in /get_users route")
  res.send("completed")
})

app.post("/create_user", (req, res) => {
	console.log("you are in post route/get_users route");
  console.log(req.body)
	res.send("completed");
});

app.post("/add_user_id", (req, res) => {
  const student = {
    name: req.body.studentName,
    id: req.body.id
  }
  res.send(student)
})


app.listen(PORT, console.log(`running on port ${PORT}`))