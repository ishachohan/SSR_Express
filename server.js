import 'babel-polyfill';
import bodyParser from 'body-parser';
import React from "react";
import ReactDOMServer from 'react-dom/server';
//import StaticRouter  from 'react-router-dom'
import App from './src/App';

//import  Provider  from 'react-redux';

const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static('./build/public'));

function getAssets() {
    return getAssets.assets || (() => {
            getAssets.assets = JSON.parse(fs.readFileSync('./webpack-assets.json'));
            return getAssets.assets
        })()
}

app.listen(PORT, () => {
    console.log('App running at ' + PORT );
});

app.get('*',(req,res) => {
    const context = {}


    const content = ReactDOMServer.renderToString(
        <App />
    )
   
  //  const main = getAssets();
   // const app1 = main.javascript.app;
  //  const vendor = main.javascript.vendor;
  //  const style = main.styles.app;

    const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <title>SSR</title>
    </head>
    <body>
        <div id="root"> ${content} </div>
        <script src="client_bundle.js"></script>
    </body>
    </html>
    `
    res.send(html);
});



