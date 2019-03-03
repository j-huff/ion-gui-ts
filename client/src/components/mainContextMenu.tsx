import * as React from "react";

import {ActionHandler, ActionType, EditorState} from "./editor";
import {ListGroup, ListGroupItem} from "reactstrap";

import './mainContextMenu.css'
import './main.css'

const MainContextMenu = (state:EditorState,handleAction:ActionHandler) =>{

    let cmState = state.guiState.mainContextMenu
    return(
        <ListGroup id="mainContextMenu" className="unselectable"
                   style={{
                       display: cmState.opened ? "block" : "none",
                       left:cmState.x,
                       top:cmState.y
                   }}>

            <ListGroupItem tag="a" href="#" action>
                My item
            </ListGroupItem>
            <ListGroupItem tag="a" href="#" action>
                My item 2
            </ListGroupItem>
        </ListGroup>
    );
}

export default MainContextMenu;