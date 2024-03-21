import { StoryFn  } from "@storybook/react";
import { StateSchema, StoreProvider } from "app/providers/StoreProvider";
import {  ReducersMapObject } from "@reduxjs/toolkit";
import { loginReducer } from "features/AuthByUsername/model/slice/loginSlice";

const defaultAsyncReducers: ReducersMapObject<StateSchema> = {
   loginForm: loginReducer,
};

export const StoreDecorator = (
   state: StateSchema,
   asyncReducers?: ReducersMapObject<StateSchema>,
) => (StoryComponent: StoryFn ) => (
   <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
      <StoryComponent />
   </StoreProvider>
);
