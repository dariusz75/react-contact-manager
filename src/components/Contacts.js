import React, { Component } from 'react';
import Contact from './Contact';


class Contacts extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: 'Dariusz Franczak',
        email: 'darius32@op.pl',
        phone: '07707636696'
      },
      {
        id: 2,
        name: 'John Smith',
        email: 'john@gmail.com',
        phone: '07707631234'
      },
      {
        id: 3,
        name: 'Johan Muller',
        email: 'johan@google.com',
        phone: '07712346696'
      }
    ]
  };

  deleteContact = (id) => {
    const newContacts = this.state.contacts.filter(contact => contact.id !== id);

    this.setState({
      contacts: newContacts
    })
  };



  render() {
    return (
      <div>
        {this.state.contacts.map(contact => {
          return <Contact key={contact.id} name={contact.name} email={contact.email} phone={contact.phone} deleteClickHandler={this.deleteContact.bind(this, contact.id)} />
        })}
      </div>
    )
  }
}

export default Contacts;