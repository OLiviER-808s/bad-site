const sqlite3 = require('sqlite3').verbose()

const db = new sqlite3.Database('./database.db', sqlite3.OPEN_READWRITE, (err) => {
  if (err) return console.log(err)
})

db.run('CREATE TABLE users(id INTEGER PRIMARY KEY,name,email,password)')
db.run('CREATE TABLE products(id INTEGER PRIMARY KEY,name,description,price)')