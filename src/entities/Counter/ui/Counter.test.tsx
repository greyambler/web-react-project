import { componentRender } from "shared/lib/tests/componentRender/componentRender";
import { userEvent } from "@storybook/testing-library";
import { Counter } from "./Counter";
import { act } from "react-dom/test-utils";
import { screen } from "@testing-library/react";
import {BrowserRouter as Router} from "react-router-dom";

describe("Counter", () => {
   test("test render", () => {
      componentRender(<Router><Counter /></Router>, {
         initialState: {
            counter: { value: 10 },
            user: undefined,
            loginForm: undefined
         },
      });
      expect(screen.getByTestId("value-title")).toHaveTextContent("10");
   });

   // test("increment", async () => {
   //    componentRender(<Counter />, {
   //       initialState: {
   //          counter: { value: 10 },
   //          user: undefined,
   //          loginForm: undefined
   //       },
   //    });
   //    await act(async () => {
   //       userEvent.click(screen.getByTestId("increment-btn"));
   //    });
   //    expect(screen.getByTestId("value-title")).toHaveTextContent("11");
   // });

   // test("decrement", async () => {
   //    componentRender(<Counter />, {
   //       initialState: {
   //          counter: { value: 10 },
   //          user: undefined,
   //          loginForm: undefined
   //       },
   //    });
   //    await act(async () => {
   //       userEvent.click(screen.getByTestId("decrement-btn"));
   //    });
   //    expect(screen.getByTestId("value-title")).toHaveTextContent("9");
   // });
});
