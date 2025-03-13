import React, { useState, useEffect } from 'react';
import styles from './FormComponent.module.css';

export default function FormComponent({
  todo = { title: 'Add some stuffs to todo', isDone: false },
}) {
  const [name, setName] = useState('');
  const [isToggled, setIsToggled] = useState(false);

  useEffect(() => {
    if (todo) {
      setName(todo.title);
      setIsToggled(todo.isDone);
    }
  }, [todo]);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleToggleChange = () => {
    setIsToggled(!isToggled);
  };

  return (
    <form className={styles.form}>
      <div>
        <label className={styles.label}>
          Latest todo:
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            className={styles.input}
          />
        </label>
      </div>
      <div className={styles.checkbox}>
        <input
          type="checkbox"
          id="toggle"
          checked={isToggled}
          onChange={handleToggleChange}
        />
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="toggle"></label>
      </div>
    </form>
  );
}
