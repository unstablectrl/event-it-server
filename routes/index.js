let express = require('express')
let router = express.Router()
let ctrlHome = require('../controllers/home')
let ctrlSessions = require('../controllers/sessions')
let ctrlOther = require('../controllers/other')

/* Home pages */
router.get('/', ctrlHome.home)
router.post('/signin', ctrlSessions.signin)
router.post('/signup', ctrlSessions.signup)

/* About pages */
router.get('/about', ctrlOther.about)

module.exports = router
