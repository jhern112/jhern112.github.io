const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/submit-form', (req, res) => {
    const username = req.body.username;

    res.send(`Username is $jhern112`)
});

app.listen(3000, () => {
    console.log(`Server running on port 3000`);
});
