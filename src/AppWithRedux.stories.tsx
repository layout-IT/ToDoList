import React from 'react';
import {ComponentStory, ComponentMeta} from "@storybook/react";
import {AddItemForm} from "./AddItemForm";
import {action} from "@storybook/addon-actions";
import AppWithRedux from "./AppWithRedux";
import {Provider} from "react-redux";
import {store} from "./state/store";
import {ReduxStoreProviderDecorator} from "./stories/ReduxStoreProviderDecorator";

export default {
    title: 'Todolist/AppWithRedux',
    decorators: [ReduxStoreProviderDecorator]
} as ComponentMeta<typeof AppWithRedux>;
const Template: ComponentStory<typeof AppWithRedux> = () => <Provider store={store}>
    <AppWithRedux/>
</Provider>
export const AppWithReduxStories = Template.bind({});
