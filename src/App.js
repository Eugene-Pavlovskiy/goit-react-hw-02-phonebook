import { Component } from 'react';

import Form from './components/Form';
import Filter from './components/Filter';
import Contacts from './components/Contacts';

import s from './App.module.css';

class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
    name: '',
    number: ''
  };

  onSubmit = contact => {
    const isInContacts = this.state.contacts.find(
      el => el.name === contact.name,
    );

    if (isInContacts) {
      alert(`${contact.name} is already in contacts`);
      return;
    }

    this.setState(({ contacts }) => {
      return {
        contacts: [...contacts, contact],
      };
    });
  };

  removeContact = id => {
    const contacts = this.state.contacts.filter(contact => contact.id !== id);

    this.setState({ contacts });
  };

  onFilterChangeHandle = ({ currentTarget }) => {
    const value = currentTarget.value;

    this.setState({ filter: value });
  };

  getFilteredContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(normalizedFilter) ||
        contact.number.includes(normalizedFilter),
    );
  };

  render() {
    const filteredContacts = this.getFilteredContacts();

    return (
      <div className={s.app}>
        <h1 className={s.app__title}>Phonebook</h1>
        <Form onSubmit={this.onSubmit} />
        <h2 className={s.app__title}>Contacts</h2>
        <Filter
          filterValue={this.state.filter}
          onInputChange={this.onFilterChangeHandle}
        />
        <Contacts
          contacts={this.state.contacts}
          filteredContacts={filteredContacts}
          removeHandler={this.removeContact}
        />
      </div>
    );
  }
}

export default App;