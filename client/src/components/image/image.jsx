import React from "react";
import './image.css'
import trump from '../../images/trump.png'

const Image = (props) => {
    return(
        <div className="Image">
            <img onClick={props.apiCall} src={trump} alt="Trump Sillouhette"></img>
        </div>
    )
};
export default Image;