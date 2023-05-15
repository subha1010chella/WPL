const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

let items = [
  { id: 1, name: 'Item 1', price: 10 ,desc:'Item 1 has a price of 10 and is of poor quality'},
  { id: 2, name: 'Item 2', price: 20 ,desc:'Item 2 has a price of 20 and is of medium quality'},
  { id: 3, name: 'Item 3', price: 30 ,desc:'Item 3 has a price of 30 and is of high quality'},
]

app.get('/', (req, res) => {
  res.render('home', { items })
})

app.get('/items/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const item = items.find(item => item.id === id)
  if (item) {
    res.render('item', { item })
  } else {
    res.status(404).send('Item not found')
  }
})

app.post('/items', (req, res) => {
  const { name, price ,desc} = req.body
  const id = items.length + 1
  const item = { id, name, price: parseInt(price) ,desc}
  items.push(item)
  res.redirect('/')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
