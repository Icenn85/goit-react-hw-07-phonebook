import css from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts, deleteContactAction } from '../../redux/contactsSlice';
import { getFilterValue } from '../../redux/filterSlice';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilterValue);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={css.contacts__list}>
      {filteredContacts.map(({ id, name, number }) => (
        <li key={id} className={css.contacts__item}>
          <p className={css.contacts__text}>{name}:</p>
          <p className={css.contact__text}>{number}</p>
          <button
            type="button"
            className={css.btn}
            onClick={() => dispatch(deleteContactAction(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
