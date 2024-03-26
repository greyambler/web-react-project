// import { DeepPartial } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { getLoginUsername } from "./getLoginUsername";

describe("getLoginUsername.test", () => {
   test("should return value", () => {
      const state: StateSchema = {
         loginForm: {
            username: "123123",
            password: "",
            isLoading: false
         },
      };
      expect(getLoginUsername(state as StateSchema)).toEqual("123123");
   });
   test("should work with empty state", () => {
      const state: StateSchema = {};
      expect(getLoginUsername(state as StateSchema)).toEqual("");
   });
});
