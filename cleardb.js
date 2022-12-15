const sqlite3 = require('sqlite3').verbose()

const db = new sqlite3.Database('./database.db', (err) => {
  if (err) return console.log(err)
})

db.run('DROP TABLE users')
db.run('DROP TABLE products')
