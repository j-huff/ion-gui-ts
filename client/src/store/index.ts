import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import editorReducer from './editor/reducer'
import {state as editorState} from "./editor/types";
import {initialState as editorInitialState} from "./editor/types";

import editorGuiReducer from './editorGui/reducer'
import {state as editorGuiState} from "./editorGui/types";
import {initialState as editorGuiInitialState} from "./editorGui/types";



const middleware = [thunk];

const rootReducer = combineReducers({
    editor:editorReducer,
    editorGui:editorGuiReducer,
});


export interface ApplicationState {

    editor:editorState,
    editorGui:editorGuiState
};

const initialState:ApplicationState = {
    editor:editorInitialState,
    editorGui:editorGuiInitialState
};

const store = createStore(rootReducer,initialState,applyMiddleware(...middleware));

export default store;