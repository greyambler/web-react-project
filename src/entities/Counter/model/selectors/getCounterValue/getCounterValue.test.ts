import { StateSchema } from "app/providers/StoreProvider";
import { getCounterValue } from "./getCounterValue";

describe("getCounterValue.test", () => {
   test("", () => {
      const state: StateSchema = {
         counter: { value: 10 },
         user: undefined,
         loginForm: undefined
      };
      expect(getCounterValue(state)).toEqual(10);
   });
});
