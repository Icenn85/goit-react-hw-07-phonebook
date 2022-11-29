import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import {
  selectFilteredContacts,
  selectIsLoading,
  selectError,
} from '../../redux/selectors';
import { ContactItem } from '../ContactItem/ContactItem';
// import { getContacts, deleteContactAction } from '../../redux/contactsSlice';
// import { getFilterValue } from '../../redux/filterSlice';

const ContactList = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const filteredContacts = useSelector(selectFilteredContacts);

  // const filteredContacts = contacts.filter(contact =>
  //   contact.name.toLowerCase().includes(filter.toLowerCase())
  // );

  return (
    <>
      {isLoading && !error && <p>Loading contacts...</p>}
      {error && <p>{error}</p>}
      <ul className={css.contacts__list}>
        {filteredContacts.map(({ id, name, number }) => (
          <ContactItem id={id} name={name} number={number} />
        ))}
      </ul>
    </>
  );
};

export default ContactList;
