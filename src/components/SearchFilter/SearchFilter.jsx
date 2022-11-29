import React from 'react';
import css from './SearchFilter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { filterContactsAction } from '../../redux/filterSlice';
import { selectFilterValue } from '../../redux/selectors';

const SearchFilter = () => {
  const filter = useSelector(selectFilterValue);
  const dispatch = useDispatch();

  const onHandleChangeFilter = evt => {
    dispatch(filterContactsAction(evt.currentTarget.value));
  };

  return (
    <div>
      <h3 className={css.filter__title}>Find contacts by name</h3>
      <input
        placeholder="Search"
        type="text"
        name="filter"
        value={filter}
        onChange={onHandleChangeFilter}
        className={css.filter__input}
      />
    </div>
  );
};

export default SearchFilter;