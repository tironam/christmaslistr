const Lists = require('./lists')
const Item = require('./item')

Lists.hasMany(Item)

Item.belongsTo(Lists)

module.exports = { Lists, Item }