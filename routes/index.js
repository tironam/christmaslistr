const router = require('express').Router()

router.use('/api', require('./listRoutes.js'))
router.use('/api', require('./itemRoutes.js'))

module.exports = router