const path = require('path')
const webpack = require('webpack')
const buildDate = JSON.stringify(new Date().toLocaleString())
const Timestamp = new Date().getTime()

function resolve(dir) {
  return path.join(__dirname, dir)
}

// check Git
function getGitHash() {
  try {
    return GitRevision.version()
  } catch (e) { }
  return 'unknown'
}

const isProd = process.env.NODE_ENV === 'production'

const assetsCDN = {
  // webpack build externals
  externals: {
    vue: 'Vue',
    'vue-router': 'VueRouter',
    vuex: 'Vuex',
    axios: 'axios'
  },
  css: [],
  js: []
  // https://unpkg.com/browse/vue@2.6.10/
  // js: [
  //   // '//cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.min.js',
  //   // '//cdn.jsdelivr.net/npm/vue-router@3.1.3/dist/vue-router.min.js',
  //   // '//cdn.jsdelivr.net/npm/vuex@3.1.1/dist/vuex.min.js',
  //   // '//cdn.jsdelivr.net/npm/axios@0.19.0/dist/axios.min.js'
  //   // '../src/cdnMinDist/vue.min.js',
  //   // '../src/cdnMinDist/vue-router.min.js',
  //   // '../src/cdnMinDist/vuex.min.js',
  //   // '../src/cdnMinDist/axios.min.js'
  // ]
}

// vue.config.js
const vueConfig = {
  configureWebpack: {
    output: {
      filename: 'js/[name].' + Timestamp + '.js',
      chunkFilename: 'js/[name].' + Timestamp + '.js'
    },
    // webpack plugins
    plugins: [
      // Ignore all locale files of moment.js
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
      new webpack.DefinePlugin({
        APP_VERSION: `"${require('./package.json').version}"`,
        GIT_HASH: JSON.stringify(getGitHash()),
        BUILD_DATE: buildDate
      })
    ],
    // if prod, add externals
    // externals: isProd ? assetsCDN.externals : {}
    externals: {}
  },

  chainWebpack: config => {
    config.resolve.alias.set('@$', resolve('src'))

    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule
      .oneOf('inline')
      .resourceQuery(/inline/)
      .use('vue-svg-icon-loader')
      .loader('vue-svg-icon-loader')
      .end()
      .end()
      .oneOf('external')
      .use('file-loader')
      .loader('file-loader')
      .options({
        name: 'assets/[name].[hash:8].[ext]'
      })
    // if prod is on
    // assets require on cdn
    if (isProd) {
      config.plugin('html').tap(args => {
        args[0].cdn = assetsCDN
        return args
      })
    }
    config.entry('main').add('babel-polyfill')
  },
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          // less vars，customize ant design theme
          color: '#333333',
          'primary-color': '#3E72EC',
          'danger-color': '#F46B6B',
          'link-color': '#3E72EC',
          'border-radius-base': '2px'
        },
        // DO NOT REMOVE THIS LINE
        javascriptEnabled: true
      }
    }
  },

  devServer: {
    // development server port 8000
    port: 8000,
    proxy: {
      '^/api': {
        // context: ['/system', 'dpsoi', '/doctor'], // context: () => true,
        target: 'http://192.168.0.110:9527', // http://10.10.76.99:9527/
        ws: true,
        changeOrigin: true
      },
    }
  },

  // disable source map in production
  productionSourceMap: false,
  lintOnSave: false,
  // babel-loader no-ignore node_modules/*
  transpileDependencies: []
}

module.exports = vueConfig
