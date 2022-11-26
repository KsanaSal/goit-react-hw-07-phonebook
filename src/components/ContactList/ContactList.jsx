import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { getContacts, getFilter } from 'redux/selector';
import { List, ListItem, Button, ListItemWrapper } from './ContactList.styled';

export const ContactList = () => {
  console.log(useSelector(s => s));
  const contacts = useSelector(getContacts);
  console.log(contacts);
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const filteredList = contacts.filter(el =>
    el.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
  );

  return (
    <List>
      {filteredList.map(contact => {
        // console.log(contact.id);
        return (
          <ListItem key={contact.id}>
            <ListItemWrapper>
              {contact.id}: {contact.name}: {contact.phone}
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
