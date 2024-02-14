import React, { useState } from 'react';
import List from '../List/List';
import Badge from '../Badge/Badge';

import './AddList.scss';
import closeSvg from '../../assets/img/close.svg';

const AddList = ({ colors, onAdd }) => {
  const [visiblePopup, setVisiblePopup] = useState(false);
  const [selectedColor, setSelectedColor] = useState(colors[0].id);
  const [inputValue, setInputValue] = useState('');

  const onClose = () => {
    setVisiblePopup(!visiblePopup);
    setInputValue('');
    setSelectedColor(colors[0].id);
  };

  const addList = () => {
    if (!inputValue) {
      alert('enter task name');
    } else {
      const color = colors.filter((c) => c.id === selectedColor)[0].name;
      onAdd({
        id: Math.random(),
        name: inputValue,
        color: color,
      });
    }
  };

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
        onClick={onClose}
      />
      {visiblePopup && (
        <div className="add-list__popup">
          <img
            className="add-list__popup-close-btn"
            src={closeSvg}
            alt="close btn"
            onClick={onClose}
          />
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="field"
            type="text"
            placeholder="Enter task name..."
          />
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
          <button onClick={addList} className="button">
            Add
          </button>
        </div>
      )}
    </div>
  );
};

export default AddList;
