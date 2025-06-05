const path = require('path');

module.exports = {
    context: path.resolve(__dirname, ''),
    entry: './src/index.ts',
    mode: 'production',
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
        }]
    },
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'build')
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js']
    },
};