const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
                test: /\.s[ac]ss$/i,
                use: [{
                        loader: 'style-loader', // creates style nodes from JS strings
                    },
                    {
                        loader: 'css-loader', // translates CSS into CommonJS
                    },
                    {
                        loader: 'sass-loader', // compiles sass to CSS
                    }
                ]
            },
            {
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

                test: /\.(png|svg|jpg|gif)$/,
                loader: 'url-loader',
                options: {
                    publicPath: "dist/images",
                    limit: 15000,
                    outputPath: "images"
                }
            }
        ],

    }
};