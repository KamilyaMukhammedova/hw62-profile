import React, {useState} from 'react';
import {nanoid} from "nanoid";
import Task from "../../components/ToDoComponents/Task/Task";
import AddTaskForm from "../../components/ToDoComponents/AddTaskForm/AddTaskForm";
import './ToDoApp.css';

const ToDoApp = () => {
  const [tasks, setTasks] = useState([
    {title: 'Buy milk', id: nanoid(), isDone: false},
    {title: 'Walk with dog', id: nanoid(), isDone: false},
    {title: 'Do homework', id: nanoid(), isDone: false},
  ]);

  const [newTaskTitle, setNewTaskTitle] = useState('');

  const removeTask = id => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const writeNewTask = currentTaskTitle => {
    setNewTaskTitle(currentTaskTitle);
  };

  const addNewTask = () => {
    if(newTaskTitle !== '') {
      const newTask = {
        title: newTaskTitle,
        id: nanoid(),
        isDone: false,
      };
      setTasks([...tasks, newTask]);
      setNewTaskTitle('');
    }
  };

  const isChecked = (id, checked) => {
    const tasksCopy = tasks.map(task => {
      if (task.id === id) {
        return {
          ...task,
          isDone: checked,
        }
      }
      return task;
    });

    setTasks(tasksCopy);
  };

  const taskComponent = tasks.map(task => {
    return (
      <Task
        key={task.id}
        id={task.id}
        title={task.title}
        titleClass={task.isDone ? 'lineThrough' : ''}
        onChecked={e => isChecked(task.id, e.target.checked)}
        onRemove={() => removeTask(task.id)}
      />
    );
  });

  return (
    <div className="todo-container">
        <AddTaskForm
          onWriteCurrentTask={e => writeNewTask(e.target.value)}
          onAddNewTask={addNewTask}
          taskValue={newTaskTitle !== '' ? newTaskTitle : ''}
        />
        {taskComponent.reverse()}
    </div>
  );
};

export default ToDoApp;