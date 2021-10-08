import React from 'react';
import {ComponentStory, ComponentMeta} from "@storybook/react";
import {AddItemForm} from "./AddItemForm";
import {action} from "@storybook/addon-actions";
import {Task} from "./Task";

export default {
    title: 'Todolist/Task',
    args: {
        changeTaskStatus: action('changeTaskStatus'),
        changeTaskTitle: action('changeTaskTitle'),
        removeTask: action('removeTask'),
    },
} as ComponentMeta<typeof Task>;
const Template: ComponentStory<typeof Task> = (args) => <Task {...args}/>
export const TaskIsDoneStories = Template.bind({});

TaskIsDoneStories.args = {
    task: {id: '1', isDone: true, title: 'JS'},
    todolistId: 'todo1'
};

export const TaskIsNotDoneStories = Template.bind({});

TaskIsNotDoneStories.args = {
    task: {id: '1', isDone: false, title: 'JS'},
    todolistId: 'todo1'
};