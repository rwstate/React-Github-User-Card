import React from 'react';
import CardList from "./components/CardList"
import './App.css';
import axios from "axios";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: []
    }
  }

  componentDidMount() {
    axios.get("https://api.github.com/users/rwstate")
      .then(res => this.setState({user: [...this.state.user, res.data]}))
      .catch(err => console.log(err))
    
    axios.get("https://api.github.com/users/rwstate/followers")
      .then(res => this.setState({user: [...this.state.user, ...res.data]}))
      .catch(err => console.log(err))
  }

  render() {
    return(
      <CardList users={this.state.user} />
    )
  }

}

export default App;
