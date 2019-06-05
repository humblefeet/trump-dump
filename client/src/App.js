import React from 'react';
import './App.css';

//Import Components
import Header from './components/header/header'
import Image from './components/image/image'
import Quote from './components/quote/quote'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      quote:null,
      isLoaded: false,
    }
    this.apiCall = this.apiCall.bind(this)
  }

  // componentDidMount(){
  //   this.apiCall();

  // }



    
  apiCall = () => {
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
    console.log(this.state.quote)
  }


  render(){
    return (
      <div className="App">
        <Header/>
        <div className="main">
          <Image apiCall={this.apiCall} />
          <Quote quote={this.state.quote}/>
        </div>
      </div>
    );
  }
}

export default App;
