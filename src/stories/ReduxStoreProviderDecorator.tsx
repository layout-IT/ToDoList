import React from "react";
import {AppRootStateType, rootReducer, store} from "../state/store";
import { createStore} from "redux";

import {v1} from "uuid";
import { Provider } from "react-redux";


const initialGlobalState = {
    todolists: [
        {id: "todolistId1", title: "What to learn", filter: "all"},
        {id: "todolistId2", title: "What to buy", filter: "all"}
    ] ,
    tasks: {
        ["todolistId1"]: [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true}
        ],
        ["todolistId2"]: [
            {id: v1(), title: "Milk", isDone: true},
            {id: v1(), title: "React Book", isDone: true}
        ]
    }
};

export const storyBookStore = createStore(rootReducer, initialGlobalState as AppRootStateType);

export const ReduxStoreProviderDecorator = (storyFn: () => React.ReactNode) => (
    <Provider
        store={storyBookStore}>{storyFn()}
    </Provider>)
