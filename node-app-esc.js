const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.static('images'));
app.use(express.static('css'));
// Handling non matching request from the client
app.use((req, res, next) => {
    res.status(404).send(
        "<h1>Error 404: Page not found on the server</h1>")});

app.listen(port, () => {
    console.log(`Awesome app listening on port ${port}`)
});


