const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use('/home', (req, res, next) => {
    res.send('<h1> Welcome to my home page </h1>');
});

app.use((req, res, next) => {
   console.log('Listening to Request');
   res.status(404).send('<h1> Page not found</h1>');
});
app.listen(3000);
