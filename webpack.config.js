var path = require('path');

module.exports = {
    context: __dirname,
    entry: {
        main: './js/main',
    },
    output: {
        path: path.join(__dirname, 'build'),
        filename: '[name].bundle.js'
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
              test: /\.js$/,
              loader: 'babel-loader',
              exclude: /node_modules/,
              query: {
                  plugins: ['transform-runtime'],
                  presets: ['es2015']
              }
            }
        ]
    }
}
