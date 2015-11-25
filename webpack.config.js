/**
 * Created by Sasho on 25/11/2015.
 */

modile.exports = {
    entry: './main.js',
    outut: {
        path: './',
        filename: 'index.js'
    },
    devServer: {
        inline: true,
        port: 3333
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015' , 'react']
                }
            }
        ]
    }
};