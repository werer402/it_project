const add = (a, b) => { return a + b }
const minus = (a, b) => { return a - b }
module.exports = {
    add: add,
    minus: minus


}
const fs = require('fs')
let res = fs.readFileSync("some.txt", "utf-8")
fs.writeFileSync('some.txt', res + "Hello")
console.log(res)
fs.mkdir('textfiles')