const express = require('express');
const morgan = require('morgan')
const {readFileSync} = require('fs');

// express app
const app = express();

// register view engine
app.set('view engine', 'ejs')

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.listen(3000)


// Routes
app.get('/', (req, res) => {

    res.render('shop');

});

app.get('/info', (req, res) => {

    res.render('info');
    
})

app.get('/items', (req, res) => {

    res.json(JSON.parse(readFileSync('items.json')));

});