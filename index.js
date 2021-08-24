const express = require('express');
const app = express();

app.use(express.json())

app.get('/signs', (req, res) => {
    res.status(200).send(
        [{
                letter: "A",
                url: ""
            },
            {
                letter: "B",
                url: ""
            },
            {
                letter: "C",
                url: ""
            },
            {
                letter: "D",
                url: ""
            },
            {
                letter: "E",
                url: ""
            },
            {
                letter: "F",
                url: ""
            },
            {
                letter: "G",
                url: ""
            },
            {
                letter: "H",
                url: ""
            },
            {
                letter: "I",
                url: ""
            },
            {
                letter: "J",
                url: ""
            },
            {
                letter: "K",
                url: ""
            },
            {
                letter: "L",
                url: ""
            },
            {
                letter: "M",
                url: ""
            },
            {
                letter: "N",
                url: ""
            },
            {
                letter: "O",
                url: ""
            },
            {
                letter: "P",
                url: ""
            },
            {
                letter: "Q",
                url: ""
            },
            {
                letter: "R",
                url: ""
            },
            {
                letter: "S",
                url: ""
            },
            {
                letter: "T",
                url: ""
            },
            {
                letter: "U",
                url: ""
            },
            {
                letter: "V",
                url: ""
            },
            {
                letter: "W",
                url: ""
            },
            {
                letter: "X",
                url: ""
            },
            {
                letter: "Y",
                url: ""
            },
            {
                letter: "Z",
                url: ""
            }
        ]
    )
});

app.post('/signs', (req, res) => {

})

app.get('/tshirt', (req, res) => {
    res.status(200).send({
        tshirt: 'Camiseta',
        size: "large"
    })
});

app.post('/tshirt/:id', (req, res) => {

    const id = req.params;
    const logo = req.body;

    if (!logo) {
        res.status(418).send({
            message: 'We need a logo!'
        })
    }
    res.send({
        tshirt: `Camiseta with your ${logo} and ID of ${id}`
    })
});

app.listen(
    process.env.PORT || 5000,
    () => console.log(`it's aline on http://localhost:5000`)
)