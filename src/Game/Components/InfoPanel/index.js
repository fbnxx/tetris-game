
import React, {Component} from 'react'

import {Panel} from 'react-bootstrap'

import styles from "./styles.css";


class InfoPanel extends React.Component
{


    render(){

        return (
            <div className='info-panel'>
                <Panel>
                    <Panel.Body>
                
                    
                    <h4>Instructions</h4>
                    <p>
                        Before I'd liketo clarify, this is not a final project, It is just a small step :)
                        <ol>
                            <li>
                                Use the red "Select a shape" button to chose the shape you want to play with
                            </li>
                            <li>
                                Watch the verbous in the white button "start width " + "NAME OF THE SHAPE"
                            </li>
                            <li>
                                Click on that button, the shape sill be displayed
                            </li>
                            <li>
                                Move the shate with the gray-arrow buttons at the right side
                            </li>
                            <li>
                                When you are done with the shape, press the aqua-color "Stop" button
                            </li>
                            <li>
                                Do it as much as you get bored lol
                            </li>
                        </ol>
                    </p>
                    <h4>Info</h4>
                    <p>
                        This dummy is a React-Application created from scratch with the aim of get started with React, specifically paying attention at topics such as: Props, Components, state, conditional rendering, handling events, 
                        list and keys, thinking in react and really important Lifting State Up, however this won't end here, I will improve this project in my spare time and keep learning 
                        FULL stack stuff, planing to create an UI tool for allowing to users to create their own shapes and storage the characteristics on mongo, by doing so I'm especting
                        to learn some technics of FULL stack developments, I will use forms, lifecycle, webpack, rest, bootstrap and I'd like to create an API with express/NODE. Aditionally to
                        improve the look and feel, and of course make this playable and fun!
                    </p>
                    <p>
                        Of curse the are lots of improvemente that can be done, dispite of that I beilieve it is a good aproach, so as I mention before I spect to work on this on my spare time.
                        Please if you are interested on this project feel free to aport on it.
                        <p>
                            The project can be found in Github:  
                        </p>
                    </p>
                    <p>
                        The idea is pretty simple, a group of divs (is not a table) are arranges inside of a div parent, these small divs are basically displayed from left to right,
                        falling down to the next row by following the natural behabviour of the div container. It is really important to know that each small div (called block inside the code)
                        must have a inline-block display attibute, otherwise the efect wouldn't be as espected.
                    </p>               

                    
                
            </Panel.Body>
            </Panel>
            </div>
        );
    }

}

export default InfoPanel;