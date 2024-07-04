const express = require('express');
const app = express();
const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
    res.send('<pre>' + JSON.stringify(process.env, null, 2) + '</pre>');
});

app.listen(port, () => {
    console.log(`process.env JSON listening on port ${port}`);
});
