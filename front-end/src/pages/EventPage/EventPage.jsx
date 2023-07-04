import React, { useState } from "react";
import { RadialChart } from 'react-vis';
import ListMatchItem from './../../components/ListMatchItem/ListMatchItem';


import "react-responsive-carousel/lib/styles/carousel.min.css";
import './EventPage.css';

import close from './../../assets/icons/close.png';
import SideBar from "../../components/SideBar/SideBar";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const [currentTab, setCurrentTab] = useState('GERAL');

  const renderCurrentTab = () => {
    switch(currentTab) {
      case 'GERAL' :
        return(
          <div>
            <h1>Informações Gerais</h1>
              <p>
                Qualquer informação disponivel!
              </p>
            <h1>Histórico de Partidas</h1>
              <h2>atualizar componente para mostrar resultados e mandar para a partida passada</h2>
              <div className="event-page-lista-historico">
                <ListMatchItem></ListMatchItem>
                <ListMatchItem></ListMatchItem>
                <ListMatchItem></ListMatchItem>
                <ListMatchItem></ListMatchItem>
              </div>
          </div>
        );
      case 'COMENTARIOS':
        return(
          <div>
            <h1>Lista de ações do jogo</h1>
            <p>1:00 - começa o jogo</p>
            <p>1:15 - lateral para o time 1</p>
            <p>1:15 - lateral para o time 1</p>
            <p>1:15 - lateral para o time 1</p>
            <p>1:15 - lateral para o time 1</p>
            <p>1:15 - lateral para o time 1</p>
            <p>1:15 - lateral para o time 1</p>
            <p>1:15 - lateral para o time 1</p>
            <p>1:15 - lateral para o time 1</p>
            <p>1:15 - lateral para o time 1</p>
            <p>45:00 - final primeiro tempo</p>
          </div>
        );
      case 'ESTATISTICAS':
        return(
          <div className='event-page-charts'>
            <RadialChart data={[{angle: 5}, {angle: 5}]} width={300} height={300} />
            <RadialChart data={[{angle: 10}, {angle: 5}]} width={300} height={300} />
            <RadialChart data={[{angle: 1}, {angle: 5}]} width={300} height={300} />
          </div>
        );
      case 'CAMPEONATO': 
          return(
            <div>
              <h1>Tabela do campeonato/Chaves/Qualquer coisa estrutural do camp</h1>
            </div>
          );
    }
  };

  return(
    <div className='event-page-container'>
      <SideBar />
      <div className='event-page-info'>
        <div>
          <img className='event-page-team-logo' src='https://static.corinthians.com.br/uploads/e3dca9714da8a53bfc642de349dbdd93.png'/>
          <img className="event-page-versus-icon" src={close} />
          <img className='event-page-team-logo' src='https://static.corinthians.com.br/uploads/e3dca9714da8a53bfc642de349dbdd93.png'/>
        </div>
        <div className="event-page-menu-game-info">
            <p onClick={() => setCurrentTab('GERAL')}>GERAL</p>
            <p onClick={() => setCurrentTab('COMENTARIOS')}>COMENTÁRIOS</p>
            <p onClick={() => setCurrentTab('ESTATISTICAS')}>ESTATISTICAS</p>
            <p onClick={() => setCurrentTab('CAMPEONATO')}>CAMPEONATO</p>
        </div>
        <div className="event-page-menu-tab">
          {renderCurrentTab()}
        </div>
      </div>
    </div>
  );
};