import React from "react";
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
        setTimeout(this.state.clicked ? this.setState({source: trump}) : this.setState({source: talk}), 3000);
    }

    toggleImage(props){
        !this.state.clicked ? this.setState({clicked: true, source: talk}) : this.setState({ clicked: false, source: trump})
        this.imageReturn()
        this.apiCall();
    }

    render(){
        return(
            <div className="Image">
                <img onClick={this.toggleImage} src={this.state.source} alt="Trump Sillouhette"></img>
            </div>
        )
    }
};
export default Image