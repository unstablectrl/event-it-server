let express = require('express')
let router = express.Router()
let ctrlEvents = require('../controllers/events')

/* Home pages */
router.get('/', ctrlEvents.listEvents)
router.post('/', ctrlEvents.addEvent)
router.get('/:eventid', ctrlEvents.showEvent)

module.exports = router