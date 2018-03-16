const express = require('express');
const bodyParser = require('body-parser');
const consign = require('consign');

module.exports = function(app) {

    var app = express();
    app.use(bodyParser.json());

    consign({cwd: 'app'})
    	.include('models')
    	.then('api')
    	.then('routes')
    	.into(app);

    return app;

};
