import * as React from "react";
import classnames from 'classnames';


import {ActionHandler, ActionType, EditorState} from "./editor";
import {
    Button,
    Card,
    CardBody,
    CardText,
    CardTitle,
    Col,
    Collapse,
    Nav,
    NavItem,
    NavLink,
    Row,
    TabContent,
    TabPane
} from "reactstrap";

import './rightToolbar.css'
import './main.css'
import {connect} from "react-redux";
import {setRightToolbarTab,toggleCollapsible} from "../store/editorGui/actions";

export enum RightToolbarTabs{
    Nodes,
    Links,
}

export enum RightToolbarCollapsibles{
    ProjectSettings,
    NodeSettings,
    Contacts,
    Ranges,
    ProtocolSettings,
}

class RightToolbar extends React.Component<Props, {}> {



    render() {
        let getCollapseIcon = (collapsible:RightToolbarCollapsibles) =>{
            // return ""
            return this.props.collapsibles[collapsible] === true ? "\u25BE": "\u25B8"
        }

        const Collapsible = (actionType:ActionType,collapsible:RightToolbarCollapsibles,title:string, inner:Function) => {
            console.log("Collapse")
            console.log(this);
            return(
                <div className="collapsible">
                    <h4
                        onClick={()=>this.props.toggleCollapsible({id:collapsible})}
                        color="primary" style={{ marginBottom: '1rem' }}>
                        {title} <div className="collapse-icon"> {getCollapseIcon(collapsible)}</div>
                    </h4>
                    {inner()}
                </div>
            )
        }


        let activeTab = this.props.activeTab;

        return (
            <Card className="right-toolbar">
                <CardBody>
                    <Nav tabs className="unselectable">
                        <NavItem>
                            <NavLink
                                className={classnames({active: activeTab == RightToolbarTabs.Nodes})}
                                onClick={() => this.props.setRightToolbarTab({tab: RightToolbarTabs.Nodes})}
                            >
                                Nodes
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({active: activeTab == RightToolbarTabs.Links})}
                                onClick={() => this.props.setRightToolbarTab({tab: RightToolbarTabs.Links})}
                            >
                                Links
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <TabContent activeTab={this.props.activeTab}>
                        <TabPane tabId={RightToolbarTabs.Nodes}>
                            <div className="collapsible">
                                <h4
                                    onClick={()=>this.props.toggleCollapsible({id:RightToolbarCollapsibles.ProjectSettings})}
                                    color="primary" style={{ marginBottom: '1rem' }}>
                                    Project Settings
                                    <div className="collapse-icon"> {getCollapseIcon(RightToolbarCollapsibles.ProjectSettings)}</div>
                                </h4>
                                <Collapse isOpen={this.props.collapsibles[RightToolbarCollapsibles.ProjectSettings]}>
                                    HELLO
                                </Collapse>
                            </div>
                            <hr/>


                        </TabPane>
                        <TabPane tabId={RightToolbarTabs.Links}>

                        </TabPane>
                    </TabContent>
                </CardBody>
            </Card>
        )
    };
}

interface Props {
    activeTab:number,
    collapsibles:any
    setRightToolbarTab:any
    toggleCollapsible:any
}
const mapStateToProps = state => ({
    collapsibles:state.editorGui.collapsibles,
    activeTab: state.editorGui.rightToolbarActiveTab
})

export default connect(mapStateToProps,{setRightToolbarTab,toggleCollapsible})(RightToolbar)
