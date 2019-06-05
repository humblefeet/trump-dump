import React from "react";
import {Spring} from 'react-spring/renderprops'
import './image.css'
import trump from '../../images/trump.png'
import talk from '../../images/talkTrump.png'

class Image extends React.Component{
    constructor(props){
        super(props);
        this.state={
            source: trump,
            clicked: false
        }
        this.toggleImage = this.toggleImage.bind(this);
        this.apiCall = props.apiCall.bind(this);
        this.imageReturn = this.imageReturn.bind(this)
    }



    imageReturn(){
        setTimeout(this.state.clicked ? this.setState({source: trump, clicked: false}) : this.setState({source: talk, clicked: true}), 3000);
    }

    toggleImage(props){
        !this.state.clicked ? this.setState({clicked: true, source: talk}) : this.setState({ clicked: false, source: trump})
        this.imageReturn()
        this.apiCall();
    }

    render(){
        return(
            <div className="Image">

                <Spring
                    from={{
                        // Start invisible and offscreen
                        opacity: 0, marginTop: -1000,
                        }}
                        to={{
                        // End fully visible and in the middle of the screen
                        opacity: 1, marginTop: 0,
                        }}
                >
                    { props => (<img style={props} onClick={this.toggleImage} src={this.state.source} alt="Trump Sillouhette"></img>)}
                
                </Spring>

            </div>
        )
    }
};
export default Image