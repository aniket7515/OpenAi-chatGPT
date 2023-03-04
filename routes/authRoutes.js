const express= require('express')
const { registerController, loginController, logoutController } = require('../controllers/authController')

const router= express.Router()

// regiuster
router.post('/register',registerController)

// login
router.post('/login',loginController)


//logout
router.post('/logout',logoutController)


module.exports= router