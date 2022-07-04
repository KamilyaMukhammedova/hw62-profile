import './BackDrop.css';

const BackDrop = ({show, clicked}) => {
  return show ? <div className="Backdrop" onClick={clicked}/> : null;
};

export default BackDrop;