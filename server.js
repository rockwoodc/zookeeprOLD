const express = require('express');
//tells server to listen for requests
const app = express();

//method to make the server listen
app.listen(2001, () => {
    console.log('API server now on port 3001!');
})