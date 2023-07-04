import React from 'react';
import { useNavigate } from 'react-router-dom';

import './ListMatchItem.css';
import icon from './../../assets/icons/chevron-right.png';

const logo = {
  'cuiaba-esporte-clube-mt': 'https://upload.wikimedia.org/wikipedia/pt/2/20/Cuiab%C3%A1EC2020.png',
  'ec-juventude-rs': 'https://upload.wikimedia.org/wikipedia/pt/8/8c/EC_Juventude.png',
  'ec-bahia-ba': 'https://logodownload.org/wp-content/uploads/2017/02/bahia-ec-logo-01.png',
  'santos-fc-sp': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Santos_logo.svg/640px-Santos_logo.svg.png',
  'fluminense-fc-rj': 'https://logodetimes.com/times/fluminense/logo-fluminense-1536.png',
  'sao-paulo-fc-sp': 'https://logodetimes.com/times/sao-paulo/logo-sao-paulo-4096.png',
  'fortaleza-ec-ce': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/FortalezaEsporteClube.svg/1200px-FortalezaEsporteClube.svg.png',
  'atletico-mineiro-mg': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Clube_Atl%C3%A9tico_Mineiro_logo.svg/1810px-Clube_Atl%C3%A9tico_Mineiro_logo.svg.png',
  'se-palmeiras-sp': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Palmeiras_logo.svg/1024px-Palmeiras_logo.svg.png',
  'cr-flamengo-rj': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Flamengo_braz_logo.svg/400px-Flamengo_braz_logo.svg.png',
  'gremio-fb-porto-alegrense-rs': 'https://logodetimes.com/times/gremio/logo-gremio-4096.png',
  'ceara-sc-ce': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Cear%C3%A1_Sporting_Club_logo.svg/1845px-Cear%C3%A1_Sporting_Club_logo.svg.png',
  'ac-goianiense-go': 'https://upload.wikimedia.org/wikipedia/en/thumb/0/0a/Atl%C3%A9tico_Clube_Goianiense_logo.svg/1200px-Atl%C3%A9tico_Clube_Goianiense_logo.svg.png',
  'sc-corinthians-sp': 'https://static.corinthians.com.br/uploads/e3dca9714da8a53bfc642de349dbdd93.png',
  '': '',
};

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ event, home, away }) => {
  const navigate = useNavigate();

  return(
    <div className="list-match-item-container">
      <div className='list-match-item-match-container'>
        <div className="list-match-item-match-team">
          <img src={ logo[home?.slug] ||'https://static.corinthians.com.br/uploads/e3dca9714da8a53bfc642de349dbdd93.png'}/>
          <h1>{home?.shortName}</h1>
        </div>
        <div className="list-match-item-match-info">
          <p className='list-match-item-event-date'>DATA X</p>
          <p className='list-match-item-league-name'>Brasileiro Serie A</p>
          <p className='list-match-item-phase-name'>QUARTER-FINAL | Group A</p>
        </div>
        <div className="list-match-item-match-team">
          <img src={ logo[away?.slug] ||'https://static.corinthians.com.br/uploads/e3dca9714da8a53bfc642de349dbdd93.png'}/>
          <h1>{away?.shortName}</h1>
        </div>
      </div>
      <div className='list-match-item-click-icon'>
        <img src={icon} onClick={() => navigate('/event/dasdsada')}/>
      </div>
    </div>
  );
};