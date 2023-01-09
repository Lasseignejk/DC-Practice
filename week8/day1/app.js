// require our packages; tools will difer depending on the project. right now, we're just using express. 
const express = require("express");
const app = express();
// choose a number between 3000 and 3099; those are the available ports for us to use
const PORT = 3000;

// routes
// .get is the method, "/" is the path, it always takes a req and a res. if you don't have that response on line 10, then the request will never be fulfilled. You'll ask a question to someone, lock eyes, and the person will never answer. You'll just always be sitting there.
app.get("/", (request, response) => {
    response.send("howdy")
});
app.get("/error", (request, response) => {
    response.status(404).send("error");
});

// CRUD (create, read, update, destroy)
// create
app.post("/dogs", (req, res) => {
    res.send("posting")
})
// read
app.get("/dogs", (req, res) => {
    res.send("getting")
})
// update
app.put("/dogs", (req, res) => {
    res.send("updating")
})
// destroy
app.delete("/dogs", (req, res) => {
    res.send("deleting")
})

// listen for request
app.listen(PORT, console.log(`Listening on port ${PORT}`));