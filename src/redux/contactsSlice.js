import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactsInitialState = [
  { id: '3YTyUrRs9KeDji_lWQAU8', name: 'Oksana', number: '451-25-36' },
  {
    id: '3YTyUrRs9KeDji_lWQAU8pL',
    name: 'Oksana Salivon',
    number: '457-28-36',
  },
  { id: '3YTyUrRs9KeDji_lWQAU83f', name: 'Liza State', number: '450-55-39' },
];

const contactsSlice = createSlice({
  name: 'Contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
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
