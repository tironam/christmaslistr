// const db = require('../db')

// const orm = {
//     getAll(table, cb) {
//         db.query(`SELECT * FROM ${table}`, (err, data) => {
//             if (err) { console.log(err) }
//             cb(data)
//         })
//     },
//     getAllWhere(table, where, cb) {
//         db.query(`SELECT * FROM ${table} WHERE ?`, where, (err, data) => {
//             if (err) { console.log(err) }
//             cb(data)
//         })
//     },
//     createOne(table, data, cb) {
//         db.query(`INSERT INTO ${table} SET ?`, data, (err, info) => {
//             if (err) { console.log(err) }
//             cb(info)
//         })
//     }

// }

// module.exports = orm