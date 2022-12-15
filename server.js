const express = require('express')
const sqlite3 = require('sqlite3').verbose()

const db = new sqlite3.Database('./database.db', sqlite3.OPEN_READWRITE, (err) => {
  if (err) return console.log(err)
})

const app = express()

app.get('/api/products/search', (req, res) => {
  if (req.query.term) {
    const sql = `SELECT * FROM products WHERE name LIKE '%${req.query.term}%'`

    db.all(sql, [], (err, rows) => {
      if (err) return console.log(err)
    
      res.json(rows)
    })
  }
})

app.listen(5000, () => console.log('Server started on port 5000'))