// import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selector';
import { List, ListItem, Button, ListItemWrapper } from './ContactList.styled';

export const ContactList = ({ deleteContact }) => {
  const contacts = useSelector(getContacts);
  console.log(contacts);
  return (
    <List>
      {contacts.map(contact => {
        return (
          <ListItem key={contact.id}>
            <ListItemWrapper>
              {contact.name}: {contact.number}
              <Button type="button" onClick={() => deleteContact(contact.id)}>
                Delete
              </Button>
            </ListItemWrapper>
          </ListItem>
        );
      })}
    </List>
  );
};

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ).isRequired,
//   deleteContact: PropTypes.func.isRequired,
// };
