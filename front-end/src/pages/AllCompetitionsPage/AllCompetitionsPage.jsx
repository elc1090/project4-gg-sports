import React, { useEffect, useState } from "react";
import { ProgressBar } from 'react-loader-spinner';

import SideBar from "../../components/SideBar/SideBar";
import ListLeagueItem from "../../components/ListLeagueItem/ListLeagueItem";

import './AllCompetitionsPage.css';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const [displayedItems, setDisplayedItems] = useState(10);
  const [lstItems, setLstItems] = useState([]);
  const [lstLeagues, setLstLeagues] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const response = await fetch('https://proj3-ww06.onrender.com/competitions');
    const jsonData = await response.json();
    
    const available = jsonData.filter((item) => item.status === 'AVAILABLE');
    console.log(available);
    const unavailable = jsonData.filter((item) => item.status !== 'AVAILABLE');
    setLstItems([... available, ...unavailable]);
    setLstLeagues([... available, ...unavailable].slice(0, displayedItems));
    setIsLoading(false);
  };

  useEffect(() => {
    setIsLoading(true);
    setLstLeagues(lstItems.slice(0, displayedItems));
    setIsLoading(false);
  }, [displayedItems]);

  const renderItem = (item, index) => {
    return <ListLeagueItem key={index} {...item} />;
  };
  
  return(
    <div className="all-comp-page-container">
      <SideBar />
      {isLoading ? 
        (<ProgressBar
          height="80"
          width="80"
          ariaLabel="progress-bar-loading"
          borderColor = '#FFBC2A'
          barColor = '#000'
        />) : 
        ( 
          <div>
            <div className="all-comp-page-list">
              { lstLeagues.map(renderItem) }
              <div onClick={() => setDisplayedItems(displayedItems + 10)}>
                <p className="all-comp-page-load-more">Load More</p>
              </div>
            </div>
          </div>
        )
      }
      
    </div>
  );
};