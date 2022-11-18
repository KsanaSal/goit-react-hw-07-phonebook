import { createSlice } from '@reduxjs/toolkit';

const localContacts = localStorage.getItem('contacts');
const parsedContacts = JSON.parse(localContacts);

const contactsInitialState = [
  { id: '3YTyUrRs9KeDji_lWQAU8', name: 'Oksana', number: '451-25-36' },
  {
    id: '3YTyUrRs9KeDji_lWQAU8pL',
    name: 'Oksana Salivon',
    number: '457-28-36',
  },
  { id: '3YTyUrRs9KeDji_lWQAU83f', name: 'Liza State', number: '450-55-39' },
];

const contacts = parsedContacts || contactsInitialState;
const contactsSlice = createSlice({
  name: 'Contacts',
  initialState: contacts,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
        console.log(state.contacts);
        localStorage.setItem(
          'contacts',
          JSON.stringify(state.contacts.map(item => item))
        );
      },
    },
    deleteContact(state, action) {
      const index = state.findIndex(contact => contact.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
