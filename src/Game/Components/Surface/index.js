
//libraries
import React, { Component } from "react";
import PropTypes from "prop-types";
//components
import { Button, Glyphicon } from "react-bootstrap";
//styles
//import Styles from "./styles.scss";
import Square from "../Square"

class Surface extends React.Component {

    static propTypes = 
    {
        squareSidePX: PropTypes.number,
        squaresHorizontal: PropTypes.number,
        squaresVertical: PropTypes.number,
        
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
    }
        
    render() {

        const { squareSidePX, squaresHorizontal, squaresVertical  } = this.props;

        const divStyle = {

            width: squareSidePX * squaresHorizontal + 'px',
            height: squareSidePX * squaresVertical + 'px',
            display: 'inline-table'
        };
        //console.log('intro render,,,,, first element: ' + this.props.squaresState[0].state);

        return (
        
            <div>
                <p>Check the movings</p>
                <div style = {divStyle}>
                    {this.props.squaresState.map((currentElement,index) => (

                        <Square key={index} 
                        color={currentElement.colorStyle}
                        posY={currentElement.posY}
                        posX={currentElement.posX}                
                        side={this.props.squareSidePX}
                        />
                    ))}
                </div>
            </div>

      );
    }
  }

  export default Surface;