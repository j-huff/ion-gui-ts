import {ActionHandler, ActionType, ChangeTitleParams, EditorState} from "./editor";
import * as Bootstrap from "reactstrap";
import {Input, NavbarToggler, NavItem} from "reactstrap";
import * as React from "react";
import {connect} from "react-redux";
import {setTitle} from "../store/editor/actions";
import {state as config} from "../store/editor/types";

class EditorNavbar extends React.Component<Props, {}> {

    render() {
        return (
            <Bootstrap.Navbar id="topNav" className="header" light>
                <Bootstrap.Nav>
                    <NavbarToggler onClick={() => {
                    }} className="mr-auto"/>
                    <Bootstrap.NavItem style={{margin: 0, padding: "10px 20px", paddingRight: "0px"}}>
                        <Bootstrap.Button
                            onClick={() => {
                            }}
                            outline color="primary">
                            Save
                        </Bootstrap.Button>
                    </Bootstrap.NavItem>
                    <Bootstrap.NavItem style={{margin: 0, padding: "10px 20px", paddingLeft: "10px"}}>
                        <Bootstrap.Button outline color="primary">
                            Download
                        </Bootstrap.Button>
                    </Bootstrap.NavItem>
                    <NavItem>
                        <div id="titleWrapper">
                            <Input onChange={(e) => setTitle({title: e.target.value})}
                                   value={this.props.config.title}
                                   placeholder="Untitled"
                                   className="projectTile"/>
                        </div>
                    </NavItem>

                </Bootstrap.Nav>
            </Bootstrap.Navbar>
        );
    }
}

interface Props{
    config:config;
    setTitle:any;
}
const mapStateToProps = state => ({
    config:state.editor
})
export default connect(mapStateToProps,{setTitle})(EditorNavbar)