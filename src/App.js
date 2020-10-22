import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Footer from './Component/Footer';
import Header from './Component/Header';
import Home from './Component/Home';
import SearchPage from './Component/SearchPage';

function App() {
  return (
    <div className="app">

      <Router>
        <Header />

        <Switch>
          <Route path='/search'>
            <SearchPage />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>

        <Footer />
      </Router>

    </div>
  );
}

export default App;






{/* 
    Home Component 
      * header *
      * banner *
        * search Component *
      * cards *
      * footer *
*/}

{/* 
    Search Page
      * header *
      * footer *
*/}