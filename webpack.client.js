const path = require('path')

module.exports = {
    target: 'node',
    entry : './src/client.js',
    output:{
        filename : 'client_bundle.js',
        path : path.resolve(__dirname,'build/public'),
        publicPath : '/build/public'

    },
    module :{
        rules :[
            {
                test : /\.(js?|jsx?|ts?)$/,
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
    }

}