import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import KudoList from "./components/KudoList";

import axios from "axios";

class App extends Component {

  state = {
    contacts: []
  };

  componentDidMount() {
    axios
      .get("https://kudos-devtech8-yvbvpoek.herokuapp.com/users")
      .then(response => {
        const newContacts = response.data.map(c => {
          return {
            id: c.id,
            name: c.username,
            fname: c.first_name,
            lname: c.last_name,
            kgive: c.kudos_given_count,
            kreceived: c.kudos_received_count
          };
        });

        const newState = Object.assign({}, this.state, {
          contacts: newContacts
        });

        this.setState(newState);
      })
      .catch(error => console.log(error));
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to our Kudo app</h1>
        </header>
        <KudoList contacts={this.state.contacts} />
      </div>
    );
  }
}

export default App;
