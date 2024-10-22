'use client';

import { useContext, useState } from 'react';
import styles from './Input.module.css'
import { ToDoContext } from '@/app/context/ToDoContext';

export const Input = () => {
  const [toDoText, setToDoText] = useState('');

  const { addToDo } = useContext(ToDoContext);


  return (
    <div className={styles.row}>
      <input
        className={styles.textbox}
        aria-label="Set increment amount"
        value={toDoText}
        onChange={(e) => {
          setToDoText(e.target.value);
        }}
      />
      <button
        className={styles.button}
        aria-label="Increment value"
        onClick={() => {
          addToDo(toDoText);
          setToDoText('');
        }}
      >
        +
      </button>
    </div>
  )
}