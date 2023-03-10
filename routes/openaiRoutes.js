const express= require('express')

const {summaryController,paragraphController,chatBotController,jsconverterController} = require('../controllers/openAiController')


const router= express.Router()

router.post('/summary',summaryController)
router.post('/paragraph',paragraphController)
router.post('/chatbot',chatBotController)
router.post('/js-converter',jsconverterController)


module.exports= router