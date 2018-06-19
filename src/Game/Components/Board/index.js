//libraries
import React, { Component } from "react";
import PropTypes from "prop-types";
//components
import { Button, Glyphicon } from "react-bootstrap";
//styles
import styles from "./styles.css";

import Surface from "../Surface"

import GameControlPanel from "../GameControlPanel"
import ShapeSelector from "../ShapeSelector";
import InfoPanel from "../InfoPanel";

import {Grid, Row, Col} from "react-bootstrap"



//  posiblemente dumb cmponent
class Board extends React.Component
{
    static propTypes =
    {
        squareSidePX: PropTypes.number,
        squaresHorizontal: PropTypes.number,
        squaresVertical: PropTypes.number,
        handleNewShape: PropTypes.func,
        handleShapeMove: PropTypes.func,
        handleNewShapeSelection: PropTypes.func,
        handleShapeStart: PropTypes.func,
        buttonRunLeyend: PropTypes.string,
        surface: PropTypes.shape({
            style: PropTypes.string,
            squaresState: PropTypes.arrayOf(
                PropTypes.shape({
                    state: PropTypes.string,
                    colorStyle: PropTypes.string,
                    posX: PropTypes.number,
                    posY: PropTypes.number,
                    memberShapeID: PropTypes.string
                })
            )
        })
    }

    render(){  
        
        return(
            // <div className='board'>
            <div>
                <Grid>
                    <Row>
                        <Col xs={6} md={12} >
                            <h2>Welcom! Check following instructions to use this partial demo</h2>
                        </Col>                        
                    </Row>
                    <Row>
                        <Col xs={6} md={4}>
                            
                            <InfoPanel
                    
                            />
                        </Col>
                            
                        <Col xs={6} md={4}>
                            
                            <div>
                                <ShapeSelector 
                                    handleNewShapeSelection = {this.props.handleNewShapeSelection}
                                    handleShapeStart = {this.props.handleShapeStart}
                                    buttonRunLeyend = {this.props.buttonRunLeyend}   
                                />                            
                            </div>
                            <div>
                                <Surface 
                                    squareSidePX = {this.props.squareSidePX}
                                    squaresHorizontal = {this.props.squaresHorizontal}
                                    squaresVertical = {this.props.squaresVertical}
                                    style = {this.props.surface.style}
                                    squaresState = {this.props.surface.squaresState}
                                    />
                            </div>
                        </Col>
                        <Col xs={6} md={4}>
                            <GameControlPanel handleShapeMove = { this.props.handleShapeMove} ></GameControlPanel>
                        </Col>
                    </Row >
                    <Row>
                        <Col xs={12}>

                        </Col>
                    </Row>
                </Grid>
                
            </div>
        );
    }
}

export default Board;

