const express = require('express');
const User = require('../models/user.model');
const bcrypt = require('bcryptjs');


const userRouter = express.Router();

const salt = bcrypt.genSaltSync(10);

module.exports = userRouter;

userRouter.post('/register', (req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const pass = req.body.password;
    const hashedPassword = bcrypt.hashSync(pass, salt);
    const address = req.body.address;

    const user = new User({username: username, email: email, password: hashedPassword, address: address})

    user.save((err, doc) => {
        if (err) return res.status(400).json({ success: false, err });
        return res.status(200).json({
            success: true,
            user: doc
        });
    });

});

userRouter.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    User.findOne({ username: username }, (err, user) => {
        if(!user) {
            return res.json({
                success: false,
                message: "incorrect email or password!"
            })
        }

        bcrypt.compare(password, user.password, (err, matched) => {
            if (!matched){
                return res.json({
                    success: false,
                    message: "incorrect email or password!"
                })
            }
            
            return res.json({
                success: true
            })
        })
    })
});

