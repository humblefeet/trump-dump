import React from "react";
import './quote.css'

class Quote extends React.Component{
    render(){
        
        return(
            <div className="Quote">
                
                <p>"{this.props.quote}"</p>        
                
            </div>
        )
    }
};
export default Quote;