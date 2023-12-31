const express = require('express')
const cors = require('cors')
const app = express()
const formations = [
    {
        "id": "Ghkkotouof50ntgon568nfriuh!@Gijgtiu",
        "title": "CDA",
        "description": "On decrit la formation ici!",
        "certificateCode": "RNCP1234",
        "calendar": [
            {
                "startDate": "17/10/2022",
                "endDate": "19/10/2022",
                "schedule": "9H - 17H"
            },
            {
                "startDate": "20/10/2022",
                "endDate": "21/10/2022",
                "schedule": "9H - 12H"
            }
        ],
        "localisation": {
            "company": "M2I Formation",
            "address": "69 avenue Tony Garnier 69007"
        },
        "price": "200€/jour",
        "assigned": {
            "id": "GHkhitnunk45690Y70V@hfeluhuik"
        },
        "applicants": [
            {
                "id": "GjojGKnfiuhgur68jhikuhgu@juhuih"
            },
            {
                "id": "GKKOjuriuhih96njig5@jojioijoigb"
            }
        ]
    },
    {
        "id": "FGjnurunigruRY568nfriuh!@Gijgtiu",
        "title": "DWWM",
        "description": "Développement Web",
        "certificateCode": "RNCP5678",
        "calendar": [
            {
                "startDate": "17/10/2022",
                "endDate": "19/10/2022",
                "schedule": "9H - 17H"
            },
            {
                "startDate": "20/10/2022",
                "endDate": "21/10/2022",
                "schedule": "9H - 17H"
            }
        ],
        "localisation": {
            "company": "ESGI",
            "address": "69 avenue Tony Garnier 69007"
        },
        "price": "400€/jour",
        "assigned": {},
        "applicants": [
            {
                "id": "GjojGKnfiuhgur68jhikuhgu@juhuih"
            },
            {
                "id": "GKKOjuriuhih96njig5@jojioijoigb"
            }
        ]
    }

]

const port = 3000
app.use(cors())
app.get('/formations', (req, res) => {res.send(formations)});

//avoir un produit par son id
app.get('/formations/:id', (req, res) => {
    const id = req.params.id
    const formation = formations.find(formation => formation.id === id)
    if (formation) {
        res.send(formation)
    } else {
        res.status(404).send('Formation not found')
    }
})

app.listen(port, () => console.log(`the server is listening on port ${port}!`))


// app.get('/formation/:id', (req, res) => {
//     const id = parseInt(req.params.id)
//     const formation = formation.find(product => formation.id === id)
//     if (formation) {
//         res.send(formation)
//     } else {
//         res.status(404).send('Product not found')
//     }
// })

// app.listen(port, () => console.log(`the server is listening on port ${port}!`))
