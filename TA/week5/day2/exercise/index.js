const express = require("express")
const app = express()
const cowsay = require("cowsay")
const PORT = 3003

// middleware
app.use(express.json())

app.get("/get_cow", (req, res) => {
  res.send(cowsay.say({
    text: "I'm a mooodule",
    e: "oO",
    T: "U"
  }))
})

app.post("/think_cow", (req, res) => {
  res.send(cowsay.think({
    text: req.body.text,
    e: "^^",
  }))
})

app.post("/squirrel_thinks", (req, res) => {
  res.send(cowsay.think({
    text:req.body.text,
    f: "squirrel"
  }))
})

// vader
// zen-noh-milk
// moofasa

app.post("/random_thinks", (req, res) => {
	res.send(
		cowsay.think({
			text: req.body.text,
			r: true,
		})
	);
});

app.get('/users', (req, res) => {
  // missing ) after req/res
});

app.post('/login', (req, res) => {
  // missing ( in front of req/res
})

app.put('/users/:id', (req, res) => {
  // forgot closing } before ) at end
})

app.get('/profile', (req, res) => {
  // get is spelled wrong
});

app.listen(PORT, console.log(`listening on port ${PORT}`))