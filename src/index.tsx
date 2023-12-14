import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./app/providers/ThemeProvider";

import "./shared/config/i18n/i18n";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
   <BrowserRouter>
      <React.StrictMode>
         <ThemeProvider>
            <App />
         </ThemeProvider>
      </React.StrictMode>
   </BrowserRouter>,
)
