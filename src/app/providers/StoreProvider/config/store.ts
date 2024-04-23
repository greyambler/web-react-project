import { Action, configureStore, Reducer, ReducersMapObject } from "@reduxjs/toolkit";
import { counterReducer } from "entities/Counter";
import { userReducer } from "entities/User";
import { StateSchema, ThunkExtraArg } from "./StateSchema";
import { createReducerManager } from "./reducerManager";
import { $api } from "shared/api/api";
import { To } from "@remix-run/router"; // "history";
import { NavigateOptions } from "react-router";


export function createReduxStore(
   initialState?: StateSchema,
   asyncReducers?: ReducersMapObject<StateSchema>,
   navigate?: (to: To, options?: NavigateOptions) => void,
) {
   const rootReducers: ReducersMapObject<StateSchema> = {
      ...asyncReducers,
      counter: counterReducer,
      user: userReducer,
   };

   const reducerManager = createReducerManager(rootReducers);

   const extraArg: ThunkExtraArg = {
      api: $api,
      navigate,
   };

   const store = configureStore({
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      reducer: reducerManager.reduce as any,
      devTools: __IS_DEV__,
      preloadedState: initialState,
      middleware: (getDefaultMiddleware) => getDefaultMiddleware({ 
         thunk: {
            extraArgument: extraArg,
         },
      }),
   });

   // @ts-ignore
   store.reducerManager = reducerManager;

   return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];
