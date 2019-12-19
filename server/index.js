const express = require('express');

const app = express();
app.use(express.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.post('/api/message', (req, res) => {
    console.log(req.body.message);
    res.end();
});

const port = process.env.PORT || 4000;
app.listen(port, () => console.log('Server is running...'));

