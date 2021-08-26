const express = require('express');
const fstat = require('fs');
const app = express();
const path = require('path')
app.use(express.json())
app.use(express.urlencoded({
    extended: false
}))
app.use(express.static(path.join(__dirname, 'public')))

const base_url = "https://rest-api-vanguarda-messaging.herokuapp.com/file/"


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
    res.status(200).send({
        results: [{
                letter: "A",
                url: `${base_url}A-libras.png`
            },
            {
                letter: "B",
                url: `${base_url}B-libras.png`
            },
            {
                letter: "C",
                url: `${base_url}C-libras.png`
            },
            {
                letter: "Ç",
                url: `${base_url}Ç-libras.png`
            },
            {
                letter: "D",
                url: `${base_url}D-libras.png`
            },
            {
                letter: "E",
                url: `${base_url}E-libras.png`
            },
            {
                letter: "F",
                url: `${base_url}F-libras.png`
            },
            {
                letter: "G",
                url: `${base_url}G-libras.png`
            },
            {
                letter: "H",
                url: `${base_url}H-libras.png`
            },
            {
                letter: "I",
                url: `${base_url}I-libras.png`
            },
            {
                letter: "J",
                url: `${base_url}J-libras.png`
            },
            {
                letter: "K",
                url: `${base_url}K-libras.png`
            },
            {
                letter: "L",
                url: `${base_url}L-libras.png`
            },
            {
                letter: "M",
                url: `${base_url}M-libras.png`
            },
            {
                letter: "N",
                url: `${base_url}N-libras.png`
            },
            {
                letter: "O",
                url: `${base_url}O-libras.png`
            },
            {
                letter: "P",
                url: `${base_url}P-libras.png`
            },
            {
                letter: "Q",
                url: `${base_url}Q-libras.png`
            },
            {
                letter: "R",
                url: `${base_url}R-libras.png`
            },
            {
                letter: "S",
                url: `${base_url}S-libras.png`
            },
            {
                letter: "T",
                url: `${base_url}T-libras.png`
            },
            {
                letter: "U",
                url: `${base_url}U-libras.png`
            },
            {
                letter: "V",
                url: `${base_url}V-libras.png`
            },
            {
                letter: "W",
                url: `${base_url}W-libras.png`
            },
            {
                letter: "X",
                url: `${base_url}X-libras.png`
            },
            {
                letter: "Y",
                url: `${base_url}Y-libras.png`
            },
            {
                letter: "Z",
                url: `${base_url}Z-libras.png`
            }
        ]
    })
});

app.post('/translate', (req, res) => {
    const phrase = req.body.phrase
    const newPhrase = retira_acentos(phrase).toUpperCase()
    const words = newPhrase.split(" ")
    const nWords = []

    // console.log(`phrase=${phrase}`)
    console.log(`words=${words},${words.length}`)
    // console.log(`newPhrase=${newPhrase}`)
    // console.log(words)
    for (let j = 0; j < words.length; j++) {
        const splitWord = []
        const word = words[j]
        for (let i = 0; i < word.length; i++) {
            splitWord[i] = word[i]
        }
        nWords.push(splitWord)
    }

    console.log(`nWords[0]=${nWords[0]}`)

    function retira_acentos(str) {
        com_acento = "ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝŔÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿŕ";
        sem_acento = "AAAAAAACEEEEIIIIDNOOOOOOUUUUYRsBaaaaaaaceeeeiiiionoooooouuuuybyr";
        novastr = "";
        for (i = 0; i < str.length; i++) {
            troca = false;
            for (a = 0; a < com_acento.length; a++) {
                if (str.substr(i, 1) == com_acento.substr(a, 1)) {
                    novastr += sem_acento.substr(a, 1);
                    troca = true;
                    break;
                }
            }
            if (troca == false) {
                novastr += str.substr(i, 1);
            }
        }
        return novastr;
    }
    const results = []
    // console.log(`letters.lenght=${letters.length}`)
    for (let i = 0; i < nWords.length; i++) {
        const images = []
        const splitWord = nWords[i]
        console.log(`splitWord=${splitWord}`)

        for (let j = 0; j < splitWord.length; j++) {
            images[j] = {
                letter: splitWord[j],
                url: `${base_url}${splitWord[j]}-libras.png`
            }
        }
        results.push(images)
    }
    res.status(201).send({
        results
    })
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