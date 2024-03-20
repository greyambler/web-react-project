import { StateSchema } from "app/providers/StoreProvider";
import { getCounter } from "./getCounter";

describe("getCounter", () => {
   test("should return cournter value", () => {
      const state: StateSchema = {
         counter: { value: 10 },
         user: undefined,
         loginForm: undefined
      };
      expect(getCounter(state as StateSchema)).toEqual({ value: 10 });
   });
});
