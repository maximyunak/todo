import React from 'react';
import classNames from 'classnames';

import Badge from '../Badge/Badge';

import './List.scss';

const List = ({ items, isRemovable, onClick }) => {
  return (
    <ul onClick={onClick} className="list">
      {items.map((el, i) => (
        <li key={i} className={classNames(el.className, { active: el.active })}>
          <i>{el.icon ? el.icon : <Badge color={el.color} />}</i>
          <span>{el.name}</span>
        </li>
      ))}
    </ul>
  );
};

export default List;
