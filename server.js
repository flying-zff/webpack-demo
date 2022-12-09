const express = require('express');
const webpack = require('webpack');
const wepbackDevMiddlware = require('webpack-dev-middleware');

const app = express();
const config = require('./webpack.config.js');
const complier = webpack(config);

app.use(
    wepbackDevMiddlware(complier, {
        publicPath: config.output.publicPath,
    })
)

app.listen(3001, function(){
    console.log('Example app listening on port 3001!');
})