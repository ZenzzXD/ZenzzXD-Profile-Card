const express = require('express');
const path = require('path');
const config = require('./config');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'page'));
app.use(express.static(path.join(__dirname, 'images')));

app.get('/', async (req, res) => {
    res.render('profile', {
        data: config.settings
    });
});

app.listen(config.PORT, () => {
    console.log(`Server started successfully on http://localhost:${config.PORT}`);
});