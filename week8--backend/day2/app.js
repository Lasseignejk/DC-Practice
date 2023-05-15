const express = require("express");

const app = express();
const PORT = 3002;

// middleware
// hey, before we get a request, make sure you convert stuff to json
app.use(express.json())

const cowsay = require("cowsay");
// routes
app.get("/speak", (req, res) => {
    res.send(
        cowsay.say({text: "Where do cows go on dates?"}))
})

app.post("/userSpeak", (req, res) => {
    // console.log(req)
    res.send(
        // req are handled in postman
        // req {body {"message:" "blahblahblah"}}
        cowsay.say({text: `${req.body.message}`
    })
    )
})

app.get("/think", (req, res) => {
    res.send(
        cowsay.think({text: "the mooooooovies",
    e: "oO",
T: "U"}))
})
// post requests have a body because you are sending data. get requests do not because you are just getting data that already exists. 
app.post("/yell", (req, res) => {
    res.send(
        cowsay.say({
            text: `${req.body.message.toUpperCase()}`
        })
    )
})

app.listen(PORT, console.log(`Listening on port ${PORT}`))


// post, send a message and an emoji, message needs to be in all caps
// /yell