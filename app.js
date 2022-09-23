const express = require('express')
const app = express()
const port = 3000

const exphbs = require('express-handlebars')
let category = 'Homepage'

app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index', { categories: category })
})

app.get('/:category', (req, res) => {
  category = `${req.params.category}`
  res.render('index', {categories: category})
  // console.log(req.params.category)
  // res.send(`<h1>${req.params.category}<h1>`)
})

app.listen(port, () => {
  console.log(`Express is running at port:${port}`)
})