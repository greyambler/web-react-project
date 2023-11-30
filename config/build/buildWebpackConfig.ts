import webpack from "webpack";
import { BuildOptions } from "./types/config";
import { buildPlugins } from "./buildPlugins";
import { buildLoaders } from "./buildLoaders";
import { buildResolve } from "./buildResolve";
import { buildDevServer } from "./buildDevServer";


export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
   const { paths, mode, isDev } = options;

   return {
      mode: mode, // - тип сборки
      entry: paths.entry,
      output: {
         filename: "[name].[contenthash].js", // - главный файл приложения
         path: paths.build,
         clean: true // - флаг очистки старых файлов
      },
      plugins: buildPlugins(options),
      module: {
         rules: buildLoaders(options), // - загрузчики  loaders
      },
      resolve: buildResolve(),
      devtool: isDev ? 'inline-source-map' : undefined,
      devServer: isDev ? buildDevServer(options) : undefined,
   }
}
