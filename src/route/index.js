const AuthRoute = require('./auth')
const PostRoute = require('./post')
const UserRoute = require('./user')
function route(app) {
    app.use('/api', AuthRoute)
    app.use('/api/posts/', PostRoute)
    app.use('/api/users/', UserRoute)
}
module.exports = route