let express = require('express')
let router = express.Router()
let ctrlHome = require('../controllers/home')
let ctrlOther = require('../controllers/other')

/* Home pages */
router.get('/', ctrlHome.home)
router.get('/sign-in', ctrlHome.signin)

/* About pages */
router.get('/about', ctrlOther.about)

module.exports = router
