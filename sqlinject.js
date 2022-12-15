const sqlite3 = require('sqlite3').verbose()

const db = new sqlite3.Database('./database.db', sqlite3.OPEN_READWRITE, (err) => {
  if (err) return console.log(err)
})

const input = "' UNION SELECT * FROM users; -- "

db.all("SELECT * FROM products WHERE name LIKE '%' UNION SELECT * FROM users; -- %'", [], (err, rows) => {
  if (err) return console.log(err)

  rows.forEach(console.log)
})

