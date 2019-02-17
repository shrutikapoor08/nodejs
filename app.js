const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

const authRoutes = require('./routes/auth');
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(authRoutes);


app.use('/',(req, res) => {
   console.log('Listening to Request');
   res.setHeader('Set-Cookie', 'loggedIn=true;' );
   res.send();
});


app.listen(3000);
