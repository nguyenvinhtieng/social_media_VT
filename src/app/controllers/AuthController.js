const Account = require('../models/Account');
const validator = require('validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require('../../credentials')

class AuthController {


    async LoginHandler(req, res) {
        const { username, password } = req.body
        if (validator.isEmpty(username, [{ ignore_whitespace: false }])
            || validator.isEmpty(password, [{ ignore_whitespace: false }]))
            return res.json({ success: false, message: 'Empty username or password' })
        try {
            let account = await Account.findOne({ username })
            if (!account) return res.json({ success: false, message: 'Username incorrect!' })
            let validPassword = await bcrypt.compare(password, account.password)
            if (!validPassword) return res.json({ success: false, message: 'Password incorrect!' })
            let token = jwt.sign({ _id: account._id }, SECRET_KEY);
            return res.json({ success: true, message: 'Login successfully!', token })
        } catch (error) {
            console.log(error)
            return res.json({ success: false, message: error.message })
        }
    }

    async RegisterHandler(req, res) {
        const { username, password } = req.body
        if (validator.isEmpty(username, [{ ignore_whitespace: false }])
            || validator.isEmpty(password, [{ ignore_whitespace: false }]))
            return res.json({ success: false, message: 'Empty username or password' })
        try {
            const acc = await Account.findOne({ username })
            if (acc) {
                return res.json({ success: false, message: "Username was exitst!" })
            }
            let newPass = await bcrypt.hash(password, 10);
            const data = { username, password: newPass }
            const account = new Account(data)
            await account.save()
            return res.json({ success: true, message: "Register success!" })
        } catch (error) {
            console.log(error)
            return res.json({ success: false, message: err.message })
        }
    }
}

module.exports = new AuthController();
