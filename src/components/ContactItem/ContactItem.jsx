import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/operations';
import css from './ContactItem.module.css';

export function ContactItem({ id, name, number }) {
  const dispatch = useDispatch();

  return (
    <li key={id} className={css.contacts__item}>
      <p className={css.contacts__text}>{name}:</p>
      <p className={css.contact__text}>{number}</p>
      <button
        type="button"
        className={css.btn}
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </li>
  );
}

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
