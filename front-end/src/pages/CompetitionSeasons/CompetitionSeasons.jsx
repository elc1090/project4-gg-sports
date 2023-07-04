import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { ProgressBar } from 'react-loader-spinner';
import SideBar from "../../components/SideBar/SideBar";

import './CompetitionSeasons.css';
import ListMatchItem from "../../components/ListMatchItem/ListMatchItem";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const [lstSeasons, setLstSeasons] = useState([]);
  const [seasonsMatches, setSeasonMatches] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const responseSeason = await fetch(`https://proj3-ww06.onrender.com/seasons/${id}`);
    const jsonDataSeason = await responseSeason.json();
    const seasonObj = jsonDataSeason.map((item) => ({Id: item.dataId, seasonInfo: item}));
    const seasonMatchObj = {};

    for await (let season of seasonObj) {
      const response = await fetch(`https://proj3-ww06.onrender.com/matches/${season.Id}`);
      const jsonData = await response.json();

      season.matches = jsonData.splice(0, 10);
      
      seasonMatchObj[season.Id] = season;
    }
    
    
    setLstSeasons(seasonObj);
    setSeasonMatches(seasonMatchObj);
    setIsLoading(false);
  };

  const renderSeason = (item, index) => {
    const season = seasonsMatches[item.Id];
    console.log(season.matches)
    return(
      <div key={index} className="comp-seasons-season">
        <h1 className="comp-seasons-season-label">'{season.seasonInfo.year}</h1>
        <div className="comp-season-matches">
          {season.matches.map(renderMatches)}
        </div>
      </div>
    );
  }

  const renderMatches = (item, index) => {
    return <ListMatchItem key={index} event={item} home={item.homeTeam} away={item.awayTeam}/>;
  };

  return(
    <div className="comp-season-container">
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
            {lstSeasons.map(renderSeason)}
          </div>
        )
      }
    </div>
  );
};