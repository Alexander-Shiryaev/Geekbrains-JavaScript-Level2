const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'public/js'),
        filename: 'app.js'
    },
    resolve: {
        alias: {
          vue: 'vue/dist/vue.esm.js'
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: [
                    { loader: 'vue-loader' },
                ]
            },
            {
                test: /\.js$/,
                use: [
                    { loader: 'babel-loader' },
                ]
            },
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
}