const VueLoaderPlugin = require('vue-loader/lib/plugin')
const CopyPlugin = require('copy-webpack-plugin')
const path = require('path')

module.exports = {
    //root
    entry: './src/index.js',
    //出力先
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
          {
            test: /\.vue$/, // ファイルが.vueで終われば...
            loader: 'vue-loader' // vue-loaderを使う
          },
          {
            test: /\.js$/,
            loader: 'babel-loader',
          },
          {
            test: /\.css$/,
            use: ['vue-style-loader', 'css-loader'] // css-loader -> vue-style-loaderの順で通していく
          },
        ]
      },
      resolve: {
        // import './foo.vue' の代わりに import './foo' と書けるようになる(拡張子省略)
        extensions: ['.js', '.vue'],
        alias: {
          // vue-template-compilerに読ませてコンパイルするために必要
          vue$: 'vue/dist/vue.esm.js',
        },
      },
    plugins: [
        new VueLoaderPlugin(),
        new CopyPlugin([{ from: './public' }])
    ],
    devServer: {
        // webpackの扱わないファイル(HTMLや画像など)が入っているディレクトリ
        //TODO: staticに変更
        contentBase: path.resolve(__dirname, 'pablic')
    }
}