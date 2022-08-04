
module.exports = {
    // eslint-loader 是否在保存的时候检查
    lintOneSave:false,

    // 支持的 loader 有：
    // css-loader
    // postcss-loader
    // sass-loader
    // less-loader
    // stylus-loader

    // 执行 npm run build 统一配置文件路径
    publicPath:'/',
    // 暴露给执行脚本的系统环境变量，通常用于确定开发环境还是生产环境
    // publicPath:process.env.NODE_ENV === 'product' ? '':'/',

    // 运行vue-cli-service build （npm run build）时生成的生产环境构建文件的目录
    outputDir:'dist',

    // 放置生成的静态资源（js css img fonts）的目录
    assetsDir:'static',

    // 指定生成的index.html的输出路径，也可以是一个绝对路径.可以不设置一般会默认
    // indexPath:'index.html',

    // 默认生成的静态资源文件名中有哈希控制缓存（vue cli 自动生成）无法生成时，通过设置来关闭文件名哈希
    // filenameHashing:true,

    // 在multi-page多页模式下构建应用，每个page应该有一个对应的javascript入口文件
    // 其值应该是一个对象，对象的key是入口的名字
    // value是：一个指定了（entry，template，filename，title，chunks）的对象或是一个指定其entry的字符串
    // 用于多页配置，默认是undefined
    // pages:{
    //     index:{
    //         // page的入口文件
    //         entry:'src/index/main.js',
    //         // 模版文件
    //         template:'public/index.html',
    //         // 在dist/index.html的输出文件
    //         filename:'index.html',
    //         // 使用页面title选项时,template中的title标签需要是<title><%= htmlWebpackPlugin.option.title %></title>
    //         title:'Index Page',
    //         // 在这个页面中包含的块，默认情况下会包含提取出来的通用chunk和vendor chunk
    //         chunks:['chunk-vendors','chunk-common','index']

    //     },
    //     subpage:'src/subpage/main.js'
    // },

    //设置是否在开发环境下每次保存代码时都启用eslint验证，有效值（true false error（检查出错误会触发编译失败）） 
    // lintOnSave:false,

    // 是否使用包含运行时编译器的 Vue 构建版本。设置为 true 后你就可以在 Vue 组件中使用 template 选项了，但是这会让你的应用额外增加 10kb 左右
    // 是否使用带有浏览器内编译器的完整构建版本
    // runtimeCompiler:false,

    // 默认情况下 babel-loader 会忽略所有 node_modules 中的文件。如果你想要通过 Babel 显式转译一个依赖，可以在这个选项中列出来
    // transplieDependencies

    // productionSourceMap
    // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
    productionSourceMap:false,
    // 设置生成的 HTML 中 <link rel="stylesheet"> 和 <script> 标签的 crossorigin 属性
    // crossorigin

    // 在生成的 HTML 中的 <link rel="stylesheet"> 和 <script> 标签上启用 Subresource Integrity (SRI)。如果你构建后的文件是部署在 CDN 上的，启用该选项可以提供额外的安全性。
    // integrity

    // webpack相关配置

    // 如果这个值是一个对象，则会通过 webpack-merge 合并到最终的配置中。如果这个值是一个函数，则会接收被解析的配置作为参数。该函数及可以修改配置并不返回任何东西，也可以返回一个被克隆或合并过的配置版本。
    // configureWebpack

    // 是一个函数，会接收一个基于 webpack-chain 的 ChainableConfig 实例。允许对内部的 webpack 配置进行更细粒度的修改
    // chainWebpack

    // css相关配置

    // css:{
    //     // css相关配置
    //     // 是否将组件中的 CSS 提取至一个独立的 CSS 文件中，生产环境下是 true，开发环境下是 false
    //     extract: process.env.NODE_ENV === "production",
    //     // 是否为 CSS 开启 source map。设置为 true 之后可能会影响构建的性能。
    //     sourceMap: false,
    //     // 启用 CSS modules for all css / pre-processor files.(预加载)
    //     requireModuleExtension: true,
    //     loaderOptions: {
    //         sass: {
    //          // data: `@import "@/assets/css/variables.scss";`
    //         }
    //     }
    // },

    // css.modules(===css.requireModuleExtension)
    // css.extract
    // css.sourceMap
    // css.loaderOptions

    // 如果你的前端应用和后端 API 服务器没有运行在同一个主机上，你需要在开发环境下将 API 请求代理到 API 服务器。这个问题可以通过 vue.config.js 中的 devServer.proxy 选项来配置。
    devServer :{
        // host: '10.32.120.69', 
        // ip 本地
        // port: 8080, 
        // 设置端口号
        open: true, 
        overlay:{
            warnings:false,
            errors:true
        },
        //配置自动启动浏览器
        // quiet:true,
        // disableHostCheck: true, 
        // //是否关闭用于 DNS 重绑定的 HTTP 请求的 HOST 检查
        // hotOnly: false, 
        // // 热更新
        // https: false, 
        // // https:{type:Boolean}配置前缀
        // proxy: null,  
        // //设置代理
        // proxy: { //目的是解决跨域，若测试环境不需要跨域，则不需要进行该配置
        //   '/api': { // 拦截以 /api 开头的url接口
        //     target: `https://localhost:27017`, //目标接口域名
        //     changeOrigin: true, //是否跨域
        //     // ws: true, //如果要代理 websockets，配置这个参数
        //     secure: false, // 如果是https接口，需要配置这个参数
        //     // 标识替换
        //     // 原请求地址为 /api/getData 将'/api'替换''时，
        //     // 代理后的请求地址为： http://xxx.xxx.xxx/getData
        //     // 若替换为'/other',则代理后的请求地址为 http://xxx.xxx.xxx/other/getData 
        //     pathRewrite: { // 标识替换
        //       '^/api': '/'   //重写接口 后台接口指向不统一  所以指向所有/
        //     //   '^/api': '/api/mock'
        //     }
        //   }
        // }
        
    },

    // 这里理解成用‘/api'代替target里面的地址，后面组件中我们掉接口时直接用api代替 比如我要调用'https://api.taobao.cn/xxx/proxy?time=2017-07-07 14:57:22'，直接写‘/api/xxx/proxy?time=2017-07-07 14:57:22'即可
    // import axios from 'axios'
    //     export default {
    //         created() {
    //         // 1. 代理成功
    //         // https://api.taobao.cn/users/proxy 转换成 http://localhost:2021/api/users/proxy 
    //         axios.get('/api/users/proxy').then(res => { // /api 不能少
    //         console.log(res)
    //         })
    //         }
    //     }

    // 是否为 Babel 或 TypeScript 使用 thread-loader。该选项在系统的 CPU 有多于一个内核时自动启用，仅作用于生产构建
    // parallel

    // 这个插件中添加的service worker只在生产环境中启用(例如，只有当你运行npm run build或yarn build时)
    // 不推荐在开发模式中启用service worker，因为它会导致使用以前缓存的资产而不包括最新的本地更改的情况
    // pwa: {
    //     // serviceWorker:false,
    //     // 允许您从一个现有的service worker文件开始，并创建一个该文件的副本，并将“预缓存清单”注入其中。
    //     // workboxPluginMode:'InjectManifest',
    //     // workboxOptions: {
    //     //   //swSrc: './app/sw.js', /* Empty file. */
    //     // },
    //     iconPaths: {
    //       favicon32: "favicon.ico",
    //       favicon16: "favicon.ico",
    //       appleTouchIcon: "favicon.ico",
    //       maskIcon: "favicon.ico",
    //       msTileImage: "favicon.ico"
    //     }
    // }

    // 这是一个不进行任何 schema 验证的对象，因此它可以用来传递任何第三方插件选项
    // pluginOptions
 
}