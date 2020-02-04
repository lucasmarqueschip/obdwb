const express = require('express');
const consign = require('consign');
const app = express();
const PORT = process.env.PORT || 3000;
app.set('views', './src/views');
app.set('view engine', 'ejs');

consign()
    .include('src/routes.js')
    .then('src/controllers/')
    .into(app);

app.listen(PORT, () => console.log('Server on-line'));
