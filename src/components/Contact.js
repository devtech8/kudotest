import React from "react";
import "./Contact.css";
import { Button } from 'reactstrap';

class Contact extends React.Component {
  state = {
    kgive: 0,
    fname: "",
    lname: "",
    kreceived: 0
  };

  constructor(props) {
    super(props);

    this.incrementKudoCount = this.incrementKudoCount.bind(this);
  }

  incrementKudoCount(ev) {
    this.setState(prevState => ({
      kreceived: prevState.kreceived + 1
    }));
  }

  render() {
    return (
      <div className="appPerson">
        <p>
          Name: {this.props.fname} {this.props.lname}{" "}
          <Button color="info" onClick={this.incrementKudoCount}>Give Kudo!</Button>
        </p>
        <p>Kudos Given: {this.props.kgive}</p>
        <p>Kudos Received: {this.state.kreceived}</p>
      </div>
    );
  }
}

export default Contact;

