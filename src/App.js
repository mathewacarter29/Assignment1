import './App.css';
import React, {Component} from 'react'
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

class App extends Component {


  state = {
    username:"username"
  };

  usernameHandler = (event) => {
    this.setState(
      {
        username:event.target.value
      }
    )
  };

  render() {
    return (
      <div>
        <UserInput handler={this.usernameHandler} user={this.state.username}></UserInput>
        <UserOutput text1={this.state.username} text2="this is the second paragraph"></UserOutput>
      </div>
    );
  }
}


export default App;
