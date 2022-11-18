import { nanoid } from '@reduxjs/toolkit';
import { Formik } from 'formik';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { Field, Form, Label, Button } from './ContactForm.styled';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (value, { resetForm }) => {
    const contact = { id: nanoid(), name: value.name, number: value.number };
    dispatch(addContact(contact));
    resetForm();
  };
  console.log(addContact);
  return (
    <div>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        onSubmit={handleSubmit}
      >
        <Form>
          <Label htmlFor="name">Name</Label>
          <Field
            id="name"
            type="text"
            name="name"
            placeholder="Name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />

          <Label htmlFor="number">Number</Label>
          <Field
            id="number"
            type="tel"
            name="number"
            placeholder="Number phone"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />

          <Button type="submit">Add contact</Button>
        </Form>
      </Formik>
    </div>
  );
};

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};
