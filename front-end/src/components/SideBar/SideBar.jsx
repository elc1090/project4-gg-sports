import React from "react";
import { useNavigate } from "react-router-dom";

import './SideBar.css';
import ball from '../../assets/icons/soccer-ball.png';
import campeonato from '../../assets/icons/campeonato.png';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const navigate = useNavigate();
  
  return(
    <div className="side-bar-container">
      <div className="side-bar-button">
        <img src={ball} />
        <h1 onClick={() => navigate('/events')}>Matches</h1>
      </div>
        <div className="side-bar-button">
          <img src={campeonato} />
          <h1 onClick={() => navigate('/leagues')}>Leagues</h1>
        </div>
    </div>
  );
};