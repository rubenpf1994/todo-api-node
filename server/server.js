require('./config/config');

const express = require('express');

const app = express();
const bodyParser = require('body-parser');

//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

//parse application/json
app.use(bodyParser.json());

app.get('/list', (req, res) => {
    res.status(200).json(
        message = 'hello word'
    );
});

app.post('/new', (req, res) => {

    let body = req.body;

    res.status(200).json({
        body
    });
});

app.put('/update/:id', (req, res) => {
    let id = req.params.id;
    res.status(200).json({
        id
    });
});

app.delete('/delete/:id', (req, res) => {
    res.status(200).json(
        message = 'hello word'
    );
});

app.listen(process.env.PORT, () => {
    console.log('EScuchando puerto', process.env.PORT);
});