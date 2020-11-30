const router = require('express').Router()
const { Lists, Item } = require('../models')

// GET all lists
router.get('/lists', (req, res) => {
    Lists.findAll()
        .then(lists => res.json(lists))
        .catch(err => console.error(err))
})

// ADD a list
router.post('/lists/:id', (req, res) => {
    Lists.create(req.body)
        .then((list) => res.json(lists))
        .catch(err => console.error(err))
})

// DELETE a list
router.delete('lists/:id', (req, res) => {
    Lists.destroy({ where: { id: req.params.id } })
        .then(() => res.sendStatus(200))
        .cathc(err => console.error(err))
})

module.exports = router