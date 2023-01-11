const { response } = require("express");
const express = require("express");
const app = express();
const PORT = 3003;


const savedUsers = []

// this allows your request to have a body
app.use(express.json());

// -------------------------routes-----------------------------
// app.get("/", (req, res) => {
//     res.send("Hello")
// })

// to make a handle dynamic, use a colon. 'i will receive a unique parameter on this url. that parameter could be a changing number.'
// app.get("/user/:userId", (req, res) => {
//     const users = [
//         {name: "Joe", id: 1},
//         {name: "Ethan", id: 2},
//         {name: "Mauro", id: 3},
//         {name: "Vinny", id: 4}
//     ];
//     console.log(req.body);

//     const userFound = users.find(
//         (user) => user.id === parseInt(req.params.userId)
//     );
//     savedUsers.push(req.body);
//     console.log(savedUsers)

//     res.send(`I am looking at user ${userFound.name} with id ${userFound.id}`);
// })


// WRITE 5 ROUTES -- all of them will have a response
// create_user (POST -- body)
app.post("/create_user", (req, res) => {
    savedUsers.push(req.body);
    res.send(`User ${req.body.name} was added`)
})


// read_users (give me all of the users from the array in the response) (GET -- no input)
app.get("/read_users", (req, res) => {
    res.send(savedUsers)
})


// update_user/:id (specify which id to update) (user was updated!) (PUT)
app.put("/update_user/:userId", (req, res) => {
    //find the index of the user
    const indexOfUserToUpdate = savedUsers.findIndex((user) => user.id === Number(req.params.userId));
    // use splice to delete the original array element
    savedUsers.splice(indexOfUserToUpdate, 1, req.body)
    res.send(savedUsers)
})


// delete_user/:id (specify which id to delete) (DELETE)
app.delete("/delete_user/:userId", (req, res) => {
    //find the index of the user
    const indexOfUserToDelete = savedUsers.findIndex((user) => user.id === Number(req.params.userId));
    // use splice to delete the original array element
    savedUsers.splice(indexOfUserToDelete, 1)
    res.send(savedUsers)
})


// delete_users (delete all users) (all users have been deleted) (DELETE)
app.delete("/delete_all", (req, res) => {
    savedUsers.length = 0;
    res.send("All users deleted.")
})


app.listen(PORT, console.log(`Listening on port ${PORT}`))