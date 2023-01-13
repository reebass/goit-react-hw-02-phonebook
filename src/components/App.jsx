import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { Container } from './App.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContacts = ({ name, number }) => {
    const newContacts = {
      id: nanoid(),
      name,
      number,
    };

    if (!this.checkExistContact(name)) {
      this.setState(prevState => ({
        contacts: [newContacts, ...prevState.contacts],
      }));
    } else {
      alert(`${name} is already in contacts`);
    }
  };

  checkExistContact = value => {
    const { contacts } = this.state;
    return contacts.some(
      contact => value.toLowerCase() === contact.name.toLowerCase()
    );
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  deliteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(({ id }) => id !== contactId),
    }));
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      // <div
      //   style={{
      //     height: '100vh',
      //     display: 'flex',
      //     justifyContent: 'center',
      //     alignItems: 'center',
      //     fontSize: 40,
      //     color: '#010101',
      //   }}
      // >
      <Container>
        <h1 style={{ margin: '0' }}>Phonebook</h1>
        <ContactForm onSubmit={this.addContacts} />
        <h2 style={{ margin: '0' }}>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList
          arrContacts={visibleContacts}
          onDeleteContacts={this.deliteContact}
        />
      </Container>
      // </div>
    );
  }
}
