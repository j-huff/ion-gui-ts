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

export enum RightToolbarTabs{
    Nodes,
    Links,
}

export enum RightToolbarCollapsibles{
    ProjectSettings,
}

const RightToolbar = (state:EditorState,handleAction:ActionHandler) =>{


    let getCollapseIcon = (collapsible:RightToolbarCollapsibles) =>{
        return state.guiState.rightToolbarCollapsibles[collapsible] === true ? "\u25BE": "\u25B8"
    }

    return(
        <Card className="right-toolbar">
            <CardBody>
                <Nav tabs>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: true})}

                        >
                            Tab1
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: false })}
                        >
                            Moar Tabs
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={"1"}>
                    <TabPane tabId="1">
                        <h4
                            onClick={()=>handleAction(ActionType.ToggleRightToolbarCollapsible, {collapsible:RightToolbarCollapsibles.ProjectSettings})}
                            color="primary" style={{ marginBottom: '1rem' }}>
                            Project Settings {getCollapseIcon(RightToolbarCollapsibles.ProjectSettings)}
                        </h4>
                        <Collapse isOpen={state.guiState.rightToolbarCollapsibles[RightToolbarCollapsibles.ProjectSettings] === true}>
                            <Card>
                                <CardBody>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt magni, voluptas debitis
                                    similique porro a molestias consequuntur earum odio officiis natus, amet hic, iste sed
                                    dignissimos esse fuga! Minus, alias.
                                </CardBody>
                            </Card>
                        </Collapse>
                        <hr/>
                    </TabPane>
                    <TabPane tabId="2">
                        <Row>
                            <Col sm="6">
                                <Card body>
                                    <CardTitle>Special Title Treatment</CardTitle>
                                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                    <Button>Go somewhere</Button>
                                </Card>
                            </Col>
                            <Col sm="6">
                                <Card body>
                                    <CardTitle>Special Title Treatment</CardTitle>
                                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                    <Button>Go somewhere</Button>
                                </Card>
                            </Col>
                        </Row>
                    </TabPane>
                </TabContent>
            </CardBody>
        </Card>
    );
}

export default RightToolbar;