const User = require('../models/User')
class UserController {

    async updateUser(req, res) {
        let id = req._id
        try {
            const user = await User.findOneAndUpdate({ userid: id }, req.body, { new: true })
            return res.json({ success: true, message: "User was updated!", user })
        } catch (error) {
            console.log(error)
            return res.json({ success: false, message: error.message })
        }
    }

    async viewUser(req, res) {
        let slug = req.params.slug
        try {
            let user = await User.findOne({ slug }).select('-password')
            if (!user) return res.json({ success: false, message: "User not found" })
            return res.json({ success: true, message: "Get user data successfully", user })
        } catch (error) {
            console.log(error)
            return res.json({ success: false, message: error.message })
        }
    }

    async getUser(req, res) {
        let _id = req._id
        try {
            const user = await User.findOne({ _id }).select('-password')
            if (!user) return res.json({ success: false, message: "User not found" })
            return res.json({ success: true, message: "Get user data successfully", user })
        } catch (error) {
            console.log(error)
            return res.json({ success: false, message: error.message })
        }
    }
}

module.exports = new UserController();