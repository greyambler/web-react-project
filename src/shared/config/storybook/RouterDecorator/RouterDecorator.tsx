import React from "react";
import "app/styles/index.scss";
import { BrowserRouter } from "react-router-dom";
import { Decorator } from "@storybook/react";


export const RouterDecorator: Decorator = (Story) => {
   return (
      <BrowserRouter>
         {Story()}
      </BrowserRouter>
   );
};
