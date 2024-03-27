import { StoryFn  } from "@storybook/react";
import { StateSchema, StoreProvider } from "app/providers/StoreProvider";
import {  ReducersMapObject } from "@reduxjs/toolkit";
import { loginReducer } from "features/AuthByUsername/model/slice/loginSlice";
import { profileReducer } from "entities/Profile";

const defaultAsyncReducers: ReducersMapObject<StateSchema> = {
   loginForm: loginReducer,
   profile: profileReducer,
};

export const StoreDecorator = (
   state: StateSchema,
   asyncReducers?: ReducersMapObject<StateSchema>,
) => (StoryComponent: StoryFn ) => (
   <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
      <StoryComponent />
   </StoreProvider>
);
