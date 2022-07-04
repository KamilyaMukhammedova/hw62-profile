import './Task.css';

const Task = (props) => {
  return (
    <div className="task">
      <div className={props.titleClass}>{props.title}</div>
      <div>
        <input type="checkbox" onChange={props.onChecked} className="checkboxInput"/>
        <button type="button" className="btn btn-outline-danger mb-2" onClick={props.onRemove}>Remove</button>
      </div>
    </div>
  );
};

export default Task;