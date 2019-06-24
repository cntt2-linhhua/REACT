import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Topmenu from './Component/Topmenu/Topmenu.js';
import Header from './Component/Header/Header.js';
import Content from './Component/Content/Contents.js';
import Footer from './Component/Footer/Footer.js';

function App() {
  return (
    <div className="013">
      <Topmenu/>
      <Header/>
      <Content tieude = "Cach su dung props bang class " vitri1 = "order-lg-2" anh ="img/01.jpg" trichdan="trich dan so 1"/>
      <Content tieude = "Cach su dung so 1 " anh ="img/02.jpg" trichdan="trich dan so 2" />
      <Content tieude = "Cach su dung so 2 " vitri1 = "order-lg-2" anh ="img/03.jpg" trichdan="trich dan so 3"/>
      <Footer/>
    </div>
  );
}

export default App;
