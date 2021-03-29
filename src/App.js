import React from 'react';
import AsideMenu from './Components/AsideMenu';
import CardWrap from './Components/CardWrap';
import Header from './Components/Header';
import Table from './Components/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

function App() {
  return (
    <div className="App d-flex">
     <AsideMenu/>
     <div className="right-box" >
      <Header className="header"/>
     <CardWrap/>
     <br></br>
     
     <Table/>
     </div>
    </div>
  );
}

export default App;