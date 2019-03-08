import * as gui from './types';
import {actionParams, actionTypes, initialState} from './types';


export default function(state = initialState, action:actionParams){
    switch (action.type) {
        case actionTypes.OPEN_MAIN_CONTEXT_MENU:{
            const params = action as gui.openMainContextMenuParams;
            return {
                ...state,
                mainContextMenu:{
                    x:params.payload.x,
                    y:params.payload.y,
                    opened:true,
                }
            }
            break;
        }
        case actionTypes.CLOSE_MAIN_CONTEXT_MENU:{
            return {
                ...state,
                mainContextMenu:{
                    ...state.mainContextMenu,
                    opened:false
                }
            }
        }
        case actionTypes.OPEN_CREATE_NODE_MENU:{
            const params = action as gui.openCreateNodeMenuParams;
            return {
                ...state,
                createNodeMenu:{
                    ...state.createNodeMenu,
                    x:params.payload.x,
                    y:params.payload.y,
                    opened:true
                }
            }
        }
        case actionTypes.CLOSE_CREATE_NODE_MENU:{
            return {
                ...state,
                createNodeMenu:{
                    ...state.createNodeMenu,
                    opened:false
                }
            }
        }
        case actionTypes.SET_RIGHT_TOOLBAR_TAB:{
            const params = action as gui.setRightToolbarTabParams;
            return {
                ...state,
                rightToolbarActiveTab: params.payload.tab
            }
        }
        case actionTypes.TOGGLE_COLLAPSIBLE:{
            const params = action as gui.toggleCollapsibleParams;
            let collapsibles = state.collapsibles
            collapsibles[params.payload.id] = !collapsibles[params.payload.id]

            return {
                ...state,
                collapsibles: collapsibles
            }
        }
        default:
            return state;
    }
}