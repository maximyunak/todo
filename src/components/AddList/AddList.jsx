import React, { useState } from 'react';
import List from '../List/List';
import Badge from '../Badge/Badge';

import './AddList.scss';
import closeSvg from '../../assets/img/close.svg';

const AddList = ({ colors }) => {
  const [visiblePopup, setVisiblePopup] = useState(false);
  const [selectedColor, setSelectedColor] = useState(colors[0].id);

  return (
    <div className="add-list">
      <List
        items={[
          {
            className: 'list__add-button',
            icon: (
              <svg
                width="11"
                height="11"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 1V15"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1 8H15"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ),
            name: 'Add task',
          },
        ]}
        isRemovable={false}
        onClick={() => {
          setVisiblePopup(!visiblePopup);
          setSelectedColor(colors[0].id);
        }}
      />
      {visiblePopup && (
        <div className="add-list__popup">
          <img
            className="add-list__popup-close-btn"
            src={closeSvg}
            alt="close btn"
            onClick={() => {
              setVisiblePopup(false);
              setSelectedColor(colors[0].id);
            }}
          />
          <input className="field" type="text" placeholder="Enter task name..." />
          <div className="add-list__popup-colors">
            {colors.map((color, i) => (
              <Badge
                onClick={() => setSelectedColor(color.id)}
                key={i}
                color={color.name}
                className={selectedColor === color.id && 'active'}
              />
            ))}
          </div>
          <button className="button">Add</button>
        </div>
      )}
    </div>
  );
};

export default AddList;
