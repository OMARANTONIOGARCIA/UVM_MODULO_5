const path = require('path');
const yaml = require('yamljs');
const json5 = require('json5');
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports  = {
    entry: './src/index.js',
    plugins: [  // Corrected property name to 'plugins'
        new WorkboxPlugin.GenerateSW({
            clientsClaim: true,
            skipWaiting: true
        })
    ],
    output: {
        filename: 'bundle.js',
        /*filename: 'main.js',*/
        path: path.resolve(__dirname,'dist'),
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.s[ac]ss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(png|jpg)$/,
                type: 'asset/resource',
            },
            {
                test: /\.csv$/,
                use: ['csv-loader'],
            },
            {
                test: /\.yaml$/,
                type: 'json',
                parser: {
                    parse: yaml.parse
                }
            },
            {
                test: /\.json5$/,
                use: 'json5-loader',
            }
            /*
                        {
                test: /\.json5$/i,
                use: 'json5-loader',
            }
            */
        ],
    },
};