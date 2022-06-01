import './App.css';
import React from 'react';
class App  extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      quotes :[
        {quote: "Quote text 1", author:"author1"},
        {quote: "Quote text 2", author:"author2"},
        {quote: "Quote text 3", author:"author3"},
        {quote: "Quote text 4", author:"author4"},
        {quote: "Quote text 5", author:"author5"},
        {quote: "Quote text 6", author:"author6"},
        {quote: "Quote text 7", author:"author7"},
        {quote: "Quote text 8", author:"author8"},
        {quote: "Quote text 9", author:"author9"},
        {quote: "Quote text 10", author:"author10"} ],
      index: parseInt(Math.random() * 10)
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    this.setState({
      quotes: this.state.quotes,
      index:  parseInt(Math.random() * 10)
    })
   
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div id="quote-box">
            <p id="text">{this.state.quotes[this.state.index].quote}</p>
            <p id="author">author: {this.state.quotes[this.state.index].author}</p>
            <button id='new-quote' onClick={this.handleClick}>new quote</button>
            <a id="tweet-quote" 
            href='https://twitter.com/intent/tweet'
            target="_blank">Tweet quote</a>
          </div>
        </header>
      </div>
    );
  }
  
}

export default App;
