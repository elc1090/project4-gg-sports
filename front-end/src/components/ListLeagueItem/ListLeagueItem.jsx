import React, {useState} from 'react';
import { ThreeDots } from 'react-loader-spinner';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';


import './ListLeagueItem.css';

import info from './../../assets/icons/info.png';
import close from './../../assets/icons/close.png';

const logo = {
  'euro-cup-international': 'https://upload.wikimedia.org/wikipedia/en/9/96/UEFA_Euro_2020_Logo.svg',
  'uefa-champions-league-international-clubs': 'https://upload.wikimedia.org/wikipedia/pt/9/9b/116px-UEFA_Champions_League_logo_2_svg.png',
  'laliga-spain': 'https://assets.laliga.com/assets/logos/laliga-h/laliga-h-1200x1200.png',
  'wc-qualification-uefa-international': 'https://upload.wikimedia.org/wikipedia/en/b/b0/UEFA_Euro_2016_qualifying.png',
  'wc-qualification-caf-international': 'https://a.espncdn.com/combiner/i?img=%2Fi%2Fleaguelogos%2Fsoccer%2F500%2F63.png',
  'world-cup-qualification-concacaf-international': 'https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/CONCACAF_qualifiers_-_Road_to_Qatar_-_Logo.svg/1200px-CONCACAF_qualifiers_-_Road_to_Qatar_-_Logo.svg.png',
  'world-cup-international': 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e3/2022_FIFA_World_Cup.svg/1200px-2022_FIFA_World_Cup.svg.png',
  '': '',
}

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ name, gender, status, dataId, slug }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [showInformation, setShowInformation] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = () => {
    if(status === 'AVAILABLE') {
      navigate(`/league/${dataId}/seasons`);
    } else {
      setIsLoading(!isLoading);
    }
  };
  
  return(
    <div className='list-league-item-container' style={{ backgroundColor: status === 'UNAVAILABLE' ? 'gray' : 'white'}}>
      <div className='list-league-item-header' style={{ backgroundColor: status === 'UNAVAILABLE' ? 'gray' : 'white'}}>
        <img src={info} className='list-league-item-info-icon' onClick={() => setShowInformation(true)}/>
        {isLoading ? (
          <ThreeDots 
          height="20" 
          width="20" 
          radius="9"
          color="#313132" 
          ariaLabel="three-dots-loading"
        />
        ) : (
          <div className='list-league-item-load-button' onClick={() => handleNavigation()}>
            <p>{status}</p>
          </div>
        )}
      </div>
      <div>
        <img className='list-league-item-league-icon' src={logo[slug] || 'https://upload.wikimedia.org/wikipedia/pt/4/42/Campeonato_Brasileiro_S%C3%A9rie_A_logo.png'}/>
        <h1>{name}</h1>
        <h2 className={gender === 'MEN' ? 'list-league-item-men-gender' : 'list-league-item-female-gender'}>{gender}</h2>
      </div>
      <Modal
        isOpen={showInformation}
        contentLabel="Informações"
      >
        <div className='list-league-item-modal-header'>
          <img src={close} className='list-league-item-close-button' onClick={() => setShowInformation(false)}/>
        </div>
        <div className='list-league-item-modal-info'>
          <img className='list-league-item-league-logo' src={logo[slug] || 'https://upload.wikimedia.org/wikipedia/pt/4/42/Campeonato_Brasileiro_S%C3%A9rie_A_logo.png'}/>
          <div>
            <h1>História da {name}</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis sit amet magna id venenatis. Quisque tempus vel lorem sed consequat. Suspendisse neque ipsum, hendrerit a condimentum in, luctus sed libero. Donec quis massa non nulla bibendum semper in eu diam. Aliquam a velit enim. Fusce semper tincidunt scelerisque. Maecenas porttitor venenatis quam a molestie. Cras in nibh pretium, luctus massa vel, auctor magna. Curabitur sit amet nisl sed ante pretium elementum sit amet at quam. Fusce eu luctus metus, sed tempus sapien. Vivamus lobortis, ex ac cursus lobortis, augue eros imperdiet lacus, quis tristique nunc sem ut eros. Praesent eu erat non dui dignissim elementum. Nullam nec pellentesque ligula. Maecenas vel venenatis elit. Duis finibus quam nec aliquet imperdiet. Proin sed massa a nunc maximus elementum nec ut ante.

Nam dictum eu tellus a posuere. Duis dolor sapien, venenatis sit amet faucibus eu, dignissim nec augue. Praesent consequat tincidunt massa. Cras efficitur fermentum luctus. Integer pellentesque facilisis augue ac pretium. Sed nisi est, cursus ac faucibus nec, ullamcorper vitae justo. Quisque ut pellentesque nulla. Praesent semper nisi vitae erat mattis rutrum. Nullam ut lectus orci. Suspendisse vel leo vel dolor vulputate ultrices. Sed vel arcu sit amet quam blandit bibendum in non magna. Donec bibendum est et sem imperdiet, ut suscipit tortor laoreet. Interdum et malesuada fames ac ante ipsum primis in faucibus.

Quisque ornare maximus eros, ac viverra leo fringilla in. Vivamus justo ante, feugiat id dui at, porttitor sagittis velit. Phasellus purus mauris, dictum ut est sed, posuere volutpat massa. Sed molestie gravida diam, ut ullamcorper velit volutpat et. Suspendisse pretium dignissim elit ut luctus. Nunc tempus leo ex, eu convallis orci posuere in. Nullam tristique, ligula eget pellentesque mattis, lorem velit sagittis sapien, sit amet interdum libero lacus in massa. Ut vel aliquam justo. Quisque eget urna vel justo pretium tristique ut a erat. Sed sit amet mi id mauris tincidunt accumsan. Sed vel dui sit amet nibh pharetra volutpat sit amet vel nisl. Nullam mollis et sapien sollicitudin ornare. Vivamus vel velit nec mi tincidunt molestie. Aenean fringilla dolor non massa molestie, vel blandit felis semper. Etiam nec augue nulla.

</p>
          </div>
        </div>

      </Modal>
    </div>
  );
};