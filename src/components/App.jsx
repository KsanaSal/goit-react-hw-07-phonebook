import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    const localContacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(localContacts);
    return parsedContacts || [];
  });
  const [filter, setFilter] = useState('');

  const addContact = (value, { resetForm }) => {
    const contact = { id: nanoid(), name: value.name, number: value.number };
    if (
      contacts.filter(el =>
        el.name.toLocaleLowerCase().includes(value.name.toLocaleLowerCase())
      ).length === 0
    ) {
      setContacts(prevContacts => [contact, ...prevContacts]);
    } else {
      alert(`${value.name} is already in contacts`);
    }
    resetForm();
  };

  const filterChange = e => {
    setFilter(e.target.value);
  };

  // const filteredList = () => {
  //   return contacts.filter(el =>
  //     el.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
  //   );
  // };

  const deleteContact = id => {
    setContacts(contacts.filter(el => el.id !== id));
  };

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        padding: 20,
        fontSize: 40,
        color: '#010101',
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />

      <h2>Contacts</h2>
      <Filter filter={filter} filterChange={filterChange} />
      <ContactList deleteContact={deleteContact} />
    </div>
  );
};
