const express = require('express');
const http = require('http');
const app = express();
const port = 3000;

// app.get('/', (req, res) => {
//     res.send('My name is (G)root.');
// });

app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});


