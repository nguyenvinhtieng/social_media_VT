const validator = require('validator')

function validUserData(req, res, next) {
    let { name, email, introduction, image, website } = req.body
    if (validator.isEmpty(name))
        return res.json({ success: false, message: "Please enter your name" })
    if (!validator.isEmpty(image) && !image.startsWith("https://"))
        return res.json({ success: false, message: "Not valid image link" })
    if (!validator.isEmpty(website) && !website.startsWith("https://"))
        return res.json({ success: false, message: "Not valid website link" })
    if (!validator.isEmpty(email) && !validator.isEmail(email))
        return res.json({ success: false, message: "Email address is invalid" })
    next()
}
module.exports = validUserData