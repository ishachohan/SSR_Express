const path = require('path')
const webpackNodeExternals = require('webpack-node-externals')
var AssetsPlugin = require('assets-webpack-plugin')
var assetsPluginInstance = new AssetsPlugin()

module.exports = {
    target: 'node',
    entry : './server.js',
    output:{
        filename : 'bundle.js',
        path : path.resolve(__dirname,'build'),
        publicPath : '/build'

    },
    module :{
        rules :[
            {
                test : /\.(js?|jsx?)$/,
                loader : 'babel-loader',
                exclude : '/node_modules/',
                options : {
                    presets : [
                        'react',
                        'stage-0',
                        ['env',{
                            target : { browsers: ['last 2 versions']}
                        }]
                    ]
                }
            },
            {
                test: /\.(css|less)$/,
                use: ["file-loader"]
            },
            { test: /\.json$/, loader: 'json-loader' },
            { 
                test: /\.ts$/, 
                use: 'ts-loader', exclude: /node_modules/ 
            }
        ]
    },
    externals : [webpackNodeExternals()],
    plugins: [assetsPluginInstance]

}