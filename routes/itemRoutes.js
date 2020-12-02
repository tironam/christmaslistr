const router = require('express').Router()
const { Lists, Item } = require('../models')

// GET items based on list
router.get('/item/:id', (req, res) => {
    Item.findOne({ id: req.params.id })
        .then(item => res.json(item))
        .catch(err => console.error(err))
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