const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/submit-form', (req, res) => {
    const formData = req.body;

    res.send(`Form submitted successfully`)
});

app.listen(3000, () => {
    console.log(`Server running on port 3000`);
});
