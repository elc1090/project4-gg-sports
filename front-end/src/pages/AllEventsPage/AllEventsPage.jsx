import React, { useEffect, useState } from "react";
import { ProgressBar } from 'react-loader-spinner';
import ListMatches from "../../components/ListMatches/ListMatches";
import SideBar from "../../components/SideBar/SideBar";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const [lstItems, setLstItems] = useState([]);
  const [lstLeagues, setLstLeagues] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const response = await fetch('https://proj3-ww06.onrender.com/competitions');
    const jsonData = await response.json();
    
    setLstItems(jsonData);
    setLstLeagues(jsonData.slice(0, 10));
    setIsLoading(false);
  };
  
  return(
    <div className="all-events-container">
      <SideBar></SideBar>
      <ListMatches></ListMatches>
    </div>
  );
};