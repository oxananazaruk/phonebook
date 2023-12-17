import { Helmet } from 'react-helmet';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { ContactsList } from '../components/ContactsList/ContactsList';
import { Filter } from '../components/Filter/Filter';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectIsLoading,
  selectError,
  selectContacts,
} from '../redux/selectors';
import { fetchContacts } from '../redux/operations';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      <Filter />
      {isLoading && !error && <b>Request in progress...</b>}
      {error && <b>Somesing went wrong! Please, try reload this page.</b>}
      {contacts.length > 0 && <ContactsList />}
    </div>
  );
}
