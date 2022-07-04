import React from 'react';
import './Profile.css';

const Profile = () => {
  return (
    <div  className="profile-main">
      <div className="container">
        <div className="cover-photo">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDhqEtTB9eQFq3A3daQA2RxGPLIMg0cSTOGA&usqp=CAU"
            alt="profile"
            className="profile"/>
        </div>
        <div className="profile-name">Kamilya Mukhammedova</div>
        <p className="about">Front-end developer</p>
        <button className="msg-btn">Message</button>
        <button className="follow-btn">Following</button>
        <div>
          <i className="fab fa-facebook-f"/>
          <i className="fab fa-instagram"/>
          <i className="fab fa-youtube"/>
          <i className="fab fa-twitter"/>
        </div>
      </div>
    </div>
);
};

export default Profile;