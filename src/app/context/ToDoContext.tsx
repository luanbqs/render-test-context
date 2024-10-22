'use client'

import { createContext, useState } from "react";

interface ToDo {
  id: number;
  text: string;
  completed: boolean;
}

const defaultContext = {
  toDos: [
    {
      id: 1,
      text: "Learn React",
      completed: false,
    },
    {
      id: 2,
      text: "Learn Redux",
      completed: false,
    },
    {
      id: 3,
      text: "Build something fun!",
      completed: false,
    },
  ],
  addToDo: (toDo: string) => { },
  removeToDo: (id: string) => { },
  editToDo: (toDo: ToDo) => { },
};

export const ToDoContext = createContext(defaultContext);


export const ToDoProvider = ({ children }: { children: React.ReactNode }) => {
  const [toDos, setToDos] = useState(defaultContext.toDos);

  const addToDo = (toDo: string) => {
    const newToDo = {
      id: Number(Math.random().toFixed(5)) * 100000,
      text: toDo,
      completed: false,
    };
    setToDos([...toDos, newToDo]);
  }
  const removeToDo = (id: string) => {
    setToDos(toDos.filter((toDo) => toDo.id !== Number(id)));
  }
  const editToDo = (toDo: ToDo) => {
    setToDos(toDos.map((item) => (item.id === toDo.id ? toDo : item)));
  }



  return (
    <ToDoContext.Provider value={{
      toDos: toDos,
      addToDo,
      removeToDo,
      editToDo,
    }}>
      {children}
    </ToDoContext.Provider>
  );
};
