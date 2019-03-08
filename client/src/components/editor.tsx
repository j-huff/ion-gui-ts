import * as React from 'react';
import { connect } from 'react-redux'
import {openMainContextMenu,closeMainContextMenu} from "../store/editorGui/actions";
import {state as guiState} from "../store/editorGui/types"

import Config from './config';
import './editor.css';
import Radium from 'radium'
import EditorNavbar from './editorNavbar';
import RightToolbar,{RightToolbarTabs,RightToolbarCollapsibles} from './rightToolbar'
import CreateNodeMenu from './createNodeMenu'
import MainContextMenu from "./mainContextMenu";






class Editor extends React.Component<EditorProps, {}> {

    componentDidMount(): void {
        setTimeout(function(){
        },300)
    }


    render(){

        return(
        <div id="Editor" className={true ? "": "preload"}>
            <div id="sidebar" className={false ? "active" : ""}>
            </div>
            <div id="content">
                <EditorNavbar/>
                <CreateNodeMenu/>
                <div className="page-center"
                    onContextMenu={(e) => {
                        e.preventDefault();
                        this.props.openMainContextMenu({x:e.clientX,y:e.clientY})
                    }
                    }

                    onClick={()=>this.props.closeMainContextMenu()}>
                    <MainContextMenu/>
                    <RightToolbar/>
                </div>
            </div>

        </div>
        )}

}

export interface EditorProps {
    gui:guiState;
    openMainContextMenu:any;
    closeMainContextMenu:any;
}

const mapStateToProps = state => ({
    gui: state.editorGui
})

export default connect(mapStateToProps,{openMainContextMenu,closeMainContextMenu})(Radium(Editor))