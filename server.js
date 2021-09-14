const express = require('express');
const path = require('path');

const ngApp = express();

ngApp.use(express.static('./dist/r915'));

ngApp.get('/*', function (request, response) {
    response.sendFile(path.join(__dirname, '/dist/r915/index.html'));
});

ngApp.listen(process.env.PORT || 8080);