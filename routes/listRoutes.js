const router = require('express').Router()
const { List, Item } = require('../models')

// GET all list
router.get('/list', (req, res) => {
    List.findAll()
        .then(list => res.json(list))
        .catch(err => console.error(err))
})

// ADD a list
router.post('/list/:id', (req, res) => {
    List.create(req.body)
        .then((list) => res.json(list))
        .catch(err => console.error(err))
})

// DELETE a list
router.delete('list/:id', (req, res) => {
    List.destroy({ where: { id: req.params.id } })
        .then(() => res.sendStatus(200))
        .catch(err => console.error(err))
})

module.exports = router