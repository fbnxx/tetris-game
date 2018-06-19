//libraries
import React, { Component } from "react";
import PropTypes from "prop-types";
//components
import { Button, Glyphicon } from "react-bootstrap";
//styles
//import Styles from "./styles.scss";

//import Surface from "../Surface"

import MovingShapeControls from "../GameControlPanel/MovingShapeControls";
import HeaderControlPanel from "../GameControlPanel/HeaderControlPanel";

//  posiblemente dumb cmponent
class GameControlPanel extends React.Component{

    static propTypes = 
    {
        handleShapeMove: PropTypes.func        
    }

    render(){

        return (

            <div>
                <HeaderControlPanel></HeaderControlPanel>
                <MovingShapeControls handleShapeMove = {this.props.handleShapeMove} > </MovingShapeControls>
            </div>
        );

    }
}

export default GameControlPanel;