import React from 'react'

class Api extends React.Component{
    render(){

        this.state={
            quote: null
        }
        
        this.componentDidMount(){
            fetch('https://api.tronalddump.io/random/quote')
                .then(response => response.json())
                .then(data => this.setState({ quote: data }));
        
        };

    return(
        <div className="api">
            <p>{this.state.quote}</p>
        </div>
    )
}
};
export default Api;