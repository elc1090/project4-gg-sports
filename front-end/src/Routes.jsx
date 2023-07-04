import React from "react";
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import AllEventsPage from './pages/AllEventsPage/AllEventsPage';
import EventPage from "./pages/EventPage/EventPage";
import AllCompetitionsPage from "./pages/AllCompetitionsPage/AllCompetitionsPage";
import HomePage from './pages/HomePage/HomePage';
import CompetitionSeasons from './pages/CompetitionSeasons/CompetitionSeasons';

export default () => {
  return(<>
    <BrowserRouter>
      <Routes>
        <Route Component={HomePage} path="/" />
        <Route Component={AllEventsPage} path="/events"/>
        <Route Component={EventPage} path="/event/:id"/>
        <Route Component={AllCompetitionsPage} path="/leagues"/>
        <Route Component={CompetitionSeasons} path="/league/:id/seasons"/>
      </Routes>
    </BrowserRouter>
  </>);
};