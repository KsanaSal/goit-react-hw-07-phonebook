import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { selectContacts, selectFilter } from 'redux/selector';
import { List, ListItem, Button, ListItemWrapper } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const filteredList = contacts.filter(el =>
    el.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
  );

  return (
    <List>
      {filteredList.map(contact => {
        return (
          <ListItem key={contact.id}>
            <ListItemWrapper>
              {contact.name}: {contact.phone}
              <Button
                type="button"
                onClick={() => dispatch(deleteContact(contact.id))}
              >
                Delete
              </Button>
            </ListItemWrapper>
          </ListItem>
        );
      })}
    </List>
  );
};
