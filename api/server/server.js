require('./config/config');

const express = require('express');
const app = express();

const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

//parse application/json
app.use(bodyParser.json());


app.use(require('./routes/tasks'));


let options = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};

mongoose.connect('mongodb://localhost:27017/to_do_db', options, (err, res) => {
    if (err) throw err;
    console.log('Base de datos ONLINE');
});

app.listen(process.env.PORT, () => {
    console.log('EScuchando puerto', process.env.PORT);
});