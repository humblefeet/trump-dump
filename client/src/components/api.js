import React from 'react'

class Api extends React.Component{
    constructor(props){
        super(props);

        this.state={
            quote: null,
            isLoaded: false
        }
    }   

    componentDidMount() {
        fetch("https://api.whatdoestrumpthink.com/api/v1/quotes/random")
            .then(res => res.json())
            .then(
                (result) => {
                this.setState({
                    isLoaded: true,
                    quote: result.message
                });
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
                }
            )
    }

    render(){
        return(
            <div className="api">
                <p>{this.state.quote}</p>
            </div>
        )
    }
    
}
export default Api;