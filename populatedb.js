const sqlite3 = require('sqlite3').verbose()

const db = new sqlite3.Database('./database.db', sqlite3.OPEN_READWRITE, (err) => {
  if (err) return console.log(err)
})

// Populates Tables
const products = [
  {
    name: 'Fried Chicken Box',
    description: "The classic taste of Los Pollos Hermanos. Hank Schrader's favourite.",
    price: '$10.00'
  },
  {
    name: 'Chicken Burger',
    description: 'Chicken Burger made with Los Pollos Hermanos spices - very addictive.',
    price: '$5.00'
  },
  {
    name: 'Fries',
    description: 'Simply fires.',
    price: '$2.50'
  },
  {
    name: 'Spice Curls',
    description: 'The curly fry with the south western kick.',
    price: '$3.00'
  },
  {
    name: 'Blue Sky',
    description: '99% Pure Meth, produced here in Albuquerque',
    price: '$30.00'
  }
]

const users = [
  {
    name: 'Gus Fring',
    email: 'gus.fring@lospolloshermanos.com',
    password: 'password' // change to hashed password here
  },
  {
    name: 'Walter White',
    email: 'walter.white@thelaundrymat.com',
    password: 'password'
  },
  {
    name: 'Jesse Pinkman',
    email: 'jesse.pinkman@thelaundrymat.com',
    password: 'password'
  },
  {
    name: 'Mike Ehrmantraut',
    email: 'mike.ehrmantraut@lospolloshermanos.com',
    password: 'password'
  },
  {
    name: 'Saul Goodman',
    email: 'saul.goodman@saulgoodmanassociates.com',
    password: 'password',
  }
]

products.forEach(product => {
  db.run(`INSERT INTO products(name,description,price) VALUES (?,?,?)`, [product.name, product.description, product.price], (err) => {
    if (err) return console.log(err)
  })
})

users.forEach(user => {
  db.run(`INSERT INTO users(name,email,password) VALUES (?,?,?)`, [user.name, user.email, user.password], (err) => {
    if (err) return console.log(err)
  })
})

// querys datbase to make sure tables are there
db.all('SELECT * FROM products', [], (err, rows) => {
  if (err) return console.log(err)

  rows.forEach(console.log)
})

db.all('SELECT * FROM users', [], (err, rows) => {
  if (err) return console.log(err)

  rows.forEach(console.log)
})


