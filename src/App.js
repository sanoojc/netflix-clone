import './App.css';
import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
import "./key";
import { Comedy, Horror, Romance, action, originals, trending } from './key';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <RowPost url={originals} title="Netflix Originals" ></RowPost>
      <RowPost url={trending} title="Trending"></RowPost>
      <RowPost url={Comedy} title="Comedy"></RowPost>
      <RowPost url={Horror} title="Horror"></RowPost>
      <RowPost url={Romance} title="Romance"></RowPost>
      <RowPost url={action} title="Action"></RowPost>
    </div>
  );
}

export default App;
