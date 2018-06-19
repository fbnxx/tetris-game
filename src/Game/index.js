

//libraries
import React, { Component } from "react";
import PropTypes from "prop-types";
//components
import { Button, Glyphicon } from "react-bootstrap";
//styles
import Styles from "./styles.scss";

import Board from "../Game/Components/Board"

import { Grid, Col, Row } from 'react-bootstrap'

class Game extends React.Component {


    constructor(props)
    {
        super(props)

        const h = 10;
        const v = 20;
        const inicialSquareState = 'LIBRE'; // 'LIBRE', 'OCUPADO', 'JUGANDO'
        const colorStyle = 'button-free';

        this.state = {
            game: { //  TO DO: remove this game level
                playerName:"Fabian",
                lines: 0,
                score: 0,
                squareSidePX: 20,
                squaresHorizontal: h,
                squaresVertical: v,
                shapePlaying: 'LINE', // 'LINE', '4SQUARES', etc
                shapeRunning: false,
                buttonRunLeyend: 'waiting...',
                posXShape:0,
                posYShape:0,
                shapeDegree: 0,
                surface: {                    
                    squaresState: this.initSquares(h,v,inicialSquareState,colorStyle),
                    style: 'surface-default-style'
                }
            }
        };

        this.handleShapeMove = this.handleShapeMove.bind(this);
        this.handleShapeStart = this.handleShapeStart.bind(this);
        this.handleNewShapeSelection = this.handleNewShapeSelection.bind(this);

    }

    initSquares(h,v,state,colorStyle)
    {
        let squareProps = [];

        console.log("initSquares");        

        for(let y = 0; y < v ; y++)
        {
            for(let x = 0; x < h ; x++)
            {
                let squareProp = {
                    state: state,  
                    colorStyle: colorStyle,
                    posY: y,
                    posX: x,                    
                    memberShapeID: ''
                };

                squareProps.push(squareProp);
            }
        }

        return squareProps;
    }

    componentDidMount() { console.log('componentDidMount');}
    
    componentWillMount() { console.log('componentWillMount');}

    handleShapeMove(move){

        console.log(move);

        let newShapePosition;
        let newBlocksState;

        let blacksPackage = this.shapeMatrix(this.state.game.shapePlaying, this.state.game.shapeDegree);
                
        switch (move)
        {
            case 'LEFT':
            
                newShapePosition = this.state.game.posXShape == 0 ? 4 : this.state.game.posXShape - 1 ;
            break;
            case 'RIGHT':

                newShapePosition = this.state.game.posXShape == 0 ? 4 : this.state.game.posXShape + 1 ;
            break;
            case 'DOWN':
                
                newShapePosition = this.state.game.posXShape == 0 ? 4 : this.state.game.posXShape + this.state.game.squaresHorizontal;
            break;
            case 'SPIN':

            break;
        }

        newBlocksState = 
            this.drawShape(newShapePosition, 0, blacksPackage.shapeStyle, blacksPackage.shapeID, blacksPackage.blacks);

        let game = this.state.game;

        game.surface.squaresState = newBlocksState;
        game.posXShape = newShapePosition;
        game.buttonRunLeyend = blacksPackage.runButtonLeyend;
        game.shapeRunning = true;

        this.setState({ game });
    }

    handleShapeStart(){

        console.log('New shape start, shape running: ' + this.state.game.shapePlaying);

        if(this.state.game.shapeRunning)
        {
            let game = this.state.game;

            game.surface.squaresState.map((s) => 
            {
                if(s.state == 'JUGANDO')
                {
                    s.state = 'OCUPADO';
                    
                }
            });

            game.posXShape = 0;
            game.buttonRunLeyend = 'Waiting...';
            game.shapeRunning = false;

            this.setState({ game });
        }
        else
        {
            this.handleShapeMove('DOWN');          
        }
    } 

    handleNewShapeSelection(shapeID){

        console.log('New shape selected: ' + shapeID);

        //  hay que crear una copya del objeto y actualizarla debido a que setState no soporta nested updates
        var game = this.state.game;
        game.buttonRunLeyend = 'Start with ' + shapeID;
        game.shapePlaying = shapeID;
        
        this.setState({

            game
        });
        //  ------------------------------------------------------------------------------------------------

        return false;
    }

    render(){   

        console.log('render called with leyend: ' + this.state.game.buttonRunLeyend);
        console.log('style: ' + this.state.game.surface.style);

        return(
            <Board 
                squareSidePX = {this.state.game.squareSidePX} 
                squaresHorizontal = {this.state.game.squaresHorizontal}
                squaresVertical = {this.state.game.squaresVertical}
                surface = {this.state.game.surface}
                handleShapeMove = { this.handleShapeMove }
                handleNewShapeSelection = { this.handleNewShapeSelection }
                handleShapeStart = { this.handleShapeStart }
                buttonRunLeyend = { this.state.game.buttonRunLeyend }
            />
        );
    }

    updateState(){}

    shapeMatrix(shapeID, degree){

        let b = {};

        switch (shapeID)
        {
            case '4SQUARES':
            {
                if( degree == 0 )
                {                
                    b.blacks = 
                    [
                        0,1 ,
                        this.state.game.squaresHorizontal, this.state.game.squaresHorizontal + 1 
                    ];
                }
                else if( degree == 90) {

                }
                else if( degree == 180 ) {
                    
                }
                else if( degree == 270 ) {

                }

                b.shapeID = this.state.game.shapeID;
                b.shapeStyle = 'button-yellow';                
                break;
            }
            case 'LINE':
            {
                if( degree == 0 )
                {
                    b.blacks = 
                    [
                        0,
                        this.state.game.squaresHorizontal, 
                        this.state.game.squaresHorizontal * 2, 
                        this.state.game.squaresHorizontal * 3, 
                    ];
                }
                else if( degree == 90) {

                }
                else if( degree == 180 ) {
                    
                }
                else if( degree == 270 ) {

                }

                b.shapeID = this.state.game.shapeID;
                b.shapeStyle = 'button-blue';
                break;
            }

            case 'RIGHTSNAKE':
            {
                if( degree == 0 )
                {
                    b.blacks = 
                    [
                        0,
                        this.state.game.squaresHorizontal, 
                        this.state.game.squaresHorizontal + 1, 
                        this.state.game.squaresHorizontal * 2 + 1, 
                    ];
                }
                else if( degree == 90) {

                }
                else if( degree == 180 ) {
                    
                }
                else if( degree == 270 ) {

                }

                b.shapeID = this.state.game.shapeID;
                b.shapeStyle = 'button-green';
                break;
            }
        
        };

        b.runButtonLeyend = 'Stop';

        return b;
    }


    drawShape(x,y, colorStyle, shapeID, blacks)
    {

        let _squares = this.state.game.surface.squaresState;
        let _x = 0;

        let newBlocksState = _squares.map((v, i, a) => {
                        
            if(v.state == 'JUGANDO')
            {
                v.state = 'LIBRE';
                v.colorStyle = 'button-free';
                v.memberShapeID = '';
            }

            let _blacks = blacks.map((o,index) => {
                
                if( o != -1 )
                {
                    if( i == o + x )    //  en teoria solo para una vez durante el ciclo de Blacks
                    {
                        o = -1;

                        if( v.state == 'OCUPADO' )
                        {
                            // no puede avanzar, se lanza evento STOP
                        }
                        else if(v.state == 'LIBRE' )
                        {
                            v.state = 'JUGANDO';
                            v.colorStyle = colorStyle;
                            v.memberShapeID = shapeID;

                            return o;
                        }
                    }
                }

                return o;
            });

            blacks = _blacks;
            
            return v;
        });

       return newBlocksState;

    }
}

export default Game;