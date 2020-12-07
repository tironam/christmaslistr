const List = require('./list')
const Item = require('./item')

List.hasMany(Item)

Item.belongsTo(List)

module.exports = { List, Item }