import {ActionHandler, ActionType, ChangeTitleParams, EditorState} from "./editor";
import * as Bootstrap from "reactstrap";
import {Input, NavbarToggler, NavItem} from "reactstrap";
import * as React from "react";


const EditorNavbar = (state:EditorState,handleAction:ActionHandler) =>{

    return(
        <Bootstrap.Navbar id="topNav" className="header" light>
            <Bootstrap.Nav>
                <NavbarToggler onClick={()=> handleAction(ActionType.ToggleSidebar, {})} className="mr-auto"/>
                <Bootstrap.NavItem style={{margin: 0, padding: "10px 20px", paddingRight:"0px"}}>
                    <Bootstrap.Button
                        onClick={() => handleAction(ActionType.SaveProject, {})}
                        outline color="primary">
                        Save
                    </Bootstrap.Button>
                </Bootstrap.NavItem>
                <Bootstrap.NavItem style={{margin: 0, padding: "10px 20px",paddingLeft:"10px"}}>
                    <Bootstrap.Button outline color="primary">
                        Download
                    </Bootstrap.Button>
                </Bootstrap.NavItem>
                <NavItem>
                    <div id="titleWrapper">
                        <Input onChange={(e) => handleAction(ActionType.ChangeTitle,{value:e.target.value} as ChangeTitleParams)}
                               value={state.config.title}
                               placeholder="Untitled"
                               className="projectTile"/>
                    </div>
                </NavItem>

            </Bootstrap.Nav>
        </Bootstrap.Navbar>
    );
}

export default EditorNavbar