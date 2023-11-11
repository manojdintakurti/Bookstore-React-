import React, {useEffect, useState} from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Routes,
} from "react-router-dom"
import AppHeader from "./components/Header";
import AppFooter from './components/AppFooter';
import Home from './components/Home';
import AppCategory from "./components/AppCategory";
import ErrorPage from "./components/ErrorPage";
import UnderConstruction from "./components/UnderConstruction";
import axios from "axios";
import CartComponent from "./components/CartComponent";
import Checkout from "./components/Checkout";

function App() {
    //axios.defaults.baseURL= 'http://localhost:8080/SaiManojBookstoreReactSession/api/';
    axios.defaults.baseURL = 'http://webdev.cs.vt.edu:8080/SaiManojBookstoreReactSession/api/'
    return (
      <Router basename="/SaiManojBookstoreReactSession">
          <AppHeader />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/categories" element={<AppCategory name={"Fiction"}/>} />
              <Route path="/categories/:paramName" element={<AppCategory />} />
              <Route path="*" element={<ErrorPage />} />
              <Route path="/wishlist" element={<UnderConstruction />} />
              <Route path="/cart" element={<CartComponent />} />
              <Route path="/contactus" element={<UnderConstruction />} />
              <Route path="/ebooks" element={<UnderConstruction />} />
              <Route path="/best-sellers" element={<UnderConstruction />} />
              <Route path="/checkout" element={<Checkout />} />
          </Routes>
          <AppFooter />
      </Router>
  );
}

export default App;
