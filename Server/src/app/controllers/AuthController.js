const User = require('../models/User');
const validator = require('validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require('../../credentials')

class AuthController {
    async LoginHandler(req, res) {
        const { username, password } = req.body
        if (validator.isEmpty(username ? username : "", [{ ignore_whitespace: false }])
            || validator.isEmpty(password ? password : "", [{ ignore_whitespace: false }]))
            return res.json({ success: false, message: 'Empty username or password' })
        try {
            let user = await User.findOne({ username })
            if (!user) return res.json({ success: false, message: 'Username incorrect!' })
            let validPassword = await bcrypt.compare(password, user.password)
            if (!validPassword) return res.json({ success: false, message: 'Password incorrect!' })
            let token = jwt.sign({ _id: user._id }, SECRET_KEY);
            return res.json({ success: true, message: 'Login successfully!', token })
        } catch (error) {
            console.log(error)
            return res.json({ success: false, message: error.message })
        }
    }

    async RegisterHandler(req, res) {
        const { username, password, name, image } = req.body
        if (username.trim() === '' || password.trim() === '' || name.trim() === '')
            return res.json({ success: false, message: 'Missing data!' })
        try {
            const us = await User.findOne({ username })
            if (us) {
                return res.json({ success: false, message: "Username was exitst!" })
            }
            let newPass = await bcrypt.hash(password, 10);
            const data = { username, password: newPass, name }
            const user = new User(data)
            await user.save()
            return res.json({ success: true, message: "Register success!", user })
        } catch (error) {
            console.log(error)
            return res.json({ success: false, message: err.message })
        }
    }
}

module.exports = new AuthController();
