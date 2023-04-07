const express = require('express')

const app = express()

// app.use((req, res, next) => {
//     console.log('In the middleware');
//     next() // allows the request to continue to the next middleware in line
// })

app.use('/', (req, res, next) => {
    console.log('This always runs');
    next()
})

app.use('/add-product', (req, res, next) => {
    console.log('In another middleware');
    res.send('<h1>The add product page</h1>')
})

app.use('/', (req, res, next) => {
    console.log('In another middleware');
    res.send('<h1>Hello from Express</h1>')
})

app.listen(3000)