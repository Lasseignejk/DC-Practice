# Authentication
[npm bcrypt](https://www.npmjs.com/package/bcrypt)

## Install bcrypt

    npm install bcrypt

Make sure you require it at the top of your index.js page.

    const bcrypt = require('bcrypt')
<br>
<br>

## Create a Users model
Following the instructions from yesterday, create a Users model using this code...

    npx sequelize model:generate --name NameOfTable --attributes NameOfColumn:dataType,NameOfColumn:dataType

...and require it at the top of your page.

    const {Users} = require("./models)
<br>
<br>

## Creating hashes
In a route, call bcrypt like this 

    app.post("/create_user", (req, res) => {
        const password = "abc123"

        bcrypt.hash(password,10,(err,hash)=>{
            console.log(err)
            console.log(hash)
        })
        res.send("create user")
    })

The 10 on the bcrypt line is how many salt rounds you want to do, how many times you want to hash it and make it more complicated. 

If you console.log the hash, like in the above example, you'll see a whole bunch of nonsense. 

If you run it again, a different hash will print. That's the point! It's supposed to be random. Otherwise, what's the point of hashing?
<br>
<br>

## Add it to the database
Now, we need to create the user in the user table with the new hash password.

This requires the User model. It's also asynchronous, so we have to add 'async' and 'await'

    app.post("/create_user", (req, res) => {
        const password = "abc123"

        bcrypt.hash(password,10, async(err,hash)=>{
            console.log(err)
            console.log(hash)

            const user = await Users.create({
                username: "jayejayejaye",
                password:hash,
                createdAt: new Date(),
                updatedAt: new Date()
            })
            res.send(user)
        })
    })

This is all hard coded right now.

Now let's log someone in. 
<br>
<br>

## Log in
Copy paste that route and change 'create' to 'login'.

    app.post("/login_user", async (req, res) => {
        const password = "abc1234"

        const user = await Users.findOne({
            where: {
                username: "hunterhunter"
            }
        });

        bcrypt.compare(password, user.password, (err, result) => {
            console.log(err)
            console.log(result)
            if (err) {
                res.send(err)
            } else {
                res.send(result)
            }
        })
    })

If it works, the console.log should print true and the error is undefined. If the password is wrong, it'll print false and undefined because it did find the username, but the password was wrong. 

Now, we change the code a little to catch if the password is wrong.

    app.post("/login_user", async (req, res) => {
        const password = "abc12345"

        const user = await Users.findOne({
            where: {
                username: "hunterhunter"
            }
        });

        bcrypt.compare(password, user.password, (err, result) => {
            console.log(err)
            console.log(result)
            if (err) {
                res.send(err)
                return
            } if(!result){
                res.status(401).send("Your password does not match. Please enter your password again.")
                return
            }
            res.status(200).send("Looks like you have a matching password")
        })
    })
<br>
<br>

## making it dynamic

    app.post("/create_user", (req, res) => {
        const {username, password} = req.body

        bcrypt.hash(password,10, async(err,hash)=>{
            //create the user in the user table with the new hash password
            // this requires the User model

            const user = await Users.create({
                username: username,
                password:hash,
                createdAt: new Date(),
                updatedAt: new Date()
            })
            res.send(user)
        })
    })

    app.post("/login_user", async (req, res) => {
        const {username, password} = req.body

        const user = await Users.findOne({
            where: {
                username: username
            }
        });

        bcrypt.compare(password, user.password, (err, result) => {
            if (err) {
                res.send(err)
                return
            } if(!result){
                res.status(401).send("Your password does not match. Please enter your password again.")
                return
            }
            res.status(200).send("Looks like you have a matching password")
        })
    })

Now, we can update the body in Postman and it'll work.
<br>
<br>

## Cleaning up 
If we look at our index.js, which we've been building on since yesterday, there's a ton of routes. We haven't done anything super complex, but we've got 80+ lines of code. What about larger websites? This could be thousands of lines. Good luck debugging that. 

Let's route our routes using express router.

'Router' is a built-in function in express. If you've got express installed, you can use it. 

At the top of the document:

    const router = express.Router()

Now, do some thinking. Can you group some of these routes together? Do any of them have something in common?
Can we move routes to a different file and then require that file? 
<br>
<br>

## Using Router

Make a new top-level folder called 'routes'. Inside, make a file named 'clinicRoutes.js'. 

Remove all of your clinic routes from the index.js and put them in that file. At the top, copy or remove all the stuff from index.js that your clinic routes need. For example: 

    const express = require('express')
    const {Op} = require("sequelize");
    const router = express.Router()
    const {Clinics} = require("../models")

Then, on your routes, change all of the app.gets etc. to router.get.

At the bottom, include this:

    module.exports = router

This exports the routes on this page to the index.js. All the routes are contained within 'router' because we put ROUTER in front of all our routes. It's not app.get or app.post now, it's router.get, router.post.

On your index.js, now you just have to require that clinicRoutes.js file. 

    const clinicRoutes = require("./routes/clinicRoutes")

And tell the index.js to use that. 

    app.use("/clinic", clinicRoutes)

Now, that /clinic, is PART OF THE ROUTE. All the routes included in the clinicRoutes.js file have their routes but they now have /clinic in front of them. So for this route:

    router.get("/all_clinics", async (req,res) => {
        const allClinics = await Clinics.findAll()
        res.send(allClinics);
    })

The path looks like this:

    localhost:3012/clinic/all_clinics
