const express = require('express')
const cors = require('cors')
const app = express()
const products = [
    {
        'id': 1,
        'name': 'Vélo',
        'price': 149.99,
        'quantity': 24,
        'description': 'Un super vélo de course'
    },

    {
        'id': 2,
        'name': 'Patinette',
        'price': 12.99,
        'quantity': 12,
        'description': 'Bon bien patiner'
    },
    {
        'id': 3,
        'name': 'Trottinette',
        'price': 24.99,
        'quantity': 6,
        'description': 'Une trottinette de qualité'
    }


]

const port = 3000
app.use(cors())
app.get('/products', (req, res) => {res.send(products)});

//avoir un produit en particulier en fonction de son id
app.get('/products/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const product = products.find(product => product.id === id)
    if (product) {
        res.send(product)
    } else {
        res.status(404).send('Product not found')
    }
})

app.listen(port, () => console.log(`the server is listening on port ${port}!`))
