import * as React from "react";

import {ListGroup, ListGroupItem} from "reactstrap";

import './mainContextMenu.css'
import './main.css'
import { connect } from 'react-redux'
import {openCreateNodeMenu} from "../store/editorGui/actions";



interface State {}

class MainContextMenu extends React.Component<Props, State> {

    render(){
        let cmState = this.props.contextMenu
        return(
            <ListGroup id="mainContextMenu" className="unselectable"
                       style={{
                           display: cmState.opened ? "block" : "none",
                           left:cmState.x,
                           top:cmState.y
                       }}>

                <ListGroupItem tag="a" href="#" action
                               onClick={() => {
                                   console.log(this.props)
                                   this.props.openCreateNodeMenu({x:cmState.x,y:cmState.y})
                               }}
                >
                    Create Node
                </ListGroupItem>

            </ListGroup>
        );
    }

}
interface Props {
    contextMenu:any
    openCreateNodeMenu:any;
}
const mapStateToProps = state => ({
    contextMenu:state.editorGui.mainContextMenu
})
export default connect(mapStateToProps,{openCreateNodeMenu})(MainContextMenu)