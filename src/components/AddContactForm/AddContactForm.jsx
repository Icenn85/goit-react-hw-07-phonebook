import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts, addContactAction } from '../../redux/contactsSlice';
import { nanoid } from 'nanoid';
import css from './AddContactForm.module.css';

const AddContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleChange = evt => {
    const { name, value } = evt.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const onFormSubmit = ({ name, number }) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    const isContact = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isContact) {
      alert(`${name} is already in contact`);
      return;
    }

    dispatch(addContactAction(newContact));
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    onFormSubmit({ name, number });

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.label}>Name</label>
      <input
        className={css.input}
        value={name}
        onChange={handleChange}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <label className={css.label}>Number</label>
      <input
        className={css.input}
        value={number}
        onChange={handleChange}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button type="submit" className={css.btn}>
        Add contact
      </button>
    </form>
  );
};

export default AddContactForm;
