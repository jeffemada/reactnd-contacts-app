import React, { Component } from "react";
import ListContacts from "./ListContacts";
import * as ContactsAPI from "./utils/ContactsAPI.js";

class App extends Component {
  state = {
    contacts: []
  };

  componentDidMount() {
    ContactsAPI.getAll().then(contacts => {
      this.setState(() => ({ contacts }));
    });
  }

  removeContact = contact => {
    this.setState(currentState => ({
      //é o novo objeto (entre '{}') que representa estado
      contacts: currentState.contacts.filter(c => c.id !== contact.id)
    }));
    ContactsAPI.remove(contact);
  };

  render() {
    return (
      <div>
        <ListContacts
          contacts={this.state.contacts}
          onRemoveContact={this.removeContact}
        />
      </div>
    );
  }
}

export default App;
