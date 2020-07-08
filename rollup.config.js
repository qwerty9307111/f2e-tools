const path = require('path')
const babel = require('rollup-plugin-babel')
const nodeResolve = require('rollup-plugin-node-resolve')

const extensions = ['.js']

const resolve = (...args) => {
  return path.resolve(__dirname, ...args)
}

module.exports = {
  input: resolve('index.js'),
  output: [
    {
      file: resolve('./build/index.js'),
      format: 'umd', // 通用模块定义，以amd，cjs 和 iife 为一体
      name: 'f2eTools'
    }, {
      file: resolve('./build/index.es.js'),
      format: 'esm', // 将软件包保存为 ES 模块文件，在现代浏览器中可以通过 <script type=module> 标签引入
      name: 'f2eTools'
    }, {
      file: resolve('./build/index.amd.js'),
      format: 'amd', // 异步模块定义，用于像RequireJS这样的模块加载器
      name: 'f2eTools'
    }, {
      file: resolve('./build/index.cjs.js'),
      format: 'cjs', // CommonJS，适用于 Node 和 Browserify/Webpack
      name: 'f2eTools'
    }, {
      file: resolve('./build/index.iife.js'),
      format: 'iife', // 一个自动执行的功能，适合作为<script>标签。
      name: 'f2eTools'
    }, {
      file: resolve('./build/index.system.js'),
      format: 'system', // SystemJS 加载器格式
      name: 'f2eTools'
    }
  ],
  plugins: [
    nodeResolve({
      extensions,
      modulesOnly: true
    }),
    babel({
      exclude: 'node_modules/**',
      extensions
    })
  ]
}
