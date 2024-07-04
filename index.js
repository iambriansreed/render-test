const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send(JSON.stringify(process.env));
});

app.listen(port, () => {
    console.log(`process.env JSON listening on port ${port}`);
});
