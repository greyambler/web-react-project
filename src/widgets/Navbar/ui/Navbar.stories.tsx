import React from "react";
import { Meta, StoryFn } from "@storybook/react";

import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";
import { Navbar } from "./Navbar";

export default {
   title: "widget/Navbar",
   component: Navbar,
   argTypes: {
      backgroundColor: { control: "color" },
   },
} as Meta<typeof Navbar>;

const Template: StoryFn<typeof Navbar> = (args) => <Navbar {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({
   counter: undefined,
   user: undefined,
   loginForm: undefined
})];
export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
   counter: undefined,
   user: undefined,
   loginForm: undefined
})];

export const AuthNavbar = Template.bind({});
AuthNavbar.args = {};

AuthNavbar.decorators = [StoreDecorator({
   user: {
      authData: {
         id: "1",
         username: "admin"
      }
   },
   counter: undefined,
   loginForm: undefined
})];
