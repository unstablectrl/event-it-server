let express = require('express')
let router = express.Router()
let ctrlEvents = require('../controllers/events')

/* Home pages */
router.get('/', ctrlEvents.listEvents)
router.get('/:eventid', ctrlEvents.showEvent)
router.post('/:eventid', ctrlEvents.addEvent)

module.exports = router