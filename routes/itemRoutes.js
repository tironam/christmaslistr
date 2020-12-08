const router = require('express').Router()
const db = require('../db')

// GET items based on list
router.get('/items', (req, res) => {
    db.query('SELECT * FROM items', (err, items) => {
        if (err) { console.log(err) }
        res.json(items)
    })
})

// ADD an item
router.post('/items', (req, res) => {
    db.query('INSERT INTO items SET ?', req.body, (err, items) => {
        if (err) { console.log(err) }
        res.json(items)
    })
})

module.exports = router