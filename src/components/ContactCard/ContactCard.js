import { useDispatch } from 'react-redux';
import { RiContactsLine } from 'react-icons/ri';
import { deleteContact } from '../../redux/operations';
import { DeleteBtn, ContactWraper } from './ContactCard.styled';

export const ContactCard = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <ContactWraper>
      <span>
        <RiContactsLine /> {name}:
      </span>
      <span>{number} </span>
      <DeleteBtn onClick={handleDelete}>Delete</DeleteBtn>
    </ContactWraper>
  );
};
