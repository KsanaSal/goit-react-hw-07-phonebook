import { createSlice } from '@reduxjs/toolkit';
import { addContact, fetchContacts, deleteContact } from './operations';

const handlePending = state => {
  console.log('first');
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected]: handleRejected,
    [addContact.pending]: handlePending,
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [addContact.rejected]: handleRejected,
    [deleteContact.pending]: handlePending,
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        contact => contact.id === action.payload
      );
      console.log(action.payload);
      state.items.splice(index, 1);
    },
    [deleteContact.rejected]: handleRejected,
  },

  // deleteContact(state, action) {
  //     const index = state.findIndex(contact => contact.id === action.payload);
  //     state.splice(index, 1);
  //     localStorage.setItem('contacts', JSON.stringify(state.map(item => item)));
  //   },

  // reducers: {
  //   addContact: {
  //     reducer(state, action) {
  //       let isDuplicate = true;
  //       state.map(
  //         item =>
  //           (isDuplicate = !item.name
  //             .toLocaleLowerCase()
  //             .includes(action.payload.name.toLocaleLowerCase()))
  //       );
  //       if (isDuplicate) {
  //         state.push(action.payload);
  //         localStorage.setItem(
  //           'contacts',
  //           JSON.stringify(state.map(item => item))
  //         );
  //       } else {
  //         alert(`${action.payload.name} is already in contacts`);
  //       }
  //     },
  //   },
  //   deleteContact(state, action) {
  //     const index = state.findIndex(contact => contact.id === action.payload);
  //     state.splice(index, 1);
  //     localStorage.setItem('contacts', JSON.stringify(state.map(item => item)));
  //   },
  // },
});

// export const { deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
