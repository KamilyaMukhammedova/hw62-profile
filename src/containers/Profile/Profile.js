import {useState} from "react";
import Modal from "../../components/ui/Modal/Modal";
import {NavLink} from "react-router-dom";
import './Profile.css';

const Profile = () => {
  const [openModal, setOpenModal] = useState(false);

  const openModalHandler = () => {
    setOpenModal(true);
  };

  const closeModalHandler = () => {
    setOpenModal(false);
  };

  return (
    <>
      <Modal show={openModal} closed={closeModalHandler}>
        <div className="card">
          <div className="form-group">
            <textarea className="form-control" placeholder="Here your message" rows="3"/>
          </div>
          <div className="row justify-content-center">
            <button type="button" className="btn btn-info mr-2">
              <NavLink to="/message" className="navLink">Send</NavLink>
            </button>
            <button type="button" className="btn btn-success" onClick={() => closeModalHandler()}>Close</button>
          </div>
        </div>
      </Modal>
      <div className="profile-main">
        <div className="profile-container">
          <div className="cover-photo">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDhqEtTB9eQFq3A3daQA2RxGPLIMg0cSTOGA&usqp=CAU"
              alt="profile"
              className="profile"/>
          </div>
          <div className="profile-name">Kamilya Mukhammedova</div>
          <p className="about">Front-end developer</p>
          <button className="msg-btn" onClick={() => openModalHandler()}>Message</button>
          <button className="follow-btn">
            <a
              href="https://github.com/KamilyaMukhammedova"
              style={{textDecoration: 'none', color: 'inherit'}}
            >
              All projects
            </a>
          </button>
          <div>
            <i className="fab fa-facebook-f"/>
            <i className="fab fa-instagram"/>
            <i className="fab fa-youtube"/>
            <i className="fab fa-twitter"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;