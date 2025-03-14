import React from 'react';

import FormComponent from './FormComponent/FormComponent';
import styles from './root.component.module.css';

export default function Root(props) {
  const dialogRefAccessor = 'componentInstance';
  const dialogData = props[dialogRefAccessor].data;
  console.log('props from Angular:', props);
  console.log('passed from Angular:', dialogData);

  const handleSave = formData => {
    console.log('Form Data:', formData);
    props[dialogRefAccessor].dialogRef.close({ event: 'update', message: 'Updated from react parcel', data: formData });
  };

  return (
    <section>
      <h3 className={styles.title}> {dialogData.title} </h3>
      <FormComponent todo={dialogData.todo} onSave={handleSave} />
      <button
        type='button'
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
        onClick={() => {
          document.querySelector('form').dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
        }}>
        Update
      </button>
    </section>
  );
}
