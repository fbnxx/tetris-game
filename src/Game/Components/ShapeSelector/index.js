//libraries
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import React, { Component } from "react";
import PropTypes from "prop-types";
//components
import { Button, Glyphicon } from "react-bootstrap";
//styles
//import styles from "./styles.css";


//  se simula el body de una pagina para poder utilizar jQuery .... NO SE COMO USARLO, NO FUNCIONA



//  posiblemente se puede cambiar a dumb cmponent
class ShapeSelector extends React.Component {


    static propTypes = {

        handleNewShapeSelection: PropTypes.func,
        handleShapeStart: PropTypes.func,
        buttonRunLeyend: PropTypes.string
    }

    render(){

        let handleNewShapeSelection = this.props.handleNewShapeSelection;

        console.log('leyend in shape selector: ' + this.props.buttonRunLeyend)

        //alert(this.props.buttonRunLeyend.toUpperCase() + " ****** " + this.props.buttonRunLeyend.toUpperCase().indexOf('STOP'));

        let style = this.props.buttonRunLeyend.toUpperCase().indexOf('STOP') > -1 ? 'btn-info' : 'btn-outline-danger';

        return (
            <div>
                <div className="btn-group">
                    <button type="button" id="btnShapeName" className="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Select a Shape
                    </button>
                    <div className="dropdown-menu">
                        <a className="dropdown-item" href="#" onClick = { () => handleNewShapeSelection('4SQUARES') } >4 squares</a>
                        <a className="dropdown-item" href="#" onClick = { () => handleNewShapeSelection('LINE') }>line</a>
                        <a className="dropdown-item" href="#" onClick = { () => handleNewShapeSelection('RIGHTSNAKE') }>Right Snake</a>
                        <a className="dropdown-item" href="#" onClick = { () => handleNewShapeSelection('DOT') }>Dot</a>
                    </div>
                </div>
                
                <Button id="btnStart"
                        className = {'start-button btn ' + style }  
                        onClick = {() => this.props.handleShapeStart()} > { this.props.buttonRunLeyend } 
                </Button>

            </div>
        );
    }
}

export default ShapeSelector;