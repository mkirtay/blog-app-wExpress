const User = require('../models/users')

const login_get = (req, res) => {}
const login_post = (req, res) => {}
const signup_get = (req, res) => {}
const signup_post = (req, res) => {
    const user = new User(req.body)
    user.save()
        .then( () => {
            res.redirect('/')
        })
        .catch((errors) => {
            console.log(errors)
        })
}
const logout_get = (req, res) => {}

module.exports = {
    login_get,
    login_post,
    signup_get,
    signup_post,
    logout_get
}