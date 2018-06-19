//libraries
import React, { Component } from "react";
import PropTypes from "prop-types";
//components
import { Button, Glyphicon } from "react-bootstrap";
//styles
import Styles from "./styles.css";



//  posiblemente dumb cmponent
class MovingShapeControls extends React.Component{

    
    // constructor(props){

    //     super(props);
    // }

    static propTypes = 
    {
        handleShapeMove: PropTypes.func       
    }

    render(){

        let handleShapeMove = this.props.handleShapeMove;
        console.log('MovingShapeContrtols: ' + this.props.handleShapeMove);
        return (

            <div className='moving-shape-controls'>
                <table>
                    <tbody>
                        <tr>
                            <td><Button onClick = {() => handleShapeMove('LEFT') } > {'🡰'} </Button></td>
                            <td><Button onClick = {() => handleShapeMove('SPIN') } > {'⚛'} </Button></td>
                            <td><Button onClick = {() => handleShapeMove('RIGHT') } > {'🡲'}</Button></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><Button onClick = {() => this.props.handleShapeMove('DOWN') } > {'🡳'} </Button></td>
                            <td></td>
                        </tr>
                    </tbody> 
                </table>
            </div>
        );

    }
}

export default MovingShapeControls;