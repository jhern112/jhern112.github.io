const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/submit-form', (req, res) => {
    const username = req.body.username;

    res.sendFile('/Users/javier/Web Project/home.html')
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
