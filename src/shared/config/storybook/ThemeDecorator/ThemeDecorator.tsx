import React from "react";
import "app/styles/index.scss";
import { Theme, ThemeProvider } from "app/providers/ThemeProvider";

export const ThemeDecorator = (theme: Theme) =>
   (Story: any) => (
      <ThemeProvider initialTheme={theme}>
         <div className={`app ${theme}`}>
            {Story()}
         </div>
      </ThemeProvider>
   );
