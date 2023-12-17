import { useSelector } from 'react-redux';
import { List, ListItem } from './ContactsList.styled';
import { ContactCard } from '../ContactCard/ContactCard';
import { selectVisibleContacts } from '../../redux/selectors';

export const ContactsList = () => {
  const items = useSelector(selectVisibleContacts);

  return (
    <List>
      {items.map(item => (
        <ListItem key={item.id}>
          <ContactCard contact={item} />
        </ListItem>
      ))}
    </List>
  );
};
