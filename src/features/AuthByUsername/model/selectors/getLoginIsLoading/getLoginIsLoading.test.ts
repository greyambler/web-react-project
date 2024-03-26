// import { DeepPartial } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { getLoginIsLoading } from "./getLoginIsLoading";

describe("getLoginIsLoading.test", () => {
   test("should return true", () => {
      const state: StateSchema = {
         loginForm: {
            isLoading: true,
            username: "",
            password: ""
         },
      };
      expect(getLoginIsLoading(state as StateSchema)).toEqual(true);
   });
   test("should work with empty state", () => {
      const state: StateSchema = {};
      expect(getLoginIsLoading(state as StateSchema)).toEqual(false);
   });
});
