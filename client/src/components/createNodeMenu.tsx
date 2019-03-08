import * as React from "react";
import {ActionHandler, ActionType, EditorState} from "./editor";
import {Button, Card, CardBody, CardHeader, Col, Form, FormGroup, Input, Label} from "reactstrap";

import './createNodeMenu.css'
import {useState} from "react";
import {connect} from "react-redux";
import {closeCreateNodeMenu} from "../store/editorGui/actions";


//TODO: handle/validate form input

enum InputType{
    Text,
    Number,
}

export interface CreateNodeMenuForm {
    name:{
    },
    ipn:number,
}

const defaultForm = {
    name: "",
    ipn: 0,
}

class CreateNodeMenu extends React.Component<Props, {}> {


    render(){
        let menuState = this.props.createNodeMenu
        return(
        <Card id="create-node-menu"
             style={{
                 display: menuState.opened ? "block" : "none",
                 left: menuState.x,
                 top: menuState.y,

             }}>
            <CardHeader>
                Create Node
                <Button close onClick={() => this.props.closeCreateNodeMenu()}/>
            </CardHeader>
            <CardBody>
                <Form>
                    <FormGroup row>
                        <Label for="exampleEmail" sm={4}>Name</Label>
                        <Col sm={8}>
                            <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                        </Col>
                    </FormGroup>

                    <div className="submitButtonWrapper">
                        <Button color="primary">Create</Button>
                    </div>
                </Form>
            </CardBody>

        </Card>
        )
    };
}

interface Props{
    closeCreateNodeMenu:any;
}
const mapStateToProps = state => ({
    createNodeMenu:state.editorGui.createNodeMenu
})
export default connect(mapStateToProps,{closeCreateNodeMenu})(CreateNodeMenu)