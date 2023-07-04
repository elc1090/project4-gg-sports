import React from "react";
import ListMatchItem from "../ListMatchItem/ListMatchItem";

import './ListMatches.css';


export default () => {
  return(
    <div className="list-matches-container">
      <ListMatchItem/>
      <ListMatchItem/>
      <ListMatchItem/>
      <ListMatchItem/>
      <ListMatchItem/>
    </div>
  );
};