const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtool: 'cheap-eval-source-map',
    entry: {
        bundle: ['./src/main.js', './src/main.sass'],
        resume: ['./src/resume.js', './src/resume.sass']
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '../assets')
    },
    module: {
        rules: [
            {
                test: /\.scss|sass$/,
                use: ExtractTextPlugin.extract({
                    use: ['css-loader', 'resolve-url-loader', 'sass-loader?sourceMap']
                })
            },
            {
                test: /\.(jpe?g|png|gif)$/i,
                loader: 'file-loader'
            },
        ]
    },

    plugins: [
        new ExtractTextPlugin('[name].css'),
    ]
};
