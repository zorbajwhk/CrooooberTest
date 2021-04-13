import React from 'react';
import logo from '../../logo.svg';
import './App.css';
import EventButton from '../EventButton/EventButton';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  };

  callAPI() {
      fetch("http://localhost:9000/testAPI")
          .then(res => res.text())
          .then(res => this.setState({ apiResponse: res }));
  };

  UNSAFE_componentWillMount() {
      this.callAPI();
  };

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <EventButton />
          <p className="App-intro">{this.state.apiResponse}</p>
        </header>
      </div>
    );
  };
}

export default App;
