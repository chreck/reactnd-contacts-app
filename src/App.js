import React, { Component } from 'react'
import ListContacts from './ListContacts';
import * as API from './utils/ContactsAPI.js';

class App extends Component {
  state = {
    contacts : []
  };

  componentDidMount = () => {
    API.getAll().then((contacts)=> {
      this.setState(()=>({
        contacts
      }))
    })
  }

  removeContact = (contact) => {
    this.setState((currentState) => ({
      contacts: currentState.contacts.filter((c) => {
        return c.id !== contact.id
      })
    }))
    API.remove(contact);
  }

  render = () => {
    return (
      <div>
        <ListContacts 
        contacts={this.state.contacts}
        onDeleteContact={this.removeContact} />
      </div>
    );
  }
}

export default App;
