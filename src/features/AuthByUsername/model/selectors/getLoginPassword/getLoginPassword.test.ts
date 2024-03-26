// import { DeepPartial } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { getLoginPassword } from "./getLoginPassword";

describe("getLoginPassword.test", () => {
   test("should return value", () => {
      const state: StateSchema = {
         loginForm: {
            password: "123123",
            username: "",
            isLoading: false
         },
      };
      expect(getLoginPassword(state as StateSchema)).toEqual("123123");
   });
   test("should work with empty state", () => {
      const state: StateSchema = {};
      expect(getLoginPassword(state as StateSchema)).toEqual("");
   });
});
