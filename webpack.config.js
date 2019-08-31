const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
                test: /\.less$/,
                use: [{
                        loader: 'style-loader', // creates style nodes from JS strings
                    },
                    {
                        loader: 'css-loader', // translates CSS into CommonJS
                    },
                    {
                        loader: 'less-loader', // compiles Less to CSS
                    }
                ]
            },
            {
                /**
                 * File loader 
                 * is loading files imported from ./src/index.js
                 */
                test: /\.(png|svg|jpg|gif)$/,
                loader: 'file-loader',
                options: {
                    /**
                     * Public path option 
                     * from documentation overwrite spcified public path
                     */
                    publicPath: 'dist',
                }
            }
        ],

    }
};