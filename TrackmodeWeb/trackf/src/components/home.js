import {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import "./css/style.css";
import Users from "./users.js";
import Pis from "./pis.js";
import Map from "./map.js";
import React from "react";

const Home = () => {

  useEffect(()=>{
    console.log(window.location.pathname);
  }, [])

  return (
    <>
    <Router>
    <div className="sidebar">
      <img src={logo} className="App-logo" alt="logo"></img>
      <h2 style={{display:'block', color:'black'}}>TRACKMODE</h2>
      <NavLink activeClassName='active' to='/map'>Map</NavLink>
      <NavLink activeClassName='active' to='/users'>Users</NavLink>
      <NavLink activeClassName='active' to='/pis'>Pis</NavLink>
      <NavLink activeClassName='active' to='/about'>About</NavLink>
    </div>
      <Route path="/map"><Map/></Route>
      <Route path="/users"><Users/></Route>
      <Route path="/pis"><Pis/></Route>
    </Router>
    </>
  );
};


export default Home;
