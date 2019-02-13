const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use('/home', (req, res, next) => {
    res.sendFile(path.join(__dirname,'views/shop.html'))
});

app.use((req, res, next) => {
   console.log('Listening to Request');
   res.status(404).sendFile(path .join(__dirname, 'views/404.html'))
});
app.listen(3000);
