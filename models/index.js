const List = require('./lists')
const Item = require('./item')

List.hasMany(Item)

Item.belongsTo(Lists)

module.exports = { List, Item }