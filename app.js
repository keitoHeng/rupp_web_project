const express = require('express');
const userRoute = require('./routers/userRoute')
const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.use(userRoute);

app.listen(3000);
console.log('Connected!!!!!!');