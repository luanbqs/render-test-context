'use client';

import { Card } from "@/components/atoms/Card/Card";
import styles from './ToDoList.module.css'
import { useContext } from "react";
import { ToDoContext } from "@/app/context/ToDoContext";

export const TodoList = () => {
  const { toDos, editToDo } = useContext(ToDoContext)



  return (
    <div>
      <ul>
        {toDos.map((toDo) => (
          <Card key={toDo.id}>
            <div className={styles.row}>
              <input onChange={
                () => {
                  editToDo({
                    ...toDo,
                    completed: !toDo.completed,
                  });
                }
              } className={styles.checkbox} type="checkbox" id="scales" name="scales" checked={toDo.completed} />
              {toDo.text}
            </div>
          </Card>
        ))}
      </ul>
    </div>
  );
}

