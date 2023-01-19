const express = require('express')
const {Op} = require("sequelize");
const router = express.Router()
const {Users} = require("../models")
const bcrypt = require('bcrypt')



// ---------------------day4--------------------

router.post("/create_user", (req, res) => {
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

router.post("/login_user", async (req, res) => {
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

module.exports = router;