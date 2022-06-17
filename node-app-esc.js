const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.static('images'));
app.use(express.static('css'));

app.listen(port, () => {
    console.log(`Awesome app listening on port ${port}`)
});


