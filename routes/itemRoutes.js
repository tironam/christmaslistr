const router = require('express').Router()
const db = require('../db')

// GET items based on list
router.get('/lists', (req, res) => {
    db.query('SELECT * FROM lists')
})

// ADD an item
router.post('/item', (req, res) => {
    Item.create(req.body)
        .then((item) => res.json(item))
        .catch(err => console.error(err))
})

// EDIT an item
router.put('/item/:id', (req, res) => {
    Item.update(req.body, { where: { id: req.params.id } })
        .then(() => res.sendStatus(200))
        .catch(err => console.error(err))
})

// DELETE  an item
router.delete('/item/:id', (req, res) => {
    Item.destroy({ where: { id: req.params.id } })
        .then(() => res.sendStatus(200))
        .catch(err => console.error(err))
})

module.exports = router