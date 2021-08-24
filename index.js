const express = require('express');
const app = express();

app.use(express.json())

app.get('/tshirt', (req, res) => {
    res.status(200).send({
        tshirt: 'Camiseta',
        size: "large"
    })
});

app.post('/tshirt/:id', (req, res) => {

    const {
        id
    } = req.params;
    const {
        logo
    } = req.body;

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