import {actionTypes} from './types';
import * as types from './types';

export const openMainContextMenu = (payload:types.openMainContextMenuParams) =>{
    return {
        type: actionTypes.OPEN_MAIN_CONTEXT_MENU,
        payload:payload
    }
}
export const closeMainContextMenu = () =>{
    return {
        type: actionTypes.CLOSE_MAIN_CONTEXT_MENU,
    }
}

export const openCreateNodeMenu = (payload:types.openCreateNodeMenuParams) =>{
    return {
        type: actionTypes.OPEN_CREATE_NODE_MENU,
        payload:payload
    }
}

export const closeCreateNodeMenu = () =>{
    return {
        type: actionTypes.CLOSE_CREATE_NODE_MENU,
    }
}

export const setRightToolbarTab = (payload:types.setRightToolbarTabParams) =>{
    return {
        type: actionTypes.SET_RIGHT_TOOLBAR_TAB,
        payload:payload
    }
}

export const toggleCollapsible = (payload:types.toggleCollapsibleParams) =>{

    return {
        type: actionTypes.TOGGLE_COLLAPSIBLE,
        payload:payload
    }
}