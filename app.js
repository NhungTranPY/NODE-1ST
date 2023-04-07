const express = require('express')
const bodyParser = require('body-parser')
const app = express()

// app.use((req, res, next) => {
//     console.log('In the middleware');
//     next() // allows the request to continue to the next middleware in line
// })

// app.use('/', (req, res, next) => {
//     console.log('This always runs');
//     next()
// })

app.use(bodyParser.urlencoded({extended: false}))

app.use('/add-product', (req, res, next) => {
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>')
})

app.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/')
})

app.use('/', (req, res, next) => {
    res.send('<h1>Hello from Express</h1>')
})

app.listen(3000)