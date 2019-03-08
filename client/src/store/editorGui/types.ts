
export enum actionTypes{
    OPEN_MAIN_CONTEXT_MENU,
    CLOSE_MAIN_CONTEXT_MENU,
    OPEN_CREATE_NODE_MENU,
    CLOSE_CREATE_NODE_MENU,
    SET_RIGHT_TOOLBAR_TAB,
    TOGGLE_COLLAPSIBLE,
}

export interface openMainContextMenuParams extends actionParams{
    payload:{
        x:number,
        y:number,
    }
}

export interface openCreateNodeMenuParams extends actionParams{
    payload:{
        x:number,
        y:number,
    }
}
export interface setRightToolbarTabParams extends actionParams{
    payload:{
        tab:number
    }
}

export interface toggleCollapsibleParams extends actionParams {
    payload:{
        id:number
    }
}

export interface actionParams {
    type:actionTypes,
}


export interface state{
    loaded:Boolean,
    mainContextMenu:{
        x:number,
        y:number,
        opened:Boolean,
    },
    sidebar:{
        opened:Boolean
    },
    createNodeMenu:{
        x:number,
        y:number,
        opened:Boolean,
    },
    rightToolbarActiveTab:number,
    collapsibles: {[key:number]:Boolean},
}

export const initialState:state = {
    loaded:false,
    mainContextMenu:{
        x:0,
        y:0,
        opened:false,
    },
    sidebar:{
        opened:false
    },
    createNodeMenu:{
        x:0,
        y:0,
        opened:false,
    },
    rightToolbarActiveTab:0,
    collapsibles: {}
};
