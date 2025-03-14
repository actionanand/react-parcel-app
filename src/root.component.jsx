import React, { useState } from 'react';

import FormComponent from './FormComponent/FormComponent';
import styles from './root.component.module.css';

export default function Root(props) {
  const dialogRefAccessor = 'componentInstance';
  const dialogData = props[dialogRefAccessor].data;
  console.log('props from Angular:', props);
  console.log('passed from Angular:', dialogData);

  const [isChanged, setIsChanged] = useState(false);

  const handleSave = formData => {
    if (formData.title.length > 30) {
      formData.title = formData.title.substring(0, 30) + '...';
    }
    console.log('Form Data:', formData);
    props[dialogRefAccessor].dialogRef.close({ event: 'update', message: 'Updated from react parcel', data: formData });
  };

  const handleChange = changed => {
    setIsChanged(changed);
  };

  return (
    <section>
      <h3 className={styles.title}> {dialogData.title} </h3>
      <FormComponent todo={dialogData.todo} onSave={handleSave} onChange={handleChange} />

      <div className={styles.buttonContainer}>
        <button
          type='button'
          className={`${styles.button} ${styles.cancel}`}
          onClick={() =>
            props[dialogRefAccessor].dialogRef.close({
              event: 'cancel',
              message: 'Cancelled from react parcel',
              data: null,
            })
          }>
          Cancel
        </button>
        <button
          type='button'
          className={`${styles.button} ${styles.update}`}
          onClick={() => {
            document.querySelector('form').dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
          }}
          disabled={!isChanged}>
          Update
        </button>
      </div>
    </section>
  );
}
