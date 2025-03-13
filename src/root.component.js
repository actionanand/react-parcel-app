import React from 'react';

import FormComponent from './FormComponent/FormComponent';
import styles from './root.component.module.css';

export default function Root(props) {
  const dialogRefAccessor = 'componentInstance';
  const dialogData = props[dialogRefAccessor].data;
  console.log('props from Angular:', props);
  console.log('passed from Angular:', dialogData);

  return (
    <section>
      <h3 className={styles.title}> {dialogData.title} </h3>
      <FormComponent todo={dialogData.todo} />
    </section>
  );
}
