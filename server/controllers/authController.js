const User = require('../models/users')
const jwt = require("jsonwebtoken");

const maxAge = 60*60*24
const createToken = (id) => {
    return jwt.sign({id}, 'gizli kelime', {expiresIn: maxAge})
}

const login_post = async (req, res) => {
    const {username, password} = req.body
    console.log(username, password, 'username password')
    try {
        const user = await User.login(username, password)
        const token = createToken(user._id)
        res.cookie('jwt', token, {httpOnly: true}, maxAge * 1000)
        res.redirect('/all-blogs')
    }
    catch (e) {
        res.json({errorMessage: e})
        console.log(e)
    }
}

const signup_post = (req, res) => {
    const user = new User(req.body)
    user.save()
        .then(() => {
            res.redirect('/login')
        })
        .catch((errors) => {
            console.log(errors)
        })
}
const logout_get = (req, res) => {
    res.cookie('jwt', '', {maxAge: 1})
    res.redirect(307, '/login')
}

module.exports = {
    login_post,
    signup_post,
    logout_get
}