import webpack from "webpack";
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import { BuildEnv, BuildPaths } from "./config/build/types/config";
import path from "path";

export default (env: BuildEnv) => {

   const paths: BuildPaths = {
      entry: path.resolve(__dirname, "src", "index.tsx"), // - стартовая точка приложения
      build: path.resolve(__dirname, "build"), // - где будет приложение
      html: path.resolve(__dirname, "public", "index.html"), // - файл используется как шаблон 
      src: path.resolve(__dirname, "src"),
   };

   const mode = env.mode || "development";
   const PORT = env.port || 3000;
   const apiUrl = env.apiUrl || "http://localhost:8000";

   const isDev = mode === "development";

   const config: webpack.Configuration = buildWebpackConfig({
      mode,
      paths,
      isDev,
      port: PORT,
      apiUrl,
      project: "frontend",
   });
   return config;
};
