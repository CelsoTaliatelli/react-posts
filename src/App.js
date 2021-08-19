import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
class App extends Component{
  constructor(props){
    super(props);
    this.handlePClick = this.handlePClick.bind(this);
    this.state = {
      name: 'Celso Henrique Taliatelli',
      counter: 0
    };
  }

  handlePClick() {
  this.setState({name:'Yuyu'})
  }

  handleClick2 = (event) => {
    event.preventDefault();
    const {counter} = this.state;
    this.setState({counter: counter +1})
  }


  render(){
    const {name,counter} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p onClick={this.handlePClick}>
            {name}{counter}
          </p>
          <a
            onClick={this.handleClick2}
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
  
}

export default App;
