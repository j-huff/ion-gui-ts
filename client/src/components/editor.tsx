import * as React from 'react';
import {useState} from 'react';
import Config from './config';
import './editor.css';
import * as Bootstrap from 'reactstrap'
import Radium from 'radium'
import EditorNavbar from './editorNavbar';
import MainContextMenu from './mainContextMenu';
import RightToolbar,{RightToolbarTabs,RightToolbarCollapsibles} from './rightToolbar'
import {FormGroup, Label, NavItem, Input, NavbarToggler, Container} from 'reactstrap'




interface Meta{
    author:string,
    prjectTitle:string,
}

interface GuiState{
    loaded:Boolean,
    mainContextMenu:{
        x:number,
        y:number,
        opened:Boolean,
    }
    sidebar:{
        opened:Boolean;
    }
    rightToolbarTab:RightToolbarTabs,
    rightToolbarCollapsibles: {[key:number]:Boolean},
}

export interface EditorProps {}

export interface EditorState {
    guiState: GuiState;
    config:Config;
};

export enum ActionType {
    ChangeTitle,
    SaveProject,
    OpenMainContextMenu,
    CloseMainContextMenu,
    ToggleSidebar,
    ToggleRightToolbarCollapsible,
}

export interface ToggleRightToolbarCollapsableParams extends ActionParams{
    collapsible:RightToolbarCollapsibles,
}

export interface ChangeTitleParams extends ActionParams{
    value:string
}

export enum ContextMenuType {
    Background,
    LinkNode,
}
export interface OpenMainContextMenuParams extends ActionParams{
    type:ContextMenuType,
    x:number,
    y:number,
}

export interface ActionParams{
}



export type ActionHandler = (type: ActionType, actionParams: ActionParams) => void

class Editor extends React.Component<EditorProps, EditorState> {
    state = {
        guiState: {
            loaded:false,
            rightToolbarTab:RightToolbarTabs.Links,
            rightToolbarCollapsibles: {} as {[key:number]:Boolean},
            mainContextMenu:{
                type:ContextMenuType.Background,
                x:0,
                y:0,
                opened:false,
            },
            sidebar:{
                opened:false
            }

        },
        config: new Config(),
    }



    handleAction = (type:ActionType,actionParams:ActionParams) => {

        switch(type){
            case ActionType.ChangeTitle: {
                const params = actionParams as ChangeTitleParams;
                let config = this.state.config;
                config.setTitle(params.value);
                this.setState({config: config});
                console.log(this.state);
                break;
            }
            case ActionType.SaveProject:
                console.log("Saving Project")
                break;
            case ActionType.OpenMainContextMenu:{
                console.log("Opening main context menu")
                const params = actionParams as OpenMainContextMenuParams;
                let newState = this.state;
                newState.guiState.mainContextMenu = {
                    type: params.type,
                    x:params.x,
                    y:params.y,
                    opened:true
                }
                this.setState({
                    ...this.state,
                })
                break;
            }
            case ActionType.CloseMainContextMenu:{
                this.state.guiState.mainContextMenu.opened = false;
                this.setState(this.state);
                break;
            }
            case ActionType.ToggleSidebar:{
                this.state.guiState.sidebar.opened = !this.state.guiState.sidebar.opened;
                this.setState(this.state);
                break;
            }
            case ActionType.ToggleRightToolbarCollapsible:{
                const params = actionParams as ToggleRightToolbarCollapsableParams;
                console.log("ToggleCollapsible: "+params.collapsible)
                let newState = !this.state.guiState.rightToolbarCollapsibles[params.collapsible];
                if(newState === undefined){
                    newState = true;
                }
                this.state.guiState.rightToolbarCollapsibles[params.collapsible] = newState;
                this.setState(this.state);
            }


        }

    }

    componentDidMount(): void {
        let that = this;
        setTimeout(function(){
            that.state.guiState.loaded = true;
            that.setState(that.state);
        },300)

    }

    render(){
        return(

        <div id="Editor" className={this.state.guiState.loaded ? "": "preload"}>
            <div id="sidebar" className={this.state.guiState.sidebar.opened ? "active" : ""}>
            </div>
            <div id="content">
                {EditorNavbar(this.state,this.handleAction)}
                <div className="page-center"
                    onContextMenu={(e) => {
                        // e.preventDefault();
                        this.handleAction(ActionType.OpenMainContextMenu, {type:ContextMenuType.Background, x:e.clientX,y:e.clientY} as OpenMainContextMenuParams);
                    }
                    }

                    onClick={()=>this.handleAction(ActionType.CloseMainContextMenu, {})}>

                    {MainContextMenu(this.state,this.handleAction)}

                    {RightToolbar(this.state,this.handleAction)}
                </div>
            </div>

        </div>
        )}
}

export default Radium(Editor);