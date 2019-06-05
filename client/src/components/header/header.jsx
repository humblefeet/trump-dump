import React from "react";
import {Spring} from 'react-spring/renderprops'
import './header.css'

class Header extends React.Component{
    render(){
        
    return(
        <div>
            <Spring
                from={{opacity: 0}}
                to={{opacity: 1}}

            >
                {props =>   <div style={props}className="Header">
                                <h1>TRUMP DUMP</h1>
                                <h3>A collection of 45's best words</h3>
                            </div>}
            </Spring>
        </div>
    )
}
};
export default Header;