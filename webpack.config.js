// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {
  const isProduction = env.production;
  
  return {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
      clean: true,
      library: {
        name: 'MyLibrary',
        type: 'umd',
        export: 'default'
      }
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        }
      ]
    },
    plugins: [
      // Only include HtmlWebpackPlugin in development mode
      ...(!isProduction ? [
        new HtmlWebpackPlugin({
          template: './demo/index.html',
          inject: 'body'
        })
      ] : [])
    ],
    devServer: {
      static: [
        {
          directory: path.join(__dirname, 'dist'),
        },
        {
          directory: path.join(__dirname, 'docs'),
          publicPath: '/docs'
        }
      ],
      compress: true,
      port: 3000,
      hot: true
    }
  };
};
