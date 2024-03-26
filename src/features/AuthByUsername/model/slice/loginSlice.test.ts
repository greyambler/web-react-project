// import { DeepPartial } from "@reduxjs/toolkit";
import { LoginSchema } from "../types/loginSchema";
import { loginActions, loginReducer } from "./loginSlice";

describe("loginSlice.test", () => {
   test("test set username", () => {
      const state: LoginSchema = {
         username: "123",
         password: "",
         isLoading: false
      };
      expect(loginReducer(
         state as LoginSchema,
         loginActions.setUsername("123123"),
      )).toEqual({
         username: "123123", 
         password: "",
         isLoading: false

      });
   });

   test("test set password", () => {
      const state: LoginSchema = {
         password: "123",
         username: "",
         isLoading: false
      };
      expect(loginReducer(
         state as LoginSchema,
         loginActions.setPassword("123123"),
      )).toEqual({
         password: "123123", username: "",
         isLoading: false
      });
   });
});
