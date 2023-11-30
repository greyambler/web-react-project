import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";
import { BuildOptions } from "./types/config";

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
   const { isDev } = options;

   const cssLoader = {
      test: /\.s[ac]ss$/i,
      use: [
         // "css-loader" Creates `style` nodes from js strings  
         isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
         // Translates CSS into CommonJS
         // 'css-loader',
         {
            loader: "css-loader",
            options: {
               modules: {
                  auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                  localIdentName: isDev
                     ? '[path][name]__[local]'
                     : '[hash:base64:8]',
               }
            }
         },
         // Compiles Sass to CSS
         'sass-loader',
      ]
   }

   const typescriptLoader = {
      test: /\.tsx?$/, // - регулярка для ts,tsx
      use: 'ts-loader',  // loader для этих файлов
      exclude: /node_modules/, // исключения
   }

   return [ // - загрузчики  loaders
      typescriptLoader,
      cssLoader,
   ]
}
