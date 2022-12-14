const router = require('express').Router()
const authController = require('../controllers/authController')

router.post('/login', authController.login_post)
router.post('/sign-up', authController.signup_post)
router.get('/logout', authController.logout_get)

module.exports = router
