import React from 'react';
import classNames from 'classnames';

import Badge from '../Badge/Badge';
import RemoveSvg from '../../assets/img/remove.svg';

import './List.scss';

const List = ({ items, isRemovable, onClick, onRemove }) => {
  return (
    <ul onClick={onClick} className="list">
      {items.map((el, i) => (
        <li key={i} className={classNames(el.className, { active: el.active })}>
          <i>{el.icon ? el.icon : <Badge color={el.color} />}</i>
          <span>{el.name}</span>
          {isRemovable && (
            <img
              className="list__remove-icon"
              src={RemoveSvg}
              alt="remove icon"
              onClick={() => onRemove(el)}
            />
          )}
        </li>
      ))}
    </ul>
  );
};

export default List;
