const express = require('express');
const consign = require('consign');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;
app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use(express.static('src/public'));

consign()
    .include('src/routes.js')
    .then('src/controllers/')
    .into(app);

app.listen(PORT, () => console.log('Server on-line'));
