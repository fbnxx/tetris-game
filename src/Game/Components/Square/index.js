
//libraries
import React, { Component } from "react";
import PropTypes from "prop-types";

//components
import { Button, Glyphicon } from "react-bootstrap";

//styles
//import styles from "./styles.scss";
//import styles from "./styles.css";

class Square extends React.Component {


    static propTypes = 
    {
        color: PropTypes.string,
        posX: PropTypes.number,
        posY: PropTypes.number,
        side: PropTypes.number
    }

    render() {

      const { color, posX, posY, side } = this.props;

      let divStyle = {

        //position: "relative", 
        width: side +"px",  
        height: side +"px",
        
      };

      
      return (

        <div className= 'divContainer' style = {divStyle}>

          <div className= {'square' + ' ' + this.props.color} >  
          {/* + this.props.color} > */}
                        
          </div>
        </div>
      );
    }
  }


  export default Square;
  
