import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import createImportPlugin from "vite-plugin-import";
import path from "path";

export default defineConfig({
  plugins: [
    react(),
    createImportPlugin({
      onlyBuild: false, //是否只需要在生产环境中使用
      babelImportPluginOptions: [
        {
          libraryName: "antd-mobile",
          libraryDirectory: "es",
          style: true, // or 'css'
        },
      ],
    }),
  ],

  resolve: {
    alias: [
      { find: "@", replacement: path.resolve(__dirname, "src") },
      {
        find: "@components",
        replacement: path.resolve(__dirname, "src", "components"),
      },
    ],
  },
});
