const express = require('express');
const app = express();
const path = require('path')
app.use(express.json())

app.use(express.static(path.join(__dirname, 'public')))

app.get('/file/:name', function (req, res, next) {
    var options = {
        root: path.join(__dirname, 'public/images'),
        dotfiles: 'deny',
        headers: {
            'x-timestamp': Date.now(),
            'x-sent': true
        }
    }

    var fileName = req.params.name
    res.sendFile(fileName, options, function (err) {
        if (err) {
            next(err)
        } else {
            console.log('Sent:', fileName)
        }
    })
})

app.get('/signs', (req, res) => {
    const base_url = "https://rest-api-vanguarda-messaging.herokuapp.com/file/"
    res.status(200).send({
        results: [{
                letter: "A",
                url: `${base_url}A-libras.png`
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
    })
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