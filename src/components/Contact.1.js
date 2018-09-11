import React from "react";
import "./Contact.css";

class Contact extends React.Component {
  state = {
    kgive: 0,
    fname: "",
    lname: "",
    kreceived: ""
  };

  constructor(props) {
    super(props);

    this.incrementKudoCount = this.incrementKudoCount.bind(this);
  }

  incrementKudoCount(ev) {
    this.setState(prevState => ({
      kgive: prevState.kgive + 1
    }));
  }

  render() {
    return (
      <div className="appPerson">
        <p>
          Name: {this.props.fname} {this.props.lname}{" "}
          <button onClick={this.incrementKudoCount}>Give Kudo!</button>
        </p>
        <p>Kudos Given: {this.state.kgive}</p>
        <p>Kudos Received: {this.props.kreceived}</p>
      </div>
    );
  }
}

export default Contact;

