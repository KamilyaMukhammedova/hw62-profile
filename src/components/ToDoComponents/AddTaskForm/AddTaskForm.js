import './AddTaskForm.css';

const AddTaskForm = (props) => {
  return (
    <div className="newTask">
      <input
        type="text"
        placeholder="Add new task"
        className="newTaskInput"
        onChange={props.onWriteCurrentTask}
        value={props.taskValue}
      />
      <button type="button" className="btn btn-info mb-2" onClick={props.onAddNewTask}>Add</button>
    </div>
  );
};

export default AddTaskForm;