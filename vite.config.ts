import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import createImportPlugin from 'vite-plugin-import';
import { viteMockServe } from 'vite-plugin-mock';
import path from 'path';

export default ({ mode }) =>
  defineConfig({
    plugins: [
      react(),
      createImportPlugin({
        onlyBuild: false, //是否只需要在生产环境中使用
        babelImportPluginOptions: [
          {
            libraryName: 'antd-mobile',
            libraryDirectory: 'es',
            style: 'css' // or 'css'
          }
        ]
      }),
      viteMockServe({
        // 解析根目录下的mock文件夹
        mockPath: 'mock',
        localEnabled: loadEnv(mode, process.cwd()).VITE_USE_MOCK === 'true', // 开发打包开关
        prodEnabled: false, // 生产打包开关
        supportTs: true, // 打开后，可以读取 ts 文件模块。 请注意，打开后将无法监视.js 文件。
        watchFiles: true // 监视文件更改
      })
    ],

    css: {
      // css预处理器
      preprocessorOptions: {
        less: {
          charset: false,
          javascriptEnabled: true
          // additionalData: '@import "./src/assets/style/global.less";',
        }
      }
    },
    resolve: {
      alias: [
        { find: '@', replacement: path.resolve(__dirname, 'src') },
        {
          find: '@components',
          replacement: path.resolve(__dirname, 'src', 'components')
        }
      ]
    }
  });
