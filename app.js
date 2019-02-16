const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use('/',(req, res) => {
   console.log('Listening to Request');
   res.setHeader('Set-Cookie', 'loggedIn=true;' );
   res.send();
   // res.status(404).sendFile(path .join(__dirname, 'views/404.html'));
});


app.listen(3000);
