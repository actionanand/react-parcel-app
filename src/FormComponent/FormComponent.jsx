import React, { useState, useEffect } from 'react';

import styles from './FormComponent.module.css';

export default function FormComponent({
  todo = { title: 'Add some stuffs to todo', isDone: false },
  onSave,
  onChange,
}) {
  const [name, setName] = useState(todo.title);
  const [isToggled, setIsToggled] = useState(todo.isDone);

  useEffect(() => {
    setName(todo.title);
    setIsToggled(todo.isDone);
  }, [todo]);

  const handleNameChange = event => {
    setName(event.target.value);
    onChange(event.target.value !== todo.title || isToggled !== todo.isDone);
  };

  const handleToggleChange = () => {
    setIsToggled(!isToggled);
    onChange(name !== todo.title || !isToggled !== todo.isDone);
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSave({ title: name, isDone: isToggled });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div>
        <label className={styles.label}>
          Latest todo:
          <input type='text' value={name} onChange={handleNameChange} className={styles.input} />
        </label>
      </div>
      <div className={styles.checkbox}>
        <input type='checkbox' id='toggle' checked={isToggled} onChange={handleToggleChange} />
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor='toggle'></label>
      </div>
      <button type='submit' style={{ display: 'none' }}>
        Submit
      </button>
    </form>
  );
}
